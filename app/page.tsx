"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const featuredWorks = [
  { src: "/images/i1.jpg", title: "I" },
  { src: "/images/i3.jpg", title: "II" },
  { src: "/images/i4.jpg", title: "III" },
  { src: "/images/i13.jpg", title: "IV" },
  { src: "/images/i22.jpg", title: "V" },
  { src: "/images/i24.jpg", title: "VI" },
];

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero-video relative flex items-end justify-start">
        <video autoPlay muted loop playsInline className="absolute inset-0">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 px-6 pb-20 lg:px-16 lg:pb-28">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-8 h-px bg-white/40"
          />
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[1.05] text-white"
          >
            Julia
            <br />
            Lapuyade
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 text-[13px] font-light uppercase tracking-[0.3em] text-white/60"
          >
            Entre nature, reve et couleurs
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <motion.div
            animate={{ height: [20, 40, 20] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-white/30"
          />
        </motion.div>
      </section>

      {/* ─── Welcome / Statement ─── */}
      <section className="bg-wall py-32 lg:py-44">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <AnimatedSection>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna">
              Artiste Peintre
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.2] text-ink">
              Amene de la couleur
              <br />
              <em className="text-ink-light">a ton monde</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mx-auto mt-8 h-px w-[60px] bg-sienna" />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="mx-auto mt-8 max-w-[520px] text-[15px] font-light leading-[1.9] text-ink-light">
              Un univers colore et onirique ou la nature occupe une place
              centrale. A travers le pastel sec, une exploration des formes et
              des couleurs inspirees de voyages et de la vie quotidienne.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Featured Works ─── */}
      <section className="bg-cream/50 py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-20 flex items-end justify-between">
            <AnimatedSection>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-ink-faint">
                Selection
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.8rem)] font-light text-ink">
                Oeuvres
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Link
                href="/gallery"
                className="group flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.15em] text-ink-light transition-colors duration-300 hover:text-ink"
              >
                Voir tout
                <span className="inline-block h-px w-8 bg-ink-faint transition-all duration-300 group-hover:w-12 group-hover:bg-ink" />
              </Link>
            </AnimatedSection>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work, i) => (
              <AnimatedSection key={work.src} delay={i * 0.08}>
                <Link href="/gallery" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ─── */}
      <section className="bg-wall py-28 lg:py-36">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <AnimatedSection>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Julia Lapuyade"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.15}>
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna">
                  L&apos;artiste
                </p>
                <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-ink">
                  Demarche
                  <br />
                  <em className="text-ink-light">artistique</em>
                </h2>
                <div className="mt-6 h-px w-[60px] bg-sienna" />
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <p className="mt-8 text-[15px] font-light leading-[1.9] text-ink-light">
                  Mon travail s&apos;inscrit dans un univers colore et onirique
                  ou la nature occupe une place centrale. J&apos;explore les
                  formes et les couleurs inspirees de voyages et de la vie
                  quotidienne, en cherchant a creer un equilibre entre realisme
                  et imaginaire.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.35}>
                <p className="mt-6 font-display text-xl italic leading-relaxed text-ink/40">
                  &ldquo;Chaque oeuvre est une invitation au depaysement, a la
                  reverie et a la contemplation du vivant.&rdquo;
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Link
                  href="/profile"
                  className="group mt-10 inline-flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:text-sienna"
                >
                  Decouvrir le profil
                  <span className="inline-block h-px w-10 bg-ink-faint transition-all duration-300 group-hover:w-14 group-hover:bg-sienna" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Full-bleed image break ─── */}
      <AnimatedSection>
        <div className="relative h-[50vh] overflow-hidden lg:h-[60vh]">
          <Image
            src="/images/i15.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </AnimatedSection>

      {/* ─── CTA ─── */}
      <section className="bg-ink py-28 lg:py-36">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <AnimatedSection>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30">
              Contact
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-white">
              Envie d&apos;en savoir plus ?
            </h2>
            <p className="mt-4 text-[15px] font-light leading-[1.8] text-white/40">
              N&apos;hesitez pas a me contacter pour toute question,
              collaboration ou information sur mes oeuvres.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="border border-white/20 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
              >
                Me contacter
              </Link>
              <Link
                href="/exhibitions"
                className="px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                Expositions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
