"use client";

async function handleCheckout() {

  const res = await fetch("/api/create-checkout", {
    method: "POST",
  });

  const data = await res.json();

  window.location.href = data.url;

}

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";


export default function ShopPage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-wall">
        {/* Background image — very subtle */}
        <div className="absolute inset-0 opacity-[0.04]">
          <Image
            src="/images/i25.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna">
              Boutique
            </p>
          </motion.div>

          <AnimatedSection delay={0.2}>
            <h1 className="mt-6 font-display text-[clamp(3rem,6vw,5rem)] font-light leading-[1] text-ink">
              A venir
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mx-auto mt-6 h-px w-[60px] bg-sienna" />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <p className="mt-8 text-[15px] font-light leading-[1.9] text-ink-light">
              La boutique en ligne sera bientot disponible. En attendant,
              n&apos;hesitez pas a me contacter directement pour toute demande
              concernant mes oeuvres.
            </p>
          </AnimatedSection>

<AnimatedSection delay={0.6}>
            
  <div className="mt-16 flex justify-center">

    <div className="group max-w-xs text-left">

      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src="/images/preview_fili.jpg"
          alt="Artwork"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="font-display text-lg text-ink">
          A walk in the city
        </h3>

        <p className="mt-1 text-sm text-ink-light">
          Digital artwork – high resolution print
        </p>

        <div className="mt-3 flex items-center justify-between">

          <span className="text-sm text-sienna">
            5 €
          </span>

          
            <a href="/artwork/a-walk-in-the-city">
            </a>
            Acheter - Voir Produit
          </button>

        </div>
      </div>

    </div>

  </div>
</AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:julia@lapuyade.fr"
                className="border border-ink/15 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
              >
                Me contacter
              </a>
              <a
                href="https://www.instagram.com/julia.lapuyade.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-light transition-colors hover:text-ink"
              >
                Instagram
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
