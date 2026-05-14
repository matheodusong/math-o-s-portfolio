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
      "Une série de porte-mines développée comme étude de matière, explorant la manière dont un objet peut fonctionner comme un nuancier. Le motif répété le long de chaque corps s’épaissit progressivement selon le diamètre de la mine qu’il contient, transformant un détail fonctionnel en code visuel.",
    objective:
      "Une série de porte-mines développée comme étude de matière, explorant la manière dont un objet peut fonctionner comme un nuancier. Le motif répété le long de chaque corps s’épaissit progressivement selon le diamètre de la mine qu’il contient, transformant un détail fonctionnel en code visuel.",
    materiality: "Aluminium imprimé en 3D. Projet scolaire, ECAL, 2024.",
    imageFolder: "alumine",
  },
  {
    slug: "rpr",
    number: 2,
    title: "RPR",
    subtitle: "Fabrication CNC",
    description:
      "Un SSD externe réparable conçu autour d’un disque M.2 standard. La coque, imprimée en aluminium pour ses propriétés de dissipation thermique, est maintenue par un bumper souple enveloppant l’objet comme une coque de téléphone. Une fois ouvert, le disque M.2 peut être remplacé sans outils, prolongeant la durée de vie de l’objet au-delà d’une capacité de stockage fixe.",
    objective:
      "Un SSD externe réparable conçu autour d’un disque M.2 standard. La coque, imprimée en aluminium pour ses propriétés de dissipation thermique, est maintenue par un bumper souple enveloppant l’objet comme une coque de téléphone. Une fois ouvert, le disque M.2 peut être remplacé sans outils, prolongeant la durée de vie de l’objet au-delà d’une capacité de stockage fixe.",
    materiality:
      "Aluminium imprimé en 3D et bumper en plastique souple. Projet scolaire, ECAL, 2025.",
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
    materiality: "Carbone et fibre de verre.",
    imageFolder: "mille-foil",
  },
  {
    slug: "zephyr",
    number: 4,
    title: "Zéphyr",
    subtitle: "Étude aérodynamique",
    description:
      "Un éventail métallique conçu comme une réinterprétation contemporaine d’un objet vieux de plusieurs siècles, pensé pour les journées d’été les plus chaudes. La structure en acier inoxydable découpée au laser soutient une toile en ripstop enduit de PVC, assemblée par soudure thermique afin d’éviter toute couture.",
    objective:
      "Un éventail métallique conçu comme une réinterprétation contemporaine d’un objet vieux de plusieurs siècles, pensé pour les journées d’été les plus chaudes. La structure en acier inoxydable découpée au laser soutient une toile en ripstop enduit de PVC, assemblée par soudure thermique afin d’éviter toute couture.",
    materiality:
      "Acier inoxydable découpé au laser et ripstop enduit PVC. ECAL, 2024.",
    imageFolder: "zephyr",
    imageCount: 2,
  },
  {
    slug: "peony",
    number: 5,
    title: "Peony",
    subtitle: "Forme organique",
    description:
      "Un vase soliflore développé lors d’un workshop à l’ECAL dirigé par Philippe Malouin, autour du brief consistant à concevoir un support pour une seule tige. Réalisé en groupe avec Arthur Németh et Jonas Meynet, l’objet a été soufflé à la main par des artisans verriers collaborateurs du workshop, traduisant une intention rapide en un objet de précision.",
    objective:
      "Un vase soliflore développé lors d’un workshop à l’ECAL dirigé par Philippe Malouin, autour du brief consistant à concevoir un support pour une seule tige. Réalisé en groupe avec Arthur Németh et Jonas Meynet, l’objet a été soufflé à la main par des artisans verriers collaborateurs du workshop, traduisant une intention rapide en un objet de précision.",
    materiality:
      "Verre soufflé à la main. Workshop avec Philippe Malouin, en collaboration avec Arthur Németh et Jonas Meynet. ECAL, 2024. Images par Shiny Vallenas.",
    imageFolder: "peony",
  },
  {
    slug: "Runway",
    number: 6,
    title: "Runway",
    subtitle: "Collection de bijoux",
    description:
      "Une collection de bijoux composée de bagues, bracelets et boucles de ceinture créée pour accompagner les silhouettes de la créatrice de mode Venus Z.E lors de son défilé. Chaque pièce est imprimée en 3D en acier inoxydable 316L, certaines étant ensuite polies à la main afin de révéler un contraste entre surfaces brutes frittées et facettes miroir.",
    objective:
      "Une collection de bijoux composée de bagues, bracelets et boucles de ceinture créée pour accompagner les silhouettes de la créatrice de mode Venus Z.E lors de son défilé. Chaque pièce est imprimée en 3D en acier inoxydable 316L, certaines étant ensuite polies à la main afin de révéler un contraste entre surfaces brutes frittées et facettes miroir.",
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
      "Une recherche visuelle développée autour d’un concept de pots de crème imaginé pour un client. La série explore matière, lumière et proportions afin de tester l’existence de l’objet avant même tout prototype physique, en construisant un langage visuel cohérent autour du produit.",
    objective:
      "Une recherche visuelle développée autour d’un concept de pots de crème imaginé pour un client. La série explore matière, lumière et proportions afin de tester l’existence de l’objet avant même tout prototype physique, en construisant un langage visuel cohérent autour du produit.",
    materiality:
      "CGI entièrement modélisé et rendu sur Blender sans utilisation d’intelligence artificielle. Projet personnel, 2025.",
    imageFolder: "PN",
  },
  {
    slug: "JB",
    number: 8,
    title: "JB",
    subtitle: "Visuels pour un client",
    description:
      "Une sélection d’images CGI produites pour un client. La première a été conçue comme affiche pour un événement DJ set, traitant l’image comme une composition graphique affirmée. La seconde a été pensée pour une impression textile, générant un motif répétitif destiné à être découpé puis assemblé en vêtements.",
    objective:
      "Une sélection d’images CGI produites pour un client. La première a été conçue comme affiche pour un événement DJ set, traitant l’image comme une composition graphique affirmée. La seconde a été pensée pour une impression textile, générant un motif répétitif destiné à être découpé puis assemblé en vêtements.",
    materiality:
      "CGI modélisé et rendu sur Blender. Image d’affiche, 2026. Image textile, 2025.",
    imageFolder: "JB",
    imageCount: 2,
  },
];

export const getProjectBySlug = (
  slug: string
): ProjectData | undefined => projects.find((p) => p.slug === slug);
