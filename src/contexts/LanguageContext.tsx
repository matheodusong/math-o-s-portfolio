import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, { fr: string; en: string }>;

const dict: Dict = {
  inquiries: { fr: "Demandes", en: "Inquiries" },
  info: { fr: "Info", en: "Info" },
  profile: { fr: "Profil", en: "Profile" },
  swissDesigner: { fr: "— Designer basé en Suisse", en: "— Swiss based designer" },
  studyingEcal: { fr: "— Actuellement étudiant à l'ECAL", en: "— Currently studying at ECAL" },
  contact: { fr: "Contact", en: "Contact" },
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr";
    return (localStorage.getItem("lang") as Lang) || "fr";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: keyof typeof dict) => dict[key][lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};