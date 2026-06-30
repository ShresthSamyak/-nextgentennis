import Link from "next/link";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
} from "./icons";

export default function Footer() {
  return (
    <footer className="bg-brand text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* CTA */}
          <div>
            <p className="font-display text-3xl leading-[0.92] sm:text-4xl">
              Questions?
              <br />
              We&apos;re here to help.
            </p>
            <Link
              href="/#register"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start your registration
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Locations */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold">
              <MapPin className="h-4 w-4" /> Where we coach
            </h4>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/75">
              Year-round youth tennis academies across the greater Phoenix
              valley, with flagship locations now open and more on the way.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold">Get in touch</h4>
            <ul className="mt-3 space-y-2.5 text-sm font-semibold">
              <li>
                <a
                  href="tel:+16025550198"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <Phone className="h-4 w-4" /> (602) 555-0198
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nextgentennisaz.com"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <Mail className="h-4 w-4" /> hello@nextgentennisaz.com
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2.5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-brand transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink/15 pt-6 sm:flex-row sm:items-center">
          <Logo />
          <p className="text-xs font-semibold text-ink/65">
            © {new Date().getFullYear()} NextGen Tennis · Indoor 4–11 · Outdoor
            11+ · Greater Phoenix
          </p>
        </div>
      </div>
    </footer>
  );
}
