import { memo } from "react";

interface ProjectStripProps {
  title: string;
  image: string;
  priority?: boolean;
  onClick: () => void;
  onIntent?: () => void;
}

const ProjectStrip = memo(({ title, image, priority = false, onClick, onIntent }: ProjectStripProps) => (
  <button
    type="button"
    className="project-strip relative overflow-hidden cursor-grab active:cursor-grabbing border-r border-border flex items-center justify-center h-full"
    onClick={onClick}
    onMouseEnter={onIntent}
    onFocus={onIntent}
    aria-label={`Open ${title} project`}
  >
    <div className="absolute inset-0 flex items-center justify-center z-0">
      <div className="project-strip__media">
        <img
          src={image}
          alt={`${title} — industrial design project by Matheo Dusong`}
          className="w-full h-full object-cover"
          width={900}
          height={1200}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          decoding="async"
        />
      </div>
    </div>
  </button>
));

ProjectStrip.displayName = "ProjectStrip";

export default ProjectStrip;
