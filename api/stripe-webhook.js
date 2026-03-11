import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  const event = req.body;

  if (event.type === "checkout.session.completed") {

    const session = event.data.object;

    const email = session.customer_details.email || session.customer_details.email;

    const downloadLink = "https://lapuyade.fr/download/art1.zip";

    console.log("Paiement réussi pour :", email);

  }

  res.status(200).json({ received: true });
}
