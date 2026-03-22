
 "use client";

import Image from "next/image";
import { useParams } from "next/navigation";

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

export default function Page() {

  

  // ✅ FIX ICI
  const params = useParams();

const slug =
  typeof params?.slug === "string"
    ? params.slug
    : Array.isArray(params?.slug)
    ? params.slug[0]
    : null;

if (!slug) {
  return <div>Slug invalide</div>;
}

 const artwork = artworks[slug];
 
  if (!artwork) {
    return <div>Artwork introuvable</div>;
  }

  return (
    <div className="min-h-screen bg-wall px-6 py-20 text-ink">
      <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12">

        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover"
          />
        </div>

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

            <button onClick={handleCheckout}>
              Acheter
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
