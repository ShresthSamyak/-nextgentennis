import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import Faq from "@/components/Faq";
import { PHOTOS, type Shot as ShotData } from "@/components/photos";
import { Button, IconBadge } from "@/components/ui";
import {
  Runner,
  Group,
  Star,
  Whistle,
  Rocket,
  Trophy,
  Check,
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
    icon: <Runner className="h-6 w-6" />,
    tone: "emerald" as const,
    title: "Player first",
    body: "We develop athletes and people — the habits matter as much as the forehand, on the court and off it.",
  },
  {
    icon: <Group className="h-6 w-6" />,
    tone: "gold" as const,
    title: "Development driven",
    body: "A clear pathway with the right training at every stage, so progress is something families can actually see.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    tone: "sky" as const,
    title: "Compete, grow, succeed",
    body: "We prepare players for school teams, tournaments, and a lifelong relationship with the game.",
  },
];

const session = [
  {
    icon: <Whistle className="h-5 w-5" />,
    title: "Warm-up & games",
    time: "10 min",
    body: "Get active, have fun, and build focus.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Skill development",
    time: "20 min",
    body: "Technique and footwork in small groups.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Live ball & drills",
    time: "20 min",
    body: "Apply skills and build consistency.",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Match play",
    time: "10 min",
    body: "Competitive play to bring it together.",
  },
];

type Track = {
  age: string;
  title: string;
  shot: ShotData;
  tag: string;
  accent: string;
  points: string[];
};

const tracks: Track[] = [
  {
    age: "Ages 4–12",
    title: "Indoor Training",
    shot: PHOTOS.indoorCoaching,
    tag: "bg-brand text-ink",
    accent: "text-emerald",
    points: [
      "Hand-eye coordination & racquet control",
      "Footwork and the first real strokes",
      "Rallying through fun, game-based learning",
      "Year-round on weatherproof partner courts",
    ],
  },
  {
    age: "Ages 13+",
    title: "Outdoor Development",
    shot: PHOTOS.overhead,
    tag: "bg-gold text-ink",
    accent: "text-gold",
    points: [
      "Advanced technique & tactical decisions",
      "Match strategy, point construction & serve",
      "Fitness, mental game & competitive play",
      "Tournament and high-school / college prep",
    ],
  },
];

const values = [
  { icon: <Target className="h-7 w-7" />, label: "Discipline" },
  { icon: <Shield className="h-7 w-7" />, label: "Confidence" },
  { icon: <Mountain className="h-7 w-7" />, label: "Resilience" },
  { icon: <Group className="h-7 w-7" />, label: "Teamwork" },
  { icon: <Diamond className="h-7 w-7" />, label: "Grit" },
];

const faqs = [
  {
    q: "Do you provide equipment?",
    a: "Yes — beginners can borrow racquets during their first sessions, so there's nothing to buy before you know your child loves it.",
  },
  {
    q: "Does my child need experience?",
    a: "Not at all. We welcome complete beginners and first-timers, and we place every child in the right group for their age and comfort level.",
  },
  {
    q: "Where are lessons held?",
    a: "Indoor sessions for ages 4–12 run at partner indoor courts; outdoor development for ages 13+ is held at local outdoor courts across the greater Phoenix valley. NextGen is a coaching brand, not a single facility.",
  },
  {
    q: "How do I register?",
    a: "Complete the registration form and we'll reach out within 24 hours with available classes. No payment is required to register.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Header />

      {/* ===================== HERO ===================== */}
      <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-navy">
        <div className="clip-in absolute inset-0 -z-10">
          <Shot shot={PHOTOS.girlRacquet} priority sizes="100vw" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/20" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 to-transparent" aria-hidden />

        <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <div className="max-w-3xl text-white">
            <p className="rise text-sm font-semibold text-white/80">Programs</p>
            <h1 className="display mt-3 text-[clamp(2.5rem,7vw,4.75rem)]">
              <span className="rise block" style={{ animationDelay: "60ms" }}>
                Indoor for 4–12.
              </span>
              <span className="rise block" style={{ animationDelay: "150ms" }}>
                Outdoor for 13+.
              </span>
              <span className="rise block text-brand" style={{ animationDelay: "240ms" }}>
                Excellence for all.
              </span>
            </h1>
            <p className="rise mt-6 max-w-lg text-lg leading-relaxed text-white/85" style={{ animationDelay: "340ms" }}>
              Age-appropriate coaching and pathway-driven development — whether
              your child is picking up a racquet for the first time or preparing
              for competitive play.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "440ms" }}>
              <Button href="/#register">Register your child</Button>
              <Button href="#tracks" variant="ghost" withArrow={false}>
                See the two tracks
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PHILOSOPHY ===================== */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-navy">
            How we coach
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Three commitments that shape every group, every age, every session.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {philosophy.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="border-t border-navy/15 pt-6">
              <IconBadge tone={p.tone}>{p.icon}</IconBadge>
              <h3 className="mt-5 text-xl font-bold text-navy">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/70">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== SESSION STRUCTURE ===================== */}
      <section className="bg-bone py-20 sm:py-28">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-navy">
              Inside every session
            </h2>
            <p className="mt-4 text-lg text-navy/70">
              A 60-minute rhythm that keeps players moving, learning, and
              competing — never standing in line.
            </p>
          </Reveal>

          <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-6 hidden h-px bg-navy/15 lg:block" aria-hidden />
            {session.map((s, i) => (
              <Reveal key={s.title} as="li" delay={i * 90} className="relative">
                <div className="flex items-center gap-3">
                  <IconBadge tone="emerald" className="bg-bone">
                    {s.icon}
                  </IconBadge>
                  <span className="font-display text-2xl text-navy/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                <div className="text-sm font-bold text-emerald">{s.time}</div>
                <p className="mt-1 text-sm leading-relaxed text-navy/65">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== TRACKS (alternating rows) ===================== */}
      <section id="tracks" className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-navy">
            Two tracks, one pathway
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Pick the right court for your player&apos;s age — they share the same
            coaching philosophy.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 sm:gap-24">
          {tracks.map((t, i) => (
            <Reveal
              key={t.title}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Shot shot={t.shot} zoom sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full" />
              </div>
              <div>
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${t.tag}`}>
                  {t.age}
                </span>
                <h3 className="display mt-4 text-4xl text-navy sm:text-5xl">
                  {t.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-navy/80">
                      <Check className={`mt-1 h-4 w-4 shrink-0 ${t.accent}`} strokeWidth={3} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/#register" variant="navy" className="mt-8">
                  Register for {t.title.split(" ")[0]}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== WE BUILD NEXTGEN ===================== */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal>
            <h2 className="display text-[clamp(1.9rem,4.5vw,3.25rem)]">
              We don&apos;t just teach tennis.{" "}
              <span className="text-brand">We build NextGen.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={i * 70} className="flex flex-col items-start gap-3">
                <span className="text-gold">{v.icon}</span>
                <span className="font-display text-xl tracking-wide">{v.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-navy">
              Good to know
            </h2>
            <p className="mt-4 text-lg text-navy/70">
              The questions we hear most from parents.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative overflow-hidden bg-emerald py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-x-0 top-12 h-px bg-white/10" />
          <div className="absolute inset-x-0 bottom-12 h-px bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,5.5vw,4rem)]">
              Ready to join NextGen?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              Give your child the chance to build confidence, make friends, and
              fall for the game.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/#register" variant="gold">
                Register today
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
