"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { ArrowRight } from "./icons";

const nav = [
  { label: "HOME", href: "/" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "FOR PARENTS", href: "/#why" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#register" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href.startsWith("/programs") && pathname === "/programs";

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label="NextGen Tennis home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[13px] font-bold tracking-wide transition-colors hover:text-emerald ${
                isActive(item.href)
                  ? "text-emerald underline decoration-brand decoration-2 underline-offset-8"
                  : "text-navy/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#register"
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] font-extrabold tracking-wide text-navy shadow-sm transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            REGISTER NOW
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-black/10 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-navy transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-navy transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-navy transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-3 text-sm font-bold tracking-wide text-navy/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#register"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-extrabold text-navy"
            >
              REGISTER NOW <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
