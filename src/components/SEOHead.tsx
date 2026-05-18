import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  type?: string;
  image?: string;
}

const SITE_URL = "https://matheo.dusong.ch";

const DEFAULTS = {
  fr: {
    title: "Matheo Dusong | Portfolio de Design Industriel",
    description:
      "Portfolio de Matheo Dusong, designer industriel suisse — porte-mines, objets techniques, bijoux et pièces expérimentales.",
  },
  en: {
    title: "Matheo Dusong | Industrial Design Portfolio",
    description:
      "Portfolio of Matheo Dusong, Swiss industrial designer — pencils, foils, jewellery and technical objects.",
  },
} as const;

const SEOHead = ({
  title,
  description,
  path = "/",
  type = "website",
  image,
}: SEOHeadProps) => {
  const { lang } = useLanguage();
  const defaults = DEFAULTS[lang];
  const fullTitle = title ? `${title} — Matheo Dusong` : defaults.title;
  const desc = description ?? defaults.description;
  const url = `${SITE_URL}${path}`;
  const ogLocale = lang === "fr" ? "fr_CH" : "en_US";
  const altLocale = lang === "fr" ? "en_US" : "fr_CH";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={altLocale} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEOHead;
