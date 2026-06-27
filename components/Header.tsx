"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRight } from "./icons";

const nav = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "For Parents", href: "/#why" },
  { label: "Pathway", href: "/#pathway" },
  { label: "Contact", href: "/#register" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/programs" && pathname === "/programs";

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled
          ? "border-b border-black/5 shadow-[0_6px_24px_-18px_rgba(14,22,38,0.5)]"
          : "border-b border-black/[0.04]"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="NextGen Tennis home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[13px] font-semibold transition-colors hover:text-emerald ${
                isActive(item.href) ? "text-emerald" : "text-navy/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#register"
            className="group hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald sm:inline-flex"
          >
            Register
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-black/10 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-navy transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-navy transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-navy transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white lg:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3.5 text-sm font-semibold text-navy/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#register"
              onClick={() => setOpen(false)}
              className="my-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white"
            >
              Register <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
