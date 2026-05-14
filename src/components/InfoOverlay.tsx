import OverlayPage from "./OverlayPage";
import SEOHead from "./SEOHead";

interface InfoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoOverlay = ({ isOpen, onClose }: InfoOverlayProps) => {
  return (
    <OverlayPage isOpen={isOpen} onClose={onClose}>
      <SEOHead
        title="About"
        description="Swiss based designer"
        path="/info"
      />
      <section className="max-w-4xl mx-auto pt-36 md:pt-48 px-6 md:px-10">
        <p className="spec-label mb-4">Profile</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter mb-12 text-foreground leading-tight">
          <span className="block">— Swiss based designer</span>
          <span className="block mt-4">— Currently studying at Ecal</span>
        </h1>
        <a
          href="https://www.instagram.com/matheodusong/"
          target="_blank"
          rel="noopener noreferrer"
          className="spec-label inline-block border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
        >
          Instagram ↗
        </a>
      </section>
    </OverlayPage>
  );
};

export default InfoOverlay;
