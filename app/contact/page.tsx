"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <>
      {/* Split layout — image + contact */}
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left: Full-bleed image */}
        <div className="relative hidden h-screen lg:sticky lg:top-0 lg:block">
          <Image
            src="/images/i22.jpg"
            alt="Oeuvre de Julia Lapuyade"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-ink/10" />
        </div>

        {/* Right: Contact content */}
        <div className="flex flex-col justify-center bg-wall px-6 py-32 lg:px-16 lg:py-20 xl:px-24">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-sienna"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 font-display text-[clamp(2.5rem,4vw,3.5rem)] font-light text-ink"
          >
            Contactez-moi
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 h-px bg-sienna"
          />

          <AnimatedSection delay={0.3}>
            <p className="mt-8 max-w-md text-[15px] font-light leading-[1.9] text-ink-light">
              Pour toute question, collaboration ou demande d&apos;information
              sur mes oeuvres, n&apos;hesitez pas a me contacter.
            </p>
          </AnimatedSection>

          {/* Contact links */}
          <div className="mt-16 space-y-10">
            <AnimatedSection delay={0.4}>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-faint">
                Email
              </p>
              <a
                href="mailto:julia@lapuyade.fr"
                className="mt-3 block font-display text-2xl font-light text-ink transition-colors hover:text-sienna"
              >
                julia@lapuyade.fr
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="h-px bg-ink/5" />
            </AnimatedSection>

            <AnimatedSection delay={0.55}>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink-faint">
                Reseaux sociaux
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/julia.lapuyade.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[15px] text-ink-light transition-colors hover:text-ink"
                >
                  <span>Instagram</span>
                  <span className="text-[13px] text-ink-faint">
                    @julia.lapuyade.art
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="ml-auto text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@juju_draw_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[15px] text-ink-light transition-colors hover:text-ink"
                >
                  <span>TikTok</span>
                  <span className="text-[13px] text-ink-faint">
                    @juju_draw_
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="ml-auto text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
}
