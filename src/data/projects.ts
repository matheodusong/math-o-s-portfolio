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
    subtitle: "Porte-mines",
    description:
      "Série de porte-mines développée comme étude de matière, explorant la manière dont un objet peut fonctionner comme un nuancier. Le motif répété le long de chaque corps s’épaissit progressivement selon le diamètre de la mine qu’il contient, transformant un détail fonctionnel en code visuel.",
    objective:
      "Série de porte-mines développée comme étude de matière, explorant la manière dont un objet peut fonctionner comme un nuancier. Le motif répété le long de chaque corps s’épaissit progressivement selon le diamètre de la mine qu’il contient, transformant un détail fonctionnel en code visuel.",
    materiality: "Aluminium imprimé en 3D. ECAL, 2024.",
    imageFolder: "alumine",
  },
  {
    slug: "rpr",
    number: 2,
    title: "RPR",
    subtitle: "Fabrication CNC",
    description:
      "Basé sur un système de stockage M.2 interchangeable, RPR est un SSD externe réparable qui permet de remplacer ou d’ajuster son stockage en toute simplicité, sans aucun outil. Autour du boîtier, une protection en plastique souple enveloppe le SSD. Cette couche sert non seulement à maintenir les composants en place sans recourir à des vis, mais également à protéger vos données des impacts et des chocs éventuels.",
    objective:
      "Basé sur un système de stockage M.2 interchangeable, RPR est un SSD externe réparable qui permet de remplacer ou d’ajuster son stockage en toute simplicité, sans aucun outil. Autour du boîtier, une protection en plastique souple enveloppe le SSD. Cette couche sert non seulement à maintenir les composants en place sans recourir à des vis, mais également à protéger vos données des impacts et des chocs éventuels.",
    materiality:
      "Aluminium imprimé en 3D et bumper en plastique souple. ECAL, 2025.",
    imageFolder: "rpr",
  },
  {
    slug: "mille-foil",
    number: 3,
    title: "Mille-foil",
    subtitle: "Design structurel",
    description:
      "Pensé pour s’adapter à une large variété d’utilisateurs, Mille-foil répond à cette problématique grâce à un système modulaire de volume. Une seule planche suffit là où plusieurs seraient normalement nécessaires. Adaptée aussi bien aux débutants qu’aux riders expérimentés, elle accompagne l’évolution de chacun. Facile à transporter et rapide à assembler, quelques vis suffisent pour être prêt à naviguer.",
    objective:
      "Pensé pour s’adapter à une large variété d’utilisateurs, Mille-foil répond à cette problématique grâce à un système modulaire de volume. Une seule planche suffit là où plusieurs seraient normalement nécessaires. Adaptée aussi bien aux débutants qu’aux riders expérimentés, elle accompagne l’évolution de chacun. Facile à transporter et rapide à assembler, quelques vis suffisent pour être prêt à naviguer.",
    materiality: "Carbone et fibre de verre. ECAL 2026",
    imageFolder: "mille-foil",
  },
  {
    slug: "zephyr",
    number: 4,
    title: "Zéphyr",
    subtitle: "Étude aérodynamique",
    description:
      "Zéphyr est un éventail métallique pensé comme une réinterprétation contemporaine d’un objet ancien, conçu pour les journées d’été. Avec structure en acier inoxydable et sa toile en ripstop thermocollé, Zéphyr devient un compagnon discret pour les journées chaudes.",
    objective:
      "Zéphyr est un éventail métallique pensé comme une réinterprétation contemporaine d’un objet ancien, conçu pour les journées d’été. Avec structure en acier inoxydable et sa toile en ripstop thermocollé, Zéphyr devient un compagnon discret pour les journées chaudes.",
    materiality:
      "Acier inoxydable découpé au laser et ripstop. ECAL, 2024.",
    imageFolder: "zephyr",
    imageCount: 2,
  },
  {
    slug: "peony",
    number: 5,
    title: "Peony",
    subtitle: "Forme organique",
    description:
      "Peony est un soliflore conçu comme un coussin pour pivoines, réalisé lors d’un workshop à l’ECAL dirigé par Philippe Malouin, en collaboration avec Arthur Németh et Jonas Meynet.",
    objective:
      "Peony est un soliflore conçu comme un coussin pour pivoines, réalisé lors d’un workshop à l’ECAL dirigé par Philippe Malouin, en collaboration avec Arthur Németh et Jonas Meynet.",
    materiality:
      "Verre soufflé à la main. ECAL, 2024. Images par Shiny Vallenas.",
    imageFolder: "peony",
  },
  {
    slug: "Runway",
    number: 6,
    title: "Runway",
    subtitle: "Collection de bijoux",
    description:
      "Une collection de bijoux composée de bagues, bracelets et boucles de ceinture créée pour accompagner les silhouettes de la créatrice de mode Venusz.e lors de son défilé. Chaque pièce est imprimée en 3D en acier inoxydable 316L, certaines sont polies à la main.",
    objective:
      "Une collection de bijoux composée de bagues, bracelets et boucles de ceinture créée pour accompagner les silhouettes de la créatrice de mode Venusz.e lors de son défilé. Chaque pièce est imprimée en 3D en acier inoxydable 316L, certaines sont polies à la main.",
    materiality:
      "Acier inoxydable 316L imprimé en 3D, poli à la main. Projet personnel, 2026.",
    imageFolder: "Runway",
  },
  {
    slug: "PN",
    number: 7,
    title: "PN",
    subtitle: "Recherche visuelle",
    description:
      "Client privé.",
    objective:
      "Client privé.",
    materiality:
      "CGI modélisé avec Rhino et rendu sur Blender. 2025.",
    imageFolder: "PN",
  },
  {
    slug: "JB",
    number: 8,
    title: "JB",
    subtitle: "Visuels pour un client",
    description:
      "Client privé.",
    objective:
      "Client privé.",
    materiality:
      "CGI modélisé sur Rhino et rendu sur Blender. 2025-2026.",
    imageFolder: "JB",
    imageCount: 2,
  },
];

export const getProjectBySlug = (
  slug: string
): ProjectData | undefined => projects.find((p) => p.slug === slug);
