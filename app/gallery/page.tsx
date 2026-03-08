"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const images = Array.from({ length: 25 }, (_, i) => ({
  src: `/images/i${i + 1}.jpg`,
  id: i + 1,
}));

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = () => setLightbox(null);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      {/* Page header */}
      <section className="bg-wall pb-8 pt-32 lg:pb-12 lg:pt-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna"
          >
            Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] font-light text-ink"
          >
            Galerie
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 h-px bg-sienna"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-md text-[14px] font-light leading-[1.8] text-ink-light"
          >
            Explorez l&apos;univers colore et onirique a travers cette
            collection de pastels secs.
          </motion.p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-wall pb-28 pt-8">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {images.map((img, i) => (
              <AnimatedSection key={img.id} delay={(i % 4) * 0.06}>
                <div
                  className="group mb-4 cursor-pointer overflow-hidden break-inside-avoid bg-parchment"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={`Oeuvre ${img.id}`}
                      width={700}
                      height={900}
                      className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/5" />

                    {/* Hover index */}
                    <div className="absolute bottom-0 left-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <span className="font-display text-sm font-light text-white/80">
                        {String(img.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-20 text-[11px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
            >
              Fermer
            </button>

            {/* Counter */}
            <div className="absolute left-6 top-6 z-20 text-[11px] uppercase tracking-[0.2em] text-white/30">
              {String(lightbox + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-6 top-1/2 z-20 -translate-y-1/2 p-4 text-white/30 transition-colors hover:text-white"
              aria-label="Previous"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[88vw]"
            >
              <Image
                src={images[lightbox].src}
                alt={`Oeuvre ${images[lightbox].id}`}
                width={1400}
                height={1800}
                className="max-h-[85vh] w-auto object-contain"
                sizes="88vw"
                priority
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-6 top-1/2 z-20 -translate-y-1/2 p-4 text-white/30 transition-colors hover:text-white"
              aria-label="Next"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
