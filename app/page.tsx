import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import RegistrationForm from "@/components/RegistrationForm";
import { Button, IconBadge, Photo, Eyebrow } from "@/components/ui";
import {
  Rocket,
  Trophy,
  Home as HomeIcon,
  Sun,
  Check,
  Star,
  ArrowRight,
} from "@/components/icons";

const whyCards = [
  {
    icon: <Rocket className="h-7 w-7" />,
    tone: "emerald" as const,
    title: "Faster Progress",
    body: "Small groups mean more reps, more touches, more improvement every session.",
  },
  {
    icon: <Trophy className="h-7 w-7" />,
    tone: "gold" as const,
    title: "Built-in Confidence",
    body: "A positive, encouraging environment where every kid grows and shines.",
  },
  {
    icon: <HomeIcon className="h-7 w-7" />,
    tone: "sky" as const,
    title: "Indoor Training",
    sub: "Ages 4–12",
    body: "No weather. No delays. Consistent, fun-first training all year long.",
  },
  {
    icon: <Sun className="h-7 w-7" />,
    tone: "emerald" as const,
    title: "Outdoor Development",
    sub: "Ages 13+",
    body: "Play outside, compete, and prepare for high school tennis and beyond.",
  },
];

const pathway = [
  {
    age: "Ages 4–6",
    title: "Mini Tennis",
    body: "Movement, coordination and fun through games and activities.",
    bg: "bg-emerald",
    text: "text-white",
    emoji: "🏃",
  },
  {
    age: "Ages 7–9",
    title: "Junior Development",
    body: "Learn the basics, build technique and start rallying.",
    bg: "bg-gold",
    text: "text-navy",
    emoji: "🎾",
  },
  {
    age: "Ages 10–12",
    title: "Junior Advanced",
    body: "Improve consistency, increase match play and shot variety.",
    bg: "bg-sky",
    text: "text-white",
    emoji: "🏆",
  },
  {
    age: "Ages 13+",
    title: "Teen Performance",
    body: "Outdoor training, match strategy and competition prep.",
    bg: "bg-navy",
    text: "text-white",
    emoji: "🔥",
  },
];

const steps = [
  {
    n: "1",
    title: "Register",
    body: "Submit your contact information through the quick form below.",
  },
  {
    n: "2",
    title: "We'll Contact You",
    body: "We recommend the right group based on your child's age and experience.",
  },
  {
    n: "3",
    title: "Start Playing",
    body: "Join your first session and begin the NextGen tennis journey.",
  },
];

const testimonials = [
  {
    quote:
      "The coaches made my daughter excited to play tennis every single week. She improved quickly while having so much fun.",
    name: "Jessica M.",
  },
  {
    quote:
      "Great coaching and a welcoming environment. My son has become so much more confident — on and off the court.",
    name: "Michael T.",
  },
  {
    quote:
      "The perfect place for kids to learn, improve, and build real confidence. Highly recommend NextGen.",
    name: "Amanda R.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 photo opacity-90" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30"
          aria-hidden="true"
        />
        {/* floating tennis balls */}
        <span className="float-slow pointer-events-none absolute right-[8%] top-24 text-4xl opacity-80">
          🎾
        </span>
        <span className="float-slower pointer-events-none absolute right-[28%] bottom-16 text-2xl opacity-70">
          🎾
        </span>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <Reveal>
              <Eyebrow className="text-brand">
                Indoor &amp; Outdoor Youth Tennis
              </Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="heading-xl mt-3 text-5xl sm:text-6xl lg:text-7xl">
                NEXTGEN
                <br />
                <span className="text-brand">STARTS HERE</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-base text-white/80">
                From first swings to competitive match play, NextGen Tennis
                delivers engaging indoor training for younger athletes and
                outdoor development for players ready to take the next step.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
                {[
                  { t: "Indoor Training", s: "Ages 4–12" },
                  { t: "Outdoor Development", s: "Ages 13+" },
                  { t: "Fun First", s: "Confidence for life" },
                ].map((f) => (
                  <div key={f.t} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/60 text-brand">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[13px] font-bold uppercase tracking-wide">
                        {f.t}
                      </span>
                      <span className="block text-xs text-white/60">{f.s}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="#register">Register Your Child</Button>
                <Button href="/programs" variant="outline" withArrow={false}>
                  <span className="text-white group-hover:text-navy">
                    Explore Programs
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero photo */}
          <Reveal delay={150} className="relative">
            <Photo
              label="High-energy action — kids celebrating during drills"
              emoji="🎾"
              className="aspect-[4/5] w-full shadow-2xl"
              rounded="rounded-3xl"
            />
            <span className="absolute -left-4 top-6 rotate-[-6deg] rounded-xl bg-brand px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-navy shadow-lg">
              More than tennis. It&apos;s a mindset.
            </span>
          </Reveal>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section id="why" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>Why NextGen?</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              Why Parents Choose <span className="text-emerald">NextGen</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="lift h-full rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.25)]">
                  <IconBadge tone={c.tone}>{c.icon}</IconBadge>
                  <h3 className="mt-5 font-display text-lg font-extrabold uppercase leading-tight text-navy">
                    {c.title}
                    {c.sub && (
                      <span className="block text-sm font-bold text-emerald">
                        ({c.sub})
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-navy/65">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FLEXIBLE TRAINING LOCATIONS ============ */}
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Eyebrow className="text-brand">Flexible Training Locations</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl sm:text-4xl">
              Coaching where players grow best
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base text-white/75">
              We partner with quality indoor courts for youth development and
              outdoor courts for advanced training, so we can coach every player
              in the best environment for their age and skill level — all across
              the greater Phoenix area.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= PROGRAM PATHWAY ================= */}
      <section id="programs" className="bg-[#f6f8f5] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>The Journey</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              Program Pathway
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-navy/60">
              A clear path from a first racquet to competitive play — every
              player progresses at the right pace.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pathway.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article
                  className={`lift relative flex h-full flex-col overflow-hidden rounded-2xl ${p.bg} ${p.text} p-6 shadow-lg`}
                >
                  <span className="text-xs font-extrabold uppercase tracking-widest opacity-80">
                    {p.age}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-extrabold uppercase leading-tight">
                    {p.title}
                  </h3>
                  <div className="my-4 h-px w-10 bg-current opacity-40" />
                  <p className="text-sm opacity-90">{p.body}</p>
                  <span className="mt-6 text-4xl">{p.emoji}</span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Button href="/programs" variant="navy">
              See Full Program Details
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>Getting Started</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              How It Works
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-black/5 bg-[#f6f8f5] p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-xl font-extrabold text-navy">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold uppercase text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/65">{s.body}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand md:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#f6f8f5] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>Parent Testimonials</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              What Parents Are Saying
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="lift flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.25)]">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy/75">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/15 font-display font-extrabold text-emerald">
                      {t.name.charAt(0)}
                    </span>
                    <span className="text-sm font-bold text-navy">{t.name}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION ================= */}
      <section
        id="register"
        className="relative overflow-hidden bg-ink py-20 text-white"
      >
        <span className="float-slow pointer-events-none absolute left-[6%] top-16 text-3xl opacity-40">
          🎾
        </span>
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow className="text-brand">Ready to take the next step?</Eyebrow>
            <h2 className="heading-xl mt-2 text-4xl sm:text-5xl">
              Reserve your child&apos;s spot today
            </h2>
            <p className="mt-4 max-w-sm text-white/70">
              Spots are limited. Tell us a little about your child and we&apos;ll
              recommend the right group — indoor for ages 4–12 or outdoor for
              ages 13+.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "No payment required to register",
                "We reply within 24 hours",
                "Beginners and complete first-timers welcome",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-navy">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <RegistrationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
