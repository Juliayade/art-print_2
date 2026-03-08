"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const details = [
  { label: "Discipline", value: "Pastel sec" },
  {
    label: "Style",
    value: "Art contemporain surrealiste, realisme poetique et naturaliste",
  },
  {
    label: "Thematiques",
    value: "Voyages, nature, paysages exotiques, vegetation tropicale",
  },
  {
    label: "Techniques",
    value:
      "Travail sur la lumiere, la saturation et la matiere pour un rendu vibrant et immersif",
  },
  {
    label: "Associations",
    value: "Membre actif de l\u2019association Art du Pastel en Normandie",
  },
];

export default function ProfilePage() {
  return (
    <>
      {/* Hero image */}
      <section className="relative h-[55vh] overflow-hidden lg:h-[65vh]">
        <Image
          src="/images/profile.jpg"
          alt="Julia Lapuyade"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 lg:px-16 lg:pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50"
          >
            L&apos;artiste
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-2 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white"
          >
            Julia Lapuyade
          </motion.h1>
        </div>
      </section>

      {/* Artistic statement */}
      <section className="bg-wall py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            {/* Left column — label */}
            <div>
              <AnimatedSection>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna">
                  Presentation
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.2] text-ink">
                  Demarche
                  <br />
                  artistique
                </h2>
                <div className="mt-6 h-px w-[60px] bg-sienna" />
              </AnimatedSection>
            </div>

            {/* Right column — text */}
            <div>
              <AnimatedSection delay={0.1}>
                <p className="text-[16px] font-light leading-[2] text-ink-light">
                  Mon travail s&apos;inscrit dans un univers colore et onirique
                  ou la nature occupe une place centrale. J&apos;explore les
                  formes et les couleurs inspirees de voyages et de la vie
                  quotidienne, en cherchant a creer un equilibre entre realisme
                  et imaginaire.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mt-8 text-[16px] font-light leading-[2] text-ink-light">
                  A travers le pastel sec, j&apos;exprime la vitalite et la
                  sensualite des plantes exotiques et des paysages naturels, dans
                  une approche contemporaine et surrealiste. Mes oeuvres se
                  distinguent par une palette vive et contrastee et une
                  composition structuree.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <blockquote className="mt-12 border-l border-sienna/40 pl-8">
                  <p className="font-display text-[22px] font-light italic leading-[1.6] text-ink/50">
                    Chaque oeuvre est une invitation au depaysement, a la reverie
                    et a la contemplation du vivant.
                  </p>
                </blockquote>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <p className="mt-12 text-[13px] font-light leading-[1.8] text-ink-faint">
                  Approche melant realisme naturaliste, composition contemporaine
                  et atmosphere surrealiste.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="border-t border-ink/5 bg-cream/40 py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <AnimatedSection>
            <p className="mb-16 text-[11px] font-medium uppercase tracking-[0.3em] text-ink-faint">
              En detail
            </p>
          </AnimatedSection>

          <div className="space-y-0">
            {details.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col gap-2 border-b border-ink/5 py-7 md:flex-row md:items-baseline md:gap-16"
                >
                  <span className="w-40 shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-sienna">
                    {item.label}
                  </span>
                  <span className="text-[15px] font-light leading-[1.7] text-ink-light transition-colors duration-300 group-hover:text-ink">
                    {item.value}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Portfolio */}
      <section className="bg-wall py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact */}
            <AnimatedSection>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-ink-faint">
                Contact
              </p>
              <div className="mt-8 space-y-5">
                <a
                  href="mailto:julia@lapuyade.fr"
                  className="block text-[16px] text-ink transition-colors hover:text-sienna"
                >
                  julia@lapuyade.fr
                </a>
                <a
                  href="https://www.tiktok.com/@juju_draw_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[14px] text-ink-light transition-colors hover:text-ink"
                >
                  TikTok &mdash; @juju_draw_
                </a>
                <a
                  href="https://www.instagram.com/julia.lapuyade.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[14px] text-ink-light transition-colors hover:text-ink"
                >
                  Instagram &mdash; @julia.lapuyade.art
                </a>
              </div>
            </AnimatedSection>

            {/* Portfolio */}
            <AnimatedSection delay={0.1}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-ink-faint">
                Portfolio
              </p>
              <a
                href="https://www.canva.com/design/DAGLUli79WM/tRqYhNQv_DKpJA-sqq4x6Q/view?utm_content=DAGLUli79WM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h56e9b35db0"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex items-center gap-6"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden">
                  <Image
                    src="/images/portfolio.jpg"
                    alt="Portfolio"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <span className="text-[14px] font-medium text-ink transition-colors group-hover:text-sienna">
                    Voir le portfolio complet
                  </span>
                  <span className="mt-1 block text-[12px] text-ink-faint">
                    Collection sur Canva
                  </span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="ml-auto text-ink-faint transition-colors group-hover:text-sienna"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
