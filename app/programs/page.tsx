import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { Button, IconBadge, Photo, Eyebrow } from "@/components/ui";
import {
  Runner,
  Group,
  Star,
  Whistle,
  Rocket,
  Trophy,
  Check,
  ArrowRight,
  Target,
  Shield,
  Mountain,
  Diamond,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Programs — NextGen Tennis | Indoor 4–12 · Outdoor 13+",
  description:
    "Age-appropriate tennis programs: indoor training for ages 4–12 and outdoor development for ages 13+. Coaching philosophy, session structure, and FAQs.",
};

const philosophy = [
  {
    icon: <Runner className="h-7 w-7" />,
    tone: "emerald" as const,
    title: "Player First",
    body: "We develop athletes and people — on and off the court.",
  },
  {
    icon: <Group className="h-7 w-7" />,
    tone: "gold" as const,
    title: "Development Driven",
    body: "A clear pathway with the right training at every stage.",
  },
  {
    icon: <Star className="h-7 w-7" />,
    tone: "sky" as const,
    title: "Compete. Grow. Succeed.",
    body: "We prepare players for school, tournaments and life.",
  },
];

const session = [
  {
    icon: <Whistle className="h-6 w-6" />,
    tone: "emerald" as const,
    title: "Warm-up & Games",
    time: "10 min",
    body: "Get active, have fun and build focus.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    tone: "gold" as const,
    title: "Skill Development",
    time: "20 min",
    body: "Technique, footwork and smart practice in small groups.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    tone: "sky" as const,
    title: "Live Ball & Drills",
    time: "20 min",
    body: "Apply skills, build confidence and improve consistency.",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    tone: "emerald" as const,
    title: "Match Play",
    time: "10 min",
    body: "Competitive play to bring it all together.",
  },
];

const indoor = {
  title: "Indoor Training",
  age: "Ages 4–12",
  label: "Kids hitting foam balls on indoor courts",
  points: [
    "Hand-eye coordination & racquet control",
    "Footwork and basic strokes",
    "Rallying and fun, game-based learning",
    "Year-round, weather-proof, small groups",
  ],
};

const outdoor = {
  title: "Outdoor Development",
  age: "Ages 13+",
  label: "Teenagers rallying on outdoor courts",
  points: [
    "Advanced technique & tactical decisions",
    "Match strategy, point construction & serve",
    "Fitness, mental confidence & match play",
    "Tournament and high school / college prep",
  ],
};

const values = [
  { icon: <Target className="h-7 w-7" />, label: "Discipline" },
  { icon: <Shield className="h-7 w-7" />, label: "Confidence" },
  { icon: <Mountain className="h-7 w-7" />, label: "Resilience" },
  { icon: <Group className="h-7 w-7" />, label: "Teamwork" },
  { icon: <Diamond className="h-7 w-7" />, label: "Grit" },
];

const different = [
  {
    title: "Small Group Coaching",
    body: "Every player receives meaningful, personal attention each session.",
  },
  {
    title: "Positive Environment",
    body: "Players are encouraged to compete, learn and genuinely enjoy the game.",
  },
  {
    title: "Development Focused",
    body: "Our goal isn't just better tennis — it's confidence and lifelong athletic habits.",
  },
];

const faqs = [
  {
    q: "Do you provide equipment?",
    a: "Yes! Beginners can borrow racquets during their first sessions, so there's nothing to buy before you know your child loves it.",
  },
  {
    q: "Does my child need experience?",
    a: "Not at all. We welcome complete beginners and first-timers, and we'll place your child in the right group for their age and comfort level.",
  },
  {
    q: "Where are lessons held?",
    a: "Indoor sessions for ages 4–12 take place at partner indoor courts, and outdoor development for ages 13+ is held at local outdoor courts across the greater Phoenix area.",
  },
  {
    q: "How do I register?",
    a: "Simply complete the registration form and we'll reach out within 24 hours with available classes. No payment is required to register.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 photo opacity-80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <Reveal>
              <Eyebrow className="text-brand">Tennis Programs</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="heading-xl mt-3 text-4xl sm:text-5xl lg:text-[3.4rem]">
                Indoor for ages 4–12.
                <br />
                Outdoor for ages 13+.
                <br />
                <span className="text-brand">Excellence</span> for all.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-base text-white/80">
                Age-appropriate coaching. Pathway-driven development. A love for
                the game that lasts — whether your child is picking up a racquet
                for the first time or preparing for competitive play.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/#register">Register Your Child</Button>
                <Button href="#options" variant="outline" withArrow={false}>
                  <span className="text-white group-hover:text-navy">
                    View Training Options
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Photo
              label="Players ages 4–18 with racquets, ready to train"
              emoji="🎾"
              className="aspect-[4/3] w-full"
              rounded="rounded-3xl"
            />
          </Reveal>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>How we coach</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              Our Coaching Philosophy
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="text-center">
                <div className="flex flex-col items-center">
                  <IconBadge tone={p.tone}>{p.icon}</IconBadge>
                  <h3 className="mt-5 font-display text-lg font-extrabold uppercase text-navy">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-navy/65">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SESSION STRUCTURE ================= */}
      <section className="bg-[#f6f8f5] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>Every session</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              What to Expect in Every Session
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-12 grid items-start gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
              {session.map((s, i) => (
                <div key={s.title} className="contents">
                  <div className="flex flex-col items-center text-center">
                    <IconBadge tone={s.tone}>{s.icon}</IconBadge>
                    <h3 className="mt-4 font-display text-sm font-extrabold uppercase leading-tight text-navy">
                      {s.title}
                    </h3>
                    <span className="mt-1 text-xs font-bold text-emerald">
                      {s.time}
                    </span>
                    <p className="mt-2 max-w-[12rem] text-xs text-navy/60">
                      {s.body}
                    </p>
                  </div>
                  {i < session.length - 1 && (
                    <ArrowRight className="mx-auto mt-5 hidden h-6 w-6 text-brand-dark md:block" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TRAINING OPTIONS ================= */}
      <section id="options" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>Choose your path</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              Training Options
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[indoor, outdoor].map((opt, i) => (
              <Reveal key={opt.title} delay={i * 100}>
                <article className="lift overflow-hidden rounded-3xl bg-navy text-white shadow-xl">
                  <div className="relative">
                    <Photo
                      label={opt.label}
                      emoji="🎾"
                      className="aspect-[16/9] w-full"
                      rounded="rounded-none"
                    />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-brand px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-navy">
                        {opt.age}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-extrabold uppercase">
                      {opt.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {opt.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-navy">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          <span className="text-white/85">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      href="/#register"
                      className="mt-6"
                      variant="lime"
                    >
                      Register for {opt.title.split(" ")[0]}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WE BUILD NEXTGEN ================= */}
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center md:text-left">
            <h2 className="heading-xl text-3xl sm:text-4xl">
              We don&apos;t just teach tennis.{" "}
              <span className="text-brand">We build NextGen.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal
                key={v.label}
                delay={i * 70}
                className="flex flex-col items-center text-center"
              >
                <span className="text-gold">{v.icon}</span>
                <span className="mt-3 font-display text-sm font-extrabold uppercase tracking-wide">
                  {v.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES DIFFERENT ================= */}
      <section className="bg-[#f6f8f5] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              What Makes NextGen Different?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {different.map((d, i) => (
              <Reveal key={d.title} delay={i * 90}>
                <article className="lift h-full rounded-2xl border-l-4 border-brand bg-white p-6 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.25)]">
                  <h3 className="font-display text-lg font-extrabold uppercase text-navy">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy/65">{d.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center">
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="heading-xl mt-2 text-3xl text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-emerald py-20 text-white">
        <span className="float-slow pointer-events-none absolute right-[10%] top-10 text-5xl opacity-30">
          🎾
        </span>
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="heading-xl text-4xl sm:text-5xl">
              Ready to join NextGen Tennis?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Give your child the opportunity to build confidence, make friends,
              and fall in love with the game.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/#register" variant="gold">
                Register Today
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
