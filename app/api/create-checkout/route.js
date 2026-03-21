import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "A walk in the city",
            },
            unit_amount: 500, // 5€
          },
          quantity: 1,
        },
      ],

      success_url: "https://lapuyade.fr/success",
      cancel_url: "https://lapuyade.fr/shop",
    });

    return Response.json({ url: session.url });

  } catch (error) {
    console.error(error);
    return new Response("Error creating checkout", { status: 500 });
  }
}
