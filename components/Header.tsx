"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "/profile", label: "Profil" },
  { href: "/exhibitions", label: "Expositions" },
  { href: "/gallery", label: "Galerie" },
  { href: "/shop", label: "Boutique" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const headerBg = isHome
    ? scrolled
      ? "bg-wall/95 backdrop-blur-md border-b border-ink/5"
      : "bg-transparent"
    : "bg-wall/95 backdrop-blur-md border-b border-ink/5";

  const textColor = isHome && !scrolled ? "text-white" : "text-ink";
  const textMuted = isHome && !scrolled ? "text-white/60" : "text-ink-light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        {/* Name */}
        <Link href="/" className="group">
          <span
            className={`font-display text-[22px] font-medium tracking-wide transition-colors duration-300 ${textColor}`}
          >
            Julia Lapuyade
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive ? textColor : textMuted
                } hover:${textColor}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-sienna transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`relative z-50 flex h-8 w-8 flex-col items-end justify-center gap-[5px] md:hidden ${
            mobileOpen ? "text-ink" : textColor
          }`}
          aria-label="Menu"
        >
          <motion.span
            animate={
              mobileOpen
                ? { rotate: 45, y: 6.5, width: "100%" }
                : { rotate: 0, y: 0, width: "100%" }
            }
            transition={{ duration: 0.3 }}
            className="block h-px w-full bg-current"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1, width: "60%" }}
            transition={{ duration: 0.2 }}
            className="block h-px bg-current"
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -6.5, width: "100%" }
                : { rotate: 0, y: 0, width: "75%" }
            }
            transition={{ duration: 0.3 }}
            className="block h-px bg-current"
          />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-wall"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-display text-3xl font-light transition-colors ${
                        isActive ? "text-sienna" : "text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
