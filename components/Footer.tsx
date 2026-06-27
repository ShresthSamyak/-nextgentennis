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
    <footer className="bg-brand text-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_1fr_1fr_auto]">
        {/* Questions / CTA */}
        <div>
          <h3 className="font-display text-xl font-extrabold uppercase leading-tight">
            Questions?
            <br />
            We&apos;re here to help!
          </h3>
          <Link
            href="/#register"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Training locations */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide">
            <MapPin className="h-4 w-4" /> Training Locations
          </h4>
          <p className="mt-3 max-w-xs text-sm font-medium text-navy/75">
            Indoor and outdoor courts partnered across the greater Phoenix area.
            We coach players where they grow best — no facility of our own
            required.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-wide">
            Get in touch
          </h4>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
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
                href="mailto:info@nextgentennisaz.com"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" /> info@nextgentennisaz.com
              </a>
            </li>
          </ul>
        </div>

        {/* Brand + socials */}
        <div className="md:text-right">
          <Logo />
          <div className="mt-4 flex gap-3 md:justify-end">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-brand transition-transform hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-navy/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-4 text-xs font-semibold text-navy/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} NextGen Tennis. Building the next
            generation of tennis players.
          </p>
          <p>Serving the greater Phoenix area · Indoor 4–12 · Outdoor 13+</p>
        </div>
      </div>
    </footer>
  );
}
