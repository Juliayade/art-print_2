"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-wall">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-24">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-light text-ink">
              Julia Lapuyade
            </span>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-ink-light">
              Artiste peintre. Pastel sec, art contemporain surrealiste.
              <br />
              Entre nature, reve et couleurs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/profile", label: "Profil" },
                { href: "/gallery", label: "Galerie" },
                { href: "/exhibitions", label: "Expositions" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[13px] text-ink-light transition-colors duration-300 hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Suivre
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/julia.lapuyade.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-ink-light transition-colors duration-300 hover:text-ink"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@juju_draw_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-ink-light transition-colors duration-300 hover:text-ink"
              >
                TikTok
              </a>
              <a
                href="mailto:julia@lapuyade.fr"
                className="text-[13px] text-ink-light transition-colors duration-300 hover:text-ink"
              >
                julia@lapuyade.fr
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-16 flex items-center justify-between border-t border-ink/5 pt-6">
          <p className="text-[11px] tracking-wide text-ink-faint">
            &copy; 2026 Julia Lapuyade
          </p>
          <p className="text-[11px] tracking-wide text-ink-faint">
            Tous droits reserves
          </p>
        </div>
      </div>
    </footer>
  );
}
