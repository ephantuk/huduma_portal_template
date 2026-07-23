import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary } from "@/common/constants/dictionary";

const LocaleContext = createContext(null);

const STORAGE_KEY = "hvc-citizen-locale";

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) setLocale(stored);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (next) => {
        setLocale(next);
        window.localStorage.setItem(STORAGE_KEY, next);
      },
      t: (key) => dictionary[locale]?.[key] ?? dictionary.en[key] ?? key,
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
