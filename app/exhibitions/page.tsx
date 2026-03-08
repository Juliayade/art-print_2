"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface Exhibition {
  year: string;
  location: string;
  venue: string;
  description: string;
  images: string[];
  links?: { label: string; href: string }[];
}

const pastExhibitions: Exhibition[] = [
  {
    year: "2025",
    location: "Paris",
    venue: "Galerie The Muisca",
    description: "Exposition de deux oeuvres originales",
    images: ["/images/i14.jpg", "/images/i15.jpg", "/images/i16.jpg"],
    links: [
      {
        label: "Cabo Carvoeiro",
        href: "https://www.themuisca.com/product-page/cabo-carvoeiro-the-famous-rock",
      },
      {
        label: "Un Autre Monde",
        href: "https://www.themuisca.com/product-page/un-autre-monde",
      },
    ],
  },
  {
    year: "2024",
    location: "Paris, 6e arr.",
    venue: "Galerie Makowski",
    description: "Exposition de trois oeuvres originales",
    images: ["/images/i17.jpg", "/images/i12.jpg", "/images/i19.jpg"],
  },
  {
    year: "2024",
    location: "Bayeux",
    venue: "Art du Pastel en Normandie",
    description: "Exposition de trois oeuvres originales",
    images: ["/images/affiche_bayeux.jpg"],
  },
  {
    year: "2023",
    location: "Caen",
    venue: "Galerie Crearte",
    description: "Exposition de trois oeuvres originales",
    images: ["/images/i18.jpg", "/images/i9.jpg", "/images/i16.jpg"],
  },
  {
    year: "2023",
    location: "International",
    venue: "Artist Talk Magazine",
    description:
      "Presentation de trois oeuvres dans le magazine britannique Artist Talk Magazine",
    images: ["/images/i13.jpg", "/images/artist_talk.jpg"],
    links: [
      {
        label: "Voir le magazine — Issue 26",
        href: "https://www.artisttalkmagazine.com/issue-26",
      },
    ],
  },
];

const upcomingExhibitions = [
  {
    year: "2026",
    location: "Bayeux",
    venue: "Art du Pastel en Normandie",
    description: "Exposition de trois oeuvres originales",
  },
];

export default function ExhibitionsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-wall pb-8 pt-32 lg:pb-12 lg:pt-40">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna"
          >
            Parcours
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-ink"
          >
            Expositions
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 h-px bg-sienna"
          />
        </div>
      </section>

      {/* Upcoming */}
      <section className="bg-wall pb-20 pt-8">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-sage" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-sage">
                A venir
              </p>
            </div>
          </AnimatedSection>

          {upcomingExhibitions.map((expo, i) => (
            <AnimatedSection key={i} delay={0.1}>
              <div className="mt-8 border border-sage/20 px-8 py-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-display text-3xl font-light text-sage">
                    {expo.year}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-medium text-ink">
                      {expo.venue}
                    </h3>
                    <p className="mt-1 text-[13px] text-ink-light">
                      {expo.location} &mdash; {expo.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Past exhibitions */}
      <section className="border-t border-ink/5 bg-cream/30 py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <AnimatedSection>
            <p className="mb-20 text-[11px] font-medium uppercase tracking-[0.3em] text-ink-faint">
              Expositions precedentes
            </p>
          </AnimatedSection>

          <div className="space-y-28">
            {pastExhibitions.map((expo, i) => (
              <AnimatedSection key={i}>
                <article>
                  {/* Exhibition header */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                    <span className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-ink/15">
                      {expo.year}
                    </span>
                    <div>
                      <h3 className="font-display text-[22px] font-medium text-ink">
                        {expo.venue}
                      </h3>
                      <p className="mt-1 text-[13px] text-ink-light">
                        {expo.location} &mdash; {expo.description}
                      </p>
                    </div>
                  </div>

                  {/* Images */}
                  <div
                    className={`mt-10 grid gap-3 ${
                      expo.images.length === 1
                        ? "max-w-md"
                        : expo.images.length === 2
                          ? "sm:grid-cols-2"
                          : "sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {expo.images.map((img, j) => (
                      <motion.div
                        key={img}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1, duration: 0.8 }}
                        className="group relative aspect-[4/3] overflow-hidden bg-parchment"
                      >
                        <Image
                          src={img}
                          alt={`${expo.venue} — ${j + 1}`}
                          fill
                          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Links */}
                  {expo.links && (
                    <div className="mt-6 flex flex-wrap gap-6">
                      {expo.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-[13px] text-ink-light transition-colors hover:text-ink"
                        >
                          {link.label}
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
                      ))}
                    </div>
                  )}
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
