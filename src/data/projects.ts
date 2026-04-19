export interface ProjectData {
  slug: string;
  /** Fixed display number (01, 02, etc.) */
  number: number;
  title: string;
  subtitle: string;
  description: string;
  objective?: string;
  materiality: string;
  /** Folder name under /images/ — images inside must be named image-1.jpeg, image-2.jpeg, etc. */
  imageFolder: string;
  /** Number of images in the folder (default: 3) */
  imageCount?: number;
}

/** Helper: returns the path for a project image by index (1-based). */
export const getProjectImage = (folder: string, index: number) =>
  `/images/${folder}/image-${index}.webp`;

export const projects: ProjectData[] = [
  {
    slug: "alumine",
    number: 1,
    title: "Alumine",
    subtitle: "Mechanical pencils",
    description:
      "A collection of mechanical pencils that share the same base pattern, but their thickness evolves in relation to the lead's diameter.",
    objective:
      "A collection of mechanical pencils that share the same base pattern, but their thickness evolves in relation to the lead's diameter.",
    materiality: "3D printed Aluminium.",
    imageFolder: "alumine",
  },
  {
    slug: "rpr",
    number: 2,
    title: "RPR",
    subtitle: "CNC Fabrication",
    description:
      "M.2 based SSD, can be opened by user to change the storage capacity when full.",
    objective: "M.2 based SSD, can be opened by user to change the storage capacity when full.",
    materiality: "3D printed Aluminium 6061",
    imageFolder: "rpr",
  },
  {
    slug: "mille-foil",
    number: 3,
    title: "Mille-foil",
    subtitle: "Structure Design",
    description:
      "Designed to suit a wide range of users, Mille-foil addresses this issue with its modular volume system. A single board is all you need, where several would normally be required. It's suitable for both beginners and experienced riders, adapting to each individual's progress. Easy to transport and quick to assemble, just a few screws are all you need to be ready to sail.",
    objective:
      "Designed to suit a wide range of users, Mille-foil addresses this issue with its modular volume system. A single board is all you need, where several would normally be required. It's suitable for both beginners and experienced riders, adapting to each individual's progress. Easy to transport and quick to assemble, just a few screws are all you need to be ready to sail.",
    materiality: "Carbon and fiber glass.",
    imageFolder: "mille-foil",
  },
  {
    slug: "zephyr",
    number: 4,
    title: "Zéphyr",
    subtitle: "Aerodynamic Study",
    description:
      " Zéphyr is a fan. The stainless steel structure unfolds smoothly and creates a light breeze with a simple motion. Whether you're on the move or just need a quick way to cool down, Zéphyr is a good companion for warm days.",
    objective:
      "Zéphyr is a fan. The stainless steel structure unfolds smoothly and creates a light breeze with a simple motion. Whether you're on the move or just need a quick way to cool down, Zéphyr is a good companion for warm days.",
    materiality: "Stainless steel and PVC-coated ripstop.",
    imageFolder: "zephyr",
    imageCount: 2,
  },
  {
    slug: "peony",
    number: 5,
    title: "Peony",
    subtitle: "Organic Form",
    description: "Soliflower vase for peonies.",
    objective: "Soliflower vase for peonies.",
    materiality: "Images by Shiny Vallenas.",
    imageFolder: "peony",
  },
  {
    slug: "Runway",
    number: 6,
    title: "Runway",
    subtitle: "Jewlery collection made for a runway show.",
    description: "Jewlery collection made for a runway show.",
    objective: "Jewlery collection made for a runway show.",
    materiality: "3D printed 316L Steel",
    imageFolder: "Runway",
  },
  {
    slug: "PN",
    number: 7,
    title: "PN",
    subtitle: "Visuals for an artist.",
    description: "Visuals for an artist.",
    objective: "Visuals for an artist.",
    materiality: "CGI",
    imageFolder: "PN",
  },
  {
    slug: "JB",
    number: 8,
    title: "JB",
    subtitle: "Visuals for an event.",
    description: "Visuals for an event.",
    objective: "Visuals for an event.",
    materiality: "CGI",
    imageFolder: "JB",
    imageCount: 2,
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined =>
  projects.find((p) => p.slug === slug);
