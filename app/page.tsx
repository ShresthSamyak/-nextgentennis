import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import RegistrationForm from "@/components/RegistrationForm";
import TennisRacket from "@/components/TennisRacket";
import { PHOTOS } from "@/components/photos";
import { Button, IconBadge } from "@/components/ui";
import {
  Rocket,
  Trophy,
  Home as HomeIcon,
  Sun,
  Check,
  Star,
  ArrowRight,
  Runner,
  Whistle,
  Target,
  Calendar,
  Chat,
  Group,
} from "@/components/icons";

const why = [
  {
    icon: <Rocket className="h-6 w-6" />,
    tone: "emerald" as const,
    title: "Faster progress",
    body: "Small groups mean more reps and quicker improvement. Every player stays busy — nobody's stuck waiting in line.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    tone: "gold" as const,
    title: "Built-in confidence",
    body: "An encouraging environment where kids compete, grow, and actually look forward to coming back each week.",
  },
  {
    icon: <HomeIcon className="h-6 w-6" />,
    tone: "sky" as const,
    title: "Indoor, ages 4–11",
    body: "Weatherproof partner courts keep younger players on the red & orange ball pathway year-round — no heat days, no rainouts.",
  },
  {
    icon: <Sun className="h-6 w-6" />,
    tone: "emerald" as const,
    title: "Outdoor, ages 11+",
    body: "Older players move outside to the full court: match play, fitness, and real prep for high-school tennis and beyond.",
  },
];

const pathway = [
  {
    num: "01",
    age: "Ages 4–8 · Indoor",
    title: "Red Ball",
    card: "bg-emerald text-white",
    pill: "bg-white/15 text-white",
    mark: "text-white",
    icon: Runner,
    points: ["Foam & red balls, mini courts", "Movement & coordination", "Fun-first foundations"],
  },
  {
    num: "02",
    age: "Ages 7–11 · Indoor",
    title: "Orange Ball",
    card: "bg-gold text-ink",
    pill: "bg-ink/10 text-ink",
    mark: "text-ink",
    icon: Whistle,
    points: ["Lower-bounce orange balls", "Three-quarter court rallies", "Technique & first serves"],
  },
  {
    num: "03",
    age: "Ages 11+ · Outdoor",
    title: "Green Ball",
    card: "bg-sky text-white",
    pill: "bg-white/15 text-white",
    mark: "text-white",
    icon: Target,
    points: ["Full court, green-dot balls", "Consistency & live match play", "Point construction"],
  },
  {
    num: "04",
    age: "Ages 11+ · Outdoor",
    title: "Yellow Ball",
    card: "bg-navy text-white",
    pill: "bg-brand text-ink",
    mark: "text-brand",
    icon: Trophy,
    points: ["Standard yellow balls", "Strategy, serve & fitness", "Tournament & HS prep"],
  },
];

const steps = [
  {
    n: "01",
    title: "Register",
    body: "Send your details with the form below — it takes about a minute.",
  },
  {
    n: "02",
    title: "We match the group",
    body: "We recommend indoor (4–11) or outdoor (11+) by age and experience, within 24 hours.",
  },
  {
    n: "03",
    title: "Start playing",
    body: "Show up to your first session and start building real tennis.",
  },
];

const marquee = [
  "Indoor 4–11",
  "Outdoor 11+",
  "Small groups",
  "Fun first",
  "Greater Phoenix",
  "Confidence for life",
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ===================== HERO ===================== */}
      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-navy">
        <div className="clip-in absolute inset-0 -z-10">
          <Image
            src="/hero.png"
            alt="A young NextGen Tennis player in a lime team shirt pumps his fist and grins after a great point on an indoor court"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "68% 30%" }}
          />
        </div>
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/10"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-transparent to-navy/20"
          aria-hidden
        />

        <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24">
          <div className="max-w-2xl text-white">
            <p className="rise flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white/80">
              <span className="text-brand">Indoor 4–11</span>
              <span className="text-white/30">/</span>
              <span className="text-brand">Outdoor 11+</span>
              <span className="text-white/30">/</span>
              <span>Greater Phoenix</span>
            </p>

            <h1 className="display mt-4 text-[clamp(3.25rem,11vw,6rem)]">
              <span className="rise block" style={{ animationDelay: "80ms" }}>
                NextGen
              </span>
              <span
                className="rise block text-brand"
                style={{ animationDelay: "180ms" }}
              >
                starts here
              </span>
            </h1>

            <p
              className="rise mt-6 max-w-md text-lg leading-relaxed text-white/85"
              style={{ animationDelay: "300ms" }}
            >
              From first swings to competitive match play — engaging indoor
              training for younger athletes and outdoor development for players
              ready to take the next step.
            </p>

            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "400ms" }}
            >
              <Button href="#register">Register your child</Button>
              <Button href="/programs" variant="ghost" withArrow={false}>
                Explore programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <div className="overflow-hidden border-y border-ink/10 bg-brand py-3.5 text-ink">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {marquee.map((m) => (
                <span key={m} className="flex items-center">
                  <span className="px-6 font-display text-lg tracking-wide">
                    {m}
                  </span>
                  <span className="text-ink/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===================== MANIFESTO ===================== */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <h2 className="display text-[clamp(2.25rem,5vw,3.75rem)] text-navy">
              More than tennis.
              <br />
              <span className="text-emerald">It&apos;s a mindset.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5 md:pt-3" delay={120}>
            <p className="text-lg leading-relaxed text-navy/75">
              NextGen Tennis is building the future of youth tennis in the US —
              creating the nation&apos;s leading network of year-round youth
              tennis academies and making high-quality coaching more accessible
              to every family. Flagship locations in the greater Phoenix area.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-navy/75">
              We partner with quality indoor and outdoor courts across the
              valley — from a four-year-old&apos;s first red ball to a
              teenager&apos;s first tournament.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <div className="font-display text-3xl text-navy">4–18</div>
                <div className="text-sm font-semibold text-navy/55">
                  Ages we coach
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-navy">Small</div>
                <div className="text-sm font-semibold text-navy/55">
                  Group ratios
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== WHY (For Parents) ===================== */}
      <section id="why" className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-navy">
              Why parents choose NextGen
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {why.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className="border-t border-navy/15 pt-6"
              >
                <IconBadge tone={c.tone}>{c.icon}</IconBadge>
                <h3 className="mt-5 text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-navy/70">
                  {c.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INDOOR / OUTDOOR SPLIT ===================== */}
      <section id="programs" className="bg-ink">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
          {/* Indoor */}
          <Reveal className="group relative min-h-[460px] overflow-hidden md:min-h-[600px]">
            <Shot
              shot={PHOTOS.indoorCoaching}
              zoom
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink">
                Ages 4–11
              </span>
              <h3 className="display mt-4 text-4xl sm:text-5xl">
                Indoor Training
              </h3>
              <ul className="mt-5 space-y-2.5 text-[15px] text-white/85">
                {[
                  "Year-round, weatherproof courts",
                  "Red & orange ball progression",
                  "Small, game-based groups",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-brand"
                      strokeWidth={3}
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <Button href="/programs" variant="lime" className="mt-7">
                Indoor details
              </Button>
            </div>
          </Reveal>

          {/* Outdoor */}
          <Reveal
            delay={120}
            className="group relative min-h-[460px] overflow-hidden md:min-h-[600px]"
          >
            <Shot
              shot={PHOTOS.overhead}
              zoom
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald via-emerald/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink">
                Ages 11+
              </span>
              <h3 className="display mt-4 text-4xl sm:text-5xl">
                Outdoor Development
              </h3>
              <ul className="mt-5 space-y-2.5 text-[15px] text-white/90">
                {[
                  "Green & yellow ball, full court",
                  "Match play, serve & the mental game",
                  "High-school & tournament prep",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-gold"
                      strokeWidth={3}
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <Button href="/programs" variant="gold" className="mt-7">
                Outdoor details
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== PATHWAY ===================== */}
      <section id="pathway" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-navy">
              The program pathway
            </h2>
            <p className="mt-4 text-lg text-navy/70">
              Four stages, one journey — every player climbs at the right pace,
              from a first racquet to competitive play.
            </p>
          </div>
          <Button href="#register" variant="navy" className="shrink-0">
            Find your stage
          </Button>
        </Reveal>

        <ol className="mt-14 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathway.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} as="li" delay={i * 90} className="lift">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 ${p.card}`}
                >
                  <Icon
                    className={`pointer-events-none absolute -bottom-5 -right-3 h-32 w-32 opacity-[0.12] ${p.mark}`}
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="font-display text-5xl leading-none opacity-80">
                      {p.num}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${p.pill}`}
                    >
                      {p.age}
                    </span>
                  </div>
                  <h3 className="display relative mt-6 text-2xl">{p.title}</h3>
                  <ul className="relative mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${p.mark}`}
                          strokeWidth={3}
                        />
                        <span className="opacity-90">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)]">
              How it works
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <div className="font-display text-5xl text-brand">{s.n}</div>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{s.body}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-2 top-3 hidden h-6 w-6 text-white/25 md:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              <Stars />
              <blockquote className="mt-5 font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.08] text-navy">
                “The coaches made my daughter excited to play every single week.
                She improved fast — and had a blast doing it.”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold text-navy">
                Jessica M.{" "}
                <span className="font-semibold text-navy/55">· parent, age 8</span>
              </figcaption>
            </Reveal>

            <div className="flex flex-col justify-center gap-8">
              {[
                {
                  quote:
                    "Welcoming, professional, and genuinely good with teens. My son is so much more confident.",
                  name: "Michael T.",
                  meta: "parent, age 14",
                },
                {
                  quote:
                    "The perfect place for kids to learn, improve, and build real confidence.",
                  name: "Amanda R.",
                  meta: "parent, age 6",
                },
              ].map((t, i) => (
                <Reveal key={t.name} delay={i * 120}>
                  <Stars small />
                  <p className="mt-3 leading-relaxed text-navy/80">
                    “{t.quote}”
                  </p>
                  <p className="mt-3 text-sm font-bold text-navy">
                    {t.name}{" "}
                    <span className="font-semibold text-navy/55">· {t.meta}</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== REGISTER ===================== */}
      <section
        id="register"
        className="relative overflow-hidden bg-navy py-20 text-white sm:py-28"
      >
        {/* giant faint wordmark watermark */}
        <span
          className="pointer-events-none absolute left-1/2 top-6 -z-0 -translate-x-1/2 select-none font-display text-[26vw] leading-none text-white/[0.03] sm:left-8 sm:translate-x-0"
          aria-hidden
        >
          NEXT
        </span>
        <TennisRacket className="pointer-events-none absolute -bottom-20 -left-16 hidden h-[380px] rotate-[-22deg] text-brand/90 lg:block" />

        {/* dashed arrow pointing to the form (desktop) */}
        <svg
          className="absolute left-[42%] top-[60%] hidden h-16 w-28 text-brand lg:block"
          viewBox="0 0 120 60"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 40 C 40 10, 70 50, 104 26"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          <path
            d="M94 20 L108 24 L98 35"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="inline-block -rotate-2 rounded-lg bg-brand px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] text-ink">
              Let&apos;s get started
            </span>
            <h2 className="display mt-4 text-[clamp(2.5rem,6vw,4.25rem)]">
              Reserve your
              <br />
              <span className="text-brand">child&apos;s</span> spot
            </h2>
            <p className="mt-4 max-w-sm text-lg text-white/75">
              Spots are limited. Tell us a little about your child and
              we&apos;ll recommend the right program — indoor for ages 4–11 or
              outdoor for 11+.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  icon: <Calendar className="h-5 w-5" />,
                  title: "No payment required",
                  sub: "Just register your interest.",
                },
                {
                  icon: <Chat className="h-5 w-5" />,
                  title: "We reply within 24 hours",
                  sub: "We'll help you find the right group.",
                },
                {
                  icon: <Group className="h-5 w-5" />,
                  title: "Beginner friendly",
                  sub: "All skill levels welcome.",
                },
              ].map((b) => (
                <li key={b.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                    {b.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wide">
                      {b.title}
                    </span>
                    <span className="block text-sm text-white/60">{b.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-ink/60 p-6 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] sm:p-8">
              <RegistrationForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Stars({ small = false }: { small?: boolean }) {
  const size = small ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${size} fill-gold`} />
      ))}
    </div>
  );
}
