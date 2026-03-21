
import Stripe from "stripe";
import crypto from "node:crypto";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20"
});

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
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
  } catch {
    return new Response("Webhook Error", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {

    const session = event.data.object;

    const email =
      session.customer_email || session.customer_details?.email;

    // 🔐 token sécurisé
    const token = crypto.randomBytes(24).toString("hex");

    await redis.set(token, {
      expires: Date.now() + 24 * 60 * 60 * 1000,
      count: 0,
      email: email
    });

    const downloadLink =
      `https://lapuyade.fr/api/download?token=${token}`;

    // 📧 EMAIL AUTO
    await resend.emails.send({
      from: "Julia Lapuyade <onboarding@resend.dev>", // tu pourras changer après
      to: email,
      subject: "Votre oeuvre est prête 🎨",
      html: `
        <h2>Merci pour votre achat ✨</h2>
        <p>Votre artwork est prêt :</p>
        <a href="${downloadLink}" style="
          display:inline-block;
          padding:12px 20px;
          background:#c47b5c;
          color:white;
          text-decoration:none;
          border-radius:6px;
        ">
          Télécharger votre oeuvre
        </a>

        <p style="margin-top:20px;font-size:12px;color:#666;">
          Lien valable 24h – 3 téléchargements max
        </p>
      `
    });

    console.log("Email envoyé à :", email);
  }

  return Response.json({ received: true });
}
