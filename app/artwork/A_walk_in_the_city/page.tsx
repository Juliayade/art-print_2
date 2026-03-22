"use client";

import Image from "next/image";

// 📦 TES ŒUVRES (base de données simple)
const artworks = {
  "a-walk-in-the-city": {
    title: "A Walk in the City",
    price: 5,
    image: "/images/preview_fili.jpg",
    description: "Une œuvre digitale urbaine moderne."
  }
};

async function handleCheckout() {
  const res = await fetch("/api/create-checkout", {
    method: "POST",
  });

  const data = await res.json();
  window.location.href = data.url;
}

export default function Page({ params }) {

  // 🎯 récupération du slug
  const artwork = artworks[params.slug];

  // sécurité si slug invalide
  if (!artwork) {
    return <div>Artwork introuvable</div>;
  }

  return (
    <div className="min-h-screen bg-wall px-6 py-20 text-ink">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXTE */}
        <div>
          <h1 className="font-display text-3xl mb-4">
            {artwork.title}
          </h1>

          <p className="text-sm text-ink-light mb-6">
            {artwork.description}
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="text-lg text-sienna">
              {artwork.price} €
            </span>

            <button
              onClick={handleCheckout}
              className="border border-sienna px-6 py-3 text-xs uppercase tracking-[0.2em] text-sienna hover:bg-sienna hover:text-white"
            >
              Acheter
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
