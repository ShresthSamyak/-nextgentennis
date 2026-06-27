"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "./icons";

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-brand focus:bg-white/15";

const selectCls =
  "w-full appearance-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-brand focus:bg-white/15";

export default function RegistrationForm() {
  const [program, setProgram] = useState<"indoor" | "outdoor">("indoor");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand/30 bg-white/5 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-navy">
          <Check className="h-8 w-8" strokeWidth={3} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold uppercase text-white">
          Spot reserved!
        </h3>
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
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
      <input className={inputCls} placeholder="Parent Name" required />
      <input
        className={inputCls}
        type="email"
        placeholder="Email"
        required
      />
      <input className={inputCls} type="tel" placeholder="Phone Number" />
      <input className={inputCls} placeholder="Child's Name" />

      <div className="relative">
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
        <Chevron />
      </div>

      <div className="relative">
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
        <Chevron />
      </div>

      {/* Preferred program */}
      <fieldset className="sm:col-span-2">
        <legend className="mb-2 text-xs font-bold uppercase tracking-wide text-white/60">
          Preferred Program
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          <ProgramRadio
            checked={program === "indoor"}
            onChange={() => setProgram("indoor")}
            title="Indoor"
            sub="Ages 4–12"
          />
          <ProgramRadio
            checked={program === "outdoor"}
            onChange={() => setProgram("outdoor")}
            title="Outdoor"
            sub="Ages 13+"
          />
        </div>
      </fieldset>

      <textarea
        className={`${inputCls} sm:col-span-2`}
        rows={2}
        placeholder="Message (optional)"
      />

      <button
        type="submit"
        className="group sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-navy transition-transform hover:scale-[1.02]"
      >
        Reserve a Spot
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="sm:col-span-2 text-center text-xs text-white/55">
        We&apos;ll contact you within 24 hours to place your child in the right
        group. No payment required.
      </p>
    </form>
  );
}

function Chevron() {
  return (
    <svg
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ProgramRadio({
  checked,
  onChange,
  title,
  sub,
}: {
  checked: boolean;
  onChange: () => void;
  title: string;
  sub: string;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
        checked
          ? "border-brand bg-brand/15"
          : "border-white/15 bg-white/5 hover:border-white/30"
      }`}
    >
      <input
        type="radio"
        name="program"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
          checked ? "border-brand" : "border-white/40"
        }`}
      >
        {checked && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
      </span>
      <span>
        <span className="block text-sm font-bold text-white">{title}</span>
        <span className="block text-xs text-white/60">{sub}</span>
      </span>
    </label>
  );
}
