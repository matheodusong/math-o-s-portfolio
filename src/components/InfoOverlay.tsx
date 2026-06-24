import OverlayPage from "./OverlayPage";
import SEOHead from "./SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

interface InfoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoOverlay = ({ isOpen, onClose }: InfoOverlayProps) => {
  const { t } = useLanguage();
  return (
    <OverlayPage isOpen={isOpen} onClose={onClose}>
      <SEOHead
        title="Info / Contact"
        description="Swiss based designer — get in touch with Matheo Dusong."
        path="/info"
      />
      <section className="max-w-4xl mx-auto pt-36 md:pt-48 px-6 md:px-10">
        <p className="spec-label mb-4">{t("profile")}</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter mb-12 text-foreground leading-tight">
          <span className="block">{t("swissDesigner")}</span>
          <span className="block mt-4">{t("studyingEcal")}</span>
        </h1>
        <div className="flex flex-col gap-4 items-start">
          <a
            href="mailto:dusong.matheo@gmail.com"
            className="spec-label inline-block border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
          >
            matheo.dusong@gmail.com ↗
          </a>
          <a
            href="https://www.instagram.com/matheodusong/"
            target="_blank"
            rel="noopener noreferrer"
            className="spec-label inline-block border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
          >
            Instagram ↗
          </a>
        </div>
      </section>
    </OverlayPage>
  );
};

export default InfoOverlay;
