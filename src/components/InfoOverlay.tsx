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
        </h1>
        <div className="mb-12">
          <p className="spec-label mb-4">{t("formation")}</p>
          <ul className="text-xl md:text-2xl lg:text-3xl font-light tracking-tighter text-foreground leading-tight space-y-2">
            <li>— IBCP, Lisbon</li>
            <li>— Académie de meuron, Neuchâtel</li>
            <li>— ECAL bachelor design industriel, Lausanne</li>
          </ul>
        </div>
        <div className="flex flex-row items-start justify-between w-full gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matheo.dusong@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.open("https://mail.google.com/mail/?view=cm&fs=1&to=matheo.dusong@gmail.com", "_blank", "noopener,noreferrer");
            }}
            className="spec-label inline-block border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
          >
            matheo.dusong@gmail.com ↗
          </a>
          <div className="flex flex-col items-end gap-3">
            <a
              href="https://www.instagram.com/matheodusong/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open("https://www.instagram.com/matheodusong/", "_blank", "noopener,noreferrer");
              }}
              className="spec-label inline-block border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.linkedin.com/in/math%C3%A9o-dusong-060a291b5/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open("https://www.linkedin.com/in/math%C3%A9o-dusong-060a291b5/", "_blank", "noopener,noreferrer");
              }}
              className="spec-label inline-block border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </OverlayPage>
  );
};

export default InfoOverlay;
