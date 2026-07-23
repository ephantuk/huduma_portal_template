"use client";

import { useLocale } from "@/context/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="btn-group btn-group-sm" role="group" aria-label="Language switcher">
      <button
        type="button"
        className={`btn ${locale === "en" ? "btn-primary" : "btn-outline-secondary"}`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={`btn ${locale === "sw" ? "btn-primary" : "btn-outline-secondary"}`}
        onClick={() => setLocale("sw")}
      >
        SW
      </button>
    </div>
  );
}
