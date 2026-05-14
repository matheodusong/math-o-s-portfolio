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
      "A series of mechanical pencils developed as a material study, exploring how a single object can behave like a color chart. The pattern repeating along each barrel thickens progressively in relation to the lead diameter housed inside, turning a functional detail into a visible code.",
    objective:
      "A series of mechanical pencils developed as a material study, exploring how a single object can behave like a color chart. The pattern repeating along each barrel thickens progressively in relation to the lead diameter housed inside, turning a functional detail into a visible code.",
    materiality: "3D printed Aluminium. School project, ECAL, 2024.",
    imageFolder: "alumine",
  },
  {
    slug: "rpr",
    number: 2,
    title: "RPR",
    subtitle: "CNC Fabrication",
    description:
      "A repairable external SSD built around a standard M.2 drive. The shell is 3D printed in aluminium for its heat-dissipation properties, held together by a soft plastic bumper that wraps the body like a phone case. Once opened, the M.2 drive can be swapped without any tools, extending the object's lifespan beyond a fixed storage capacity.",
    objective:
      "A repairable external SSD built around a standard M.2 drive. The shell is 3D printed in aluminium for its heat-dissipation properties, held together by a soft plastic bumper that wraps the body like a phone case. Once opened, the M.2 drive can be swapped without any tools, extending the object's lifespan beyond a fixed storage capacity.",
    materiality: "3D printed aluminium and soft plastic bumper. School project, ECAL, 2025.",
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
      "Éventail métallique pensé comme une relecture contemporaine d'un objet vieux de plusieurs siècles, conçu pour les chaudes journées d'été. La structure en acier inoxydable découpée au laser soutient une toile en ripstop enduit de PVC, assemblée par soudure thermique pour se passer de couture.",
    objective:
      "Éventail métallique pensé comme une relecture contemporaine d'un objet vieux de plusieurs siècles, conçu pour les chaudes journées d'été. La structure en acier inoxydable découpée au laser soutient une toile en ripstop enduit de PVC, assemblée par soudure thermique pour se passer de couture.",
    materiality: "Acier inoxydable découpé au laser et ripstop enduit PVC. ECAL, 2024.",
    imageFolder: "zephyr",
    imageCount: 2,
  },
  {
    slug: "peony",
    number: 5,
    title: "Peony",
    subtitle: "Organic Form",
    description:
      "A bud vase developed during a workshop at ECAL led by Philippe Malouin, with the brief of designing a single-stem holder. Conceived as a group project with Arthur Németh and Jonas Meynet, the piece was hand-blown by glass artisans collaborating with the workshop, translating a quick design intention into a precise craft object.",
    objective:
      "A bud vase developed during a workshop at ECAL led by Philippe Malouin, with the brief of designing a single-stem holder. Conceived as a group project with Arthur Németh and Jonas Meynet, the piece was hand-blown by glass artisans collaborating with the workshop, translating a quick design intention into a precise craft object.",
    materiality:
      "Hand-blown glass. Workshop with Philippe Malouin, in collaboration with Arthur Németh and Jonas Meynet. ECAL, 2024. Images by Shiny Vallenas.",
    imageFolder: "peony",
  },
  {
    slug: "Runway",
    number: 6,
    title: "Runway",
    subtitle: "Jewellery collection",
    description:
      "A jewellery collection of rings, bracelets and belt buckles created to accompany the garments of fashion designer Venus Z.E during her runway show. Each piece is 3D printed in 316L stainless steel, with several finished and polished by hand to bring out a contrast between raw sintered surfaces and mirror-bright facets.",
    objective:
      "A jewellery collection of rings, bracelets and belt buckles created to accompany the garments of fashion designer Venus Z.E during her runway show. Each piece is 3D printed in 316L stainless steel, with several finished and polished by hand to bring out a contrast between raw sintered surfaces and mirror-bright facets.",
    materiality: "3D printed 316L stainless steel, hand-polished. Personal project, 2026.",
    imageFolder: "Runway",
  },
  {
    slug: "PN",
    number: 7,
    title: "PN",
    subtitle: "Visual research",
    description:
      "A visual research developed around a concept for a line of cream jars imagined for a client. The series explores material, light and proportion to test how the object could exist before any physical prototype, building a coherent visual language around the product.",
    objective:
      "A visual research developed around a concept for a line of cream jars imagined for a client. The series explores material, light and proportion to test how the object could exist before any physical prototype, building a coherent visual language around the product.",
    materiality: "CGI, fully modelled and rendered in Blender without the use of artificial intelligence. Personal project, 2025.",
    imageFolder: "PN",
  },
  {
    slug: "JB",
    number: 8,
    title: "JB",
    subtitle: "Visuals for a client",
    description:
      "A selection of CGI images produced for a client. The first image was designed as a poster for a DJ set event, treating the visual as a sharp graphic statement. The second was created to be printed on textile, generating a repeating motif intended to be cut and assembled into garments.",
    objective:
      "A selection of CGI images produced for a client. The first image was designed as a poster for a DJ set event, treating the visual as a sharp graphic statement. The second was created to be printed on textile, generating a repeating motif intended to be cut and assembled into garments.",
    materiality: "CGI, modelled and rendered in Blender. Poster image, 2026. Textile print image, 2025.",
    imageFolder: "JB",
    imageCount: 2,
  },
];

export const getProjectBySlug = (slug: string): ProjectData | undefined =>
  projects.find((p) => p.slug === slug);
