
import Stripe from "stripe";
import crypto from "node:crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20"
});

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
    console.error("Webhook signature verification failed.");
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {

    const session = event.data.object;

    const email =
      session.customer_email || session.customer_details?.email;

    // 🎯 TOKEN sécurisé
    const payload = {
      exp: Date.now() + 24 * 60 * 60 * 1000, // 24h
      count: 0
    };

    const token = Buffer.from(JSON.stringify(payload)).toString("base64");

    const downloadLink =
      `https://lapuyade.fr/api/download?token=${token}`;

    console.log("Paiement réussi :", email);
    console.log("Lien de téléchargement :", downloadLink);
  }

  return Response.json({ received: true });
}
