"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  User,
  Mail,
  Phone,
  Calendar,
  Star,
  Home as HomeIcon,
  Sun,
  Pencil,
  Lock,
} from "./icons";

const steps = [
  { n: 1, label: "Your info" },
  { n: 2, label: "Child info" },
  { n: 3, label: "Preferences" },
];

export default function RegistrationForm() {
  const [program, setProgram] = useState<"indoor" | "outdoor">("indoor");
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink">
          <Check className="h-8 w-8" strokeWidth={3} />
        </span>
        <h3 className="display mt-5 text-3xl text-white">Spot reserved!</h3>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          Thanks! We&apos;ll reach out within 24 hours to place your child in the
          right group. No payment required.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-xs font-bold uppercase tracking-wide text-brand hover:underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Stepper */}
      <ol className="mb-7 flex items-center">
        {steps.map((s, i) => {
          const done = step >= s.n;
          return (
            <li key={s.n} className="flex flex-1 items-center last:flex-none">
              <span className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    done
                      ? "bg-brand text-ink"
                      : "border border-white/30 text-white/55"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`hidden text-[11px] font-bold uppercase tracking-[0.08em] sm:inline ${
                    done ? "text-white" : "text-white/45"
                  }`}
                >
                  {s.label}
                </span>
              </span>
              {i < steps.length - 1 && (
                <span
                  className={`mx-2 h-px flex-1 ${
                    step > s.n ? "bg-brand" : "bg-white/15"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field icon={<User className="h-4 w-4" />} onFocus={() => setStep(1)}>
          <input className={inputCls} placeholder="Parent Name" required />
        </Field>
        <Field icon={<Mail className="h-4 w-4" />} onFocus={() => setStep(1)}>
          <input
            className={inputCls}
            type="email"
            placeholder="Email Address"
            required
          />
        </Field>
        <Field icon={<Phone className="h-4 w-4" />} onFocus={() => setStep(1)}>
          <input className={inputCls} type="tel" placeholder="Phone Number" />
        </Field>
        <Field icon={<User className="h-4 w-4" />} onFocus={() => setStep(1)}>
          <input className={inputCls} placeholder="Child's Name" />
        </Field>

        <Field
          icon={<Calendar className="h-4 w-4" />}
          chevron
          onFocus={() => setStep(2)}
        >
          <select className={selectCls} defaultValue="" required>
            <option value="" disabled className="text-navy">
              Child&apos;s Age
            </option>
            {Array.from({ length: 15 }, (_, i) => i + 4).map((age) => (
              <option key={age} value={age} className="text-navy">
                {age} years
              </option>
            ))}
          </select>
        </Field>
        <Field
          icon={<Star className="h-4 w-4" />}
          chevron
          onFocus={() => setStep(2)}
        >
          <select className={selectCls} defaultValue="" required>
            <option value="" disabled className="text-navy">
              Experience Level
            </option>
            {["Brand new", "Some experience", "Plays regularly", "Competitive"].map(
              (lvl) => (
                <option key={lvl} value={lvl} className="text-navy">
                  {lvl}
                </option>
              )
            )}
          </select>
        </Field>
      </div>

      {/* Preferred program */}
      <fieldset className="mt-5" onFocus={() => setStep(3)}>
        <legend className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">
          Preferred Program
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <ProgramCard
            checked={program === "indoor"}
            onChange={() => setProgram("indoor")}
            icon={<HomeIcon className="h-6 w-6" />}
            title="Indoor Tennis"
            sub="Ages 4–11"
          />
          <ProgramCard
            checked={program === "outdoor"}
            onChange={() => setProgram("outdoor")}
            icon={<Sun className="h-6 w-6" />}
            title="Outdoor Tennis"
            sub="Ages 11+"
          />
        </div>
      </fieldset>

      <div className="mt-3" onFocus={() => setStep(3)}>
        <Field icon={<Pencil className="h-4 w-4" />} align="top">
          <textarea
            className={`${inputCls} min-h-[84px] resize-none pt-3`}
            placeholder="Anything else you'd like us to know? (optional)"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-extrabold uppercase tracking-[0.06em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
      >
        Reserve a Spot
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white/55">
        <Lock className="h-3.5 w-3.5" />
        We&apos;ll contact you within 24 hours. No payment required.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/12 bg-white/[0.06] py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-brand focus:bg-white/[0.09]";

const selectCls =
  "w-full appearance-none rounded-xl border border-white/12 bg-white/[0.06] py-3 pl-10 pr-10 text-sm text-white outline-none transition focus:border-brand focus:bg-white/[0.09]";

function Field({
  icon,
  children,
  chevron = false,
  align = "center",
  onFocus,
}: {
  icon: ReactNode;
  children: ReactNode;
  chevron?: boolean;
  align?: "center" | "top";
  onFocus?: () => void;
}) {
  return (
    <div className="relative" onFocus={onFocus}>
      <span
        className={`pointer-events-none absolute left-3.5 text-white/45 ${
          align === "top" ? "top-3.5" : "top-1/2 -translate-y-1/2"
        }`}
      >
        {icon}
      </span>
      {children}
      {chevron && (
        <svg
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </div>
  );
}

function ProgramCard({
  checked,
  onChange,
  icon,
  title,
  sub,
}: {
  checked: boolean;
  onChange: () => void;
  icon: ReactNode;
  title: string;
  sub: string;
}) {
  return (
    <label
      className={`relative flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
        checked
          ? "border-brand bg-brand text-ink"
          : "border-white/15 bg-white/[0.04] text-white hover:border-white/35"
      }`}
    >
      <input
        type="radio"
        name="program"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className={checked ? "text-ink" : "text-brand"}>{icon}</span>
      <span className="leading-tight">
        <span className="block text-sm font-bold uppercase tracking-wide">
          {title}
        </span>
        <span className={`block text-xs ${checked ? "text-ink/70" : "text-white/55"}`}>
          {sub}
        </span>
      </span>
      <span
        className={`ml-auto flex h-5 w-5 items-center justify-center rounded-full ${
          checked ? "bg-ink text-brand" : "border-2 border-white/35"
        }`}
      >
        {checked && <Check className="h-3 w-3" strokeWidth={4} />}
      </span>
    </label>
  );
}
