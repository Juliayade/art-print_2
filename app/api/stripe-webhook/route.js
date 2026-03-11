import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {

  const body = await req.text();

  const signature = req.headers.get("stripe-signature");

  let event;

  try {

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

  } catch (err) {

    console.error("Webhook signature verification failed.", err.message);

    return new Response("Webhook Error", { status: 400 });

  }

  if (event.type === "checkout.session.completed") {

    const session = event.data.object;

    const email = session.customer_email || session.customer_details.email;

    console.log("Paiement réussi pour :", email);

  }

  return Response.json({ received: true });

}
