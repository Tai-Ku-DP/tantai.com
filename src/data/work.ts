export type WorkEntry = {
  title: string;
  company: string;
  companyUrl?: string;
  flag: string;
  country: string;
  type: "Full-Time" | "Contract" | "Freelance";
  period: string;
  bullets: string[];
};

export const workHistory: WorkEntry[] = [
  {
    title: "Lead Front-end Engineer",
    company: "Propbar",
    flag: "🇬🇧",
    country: "United Kingdom",
    type: "Full-Time",
    period: "Mar 2023 – Present",
    bullets: [
      "Led the front-end work from the project inception.",
      "Maintained a browser extension, widget and web application as a monorepo.",
      "Architected a highly complex real-estate map service.",
      "Implemented a sophisticated data grid of property comparables.",
    ],
  },
  {
    title: "Senior Front-end Engineer",
    company: "LalaDB",
    flag: "🇺🇸",
    country: "United States",
    type: "Contract",
    period: "Jun 2022 – Feb 2023",
    bullets: [
      "Was solving complex problems using the latest Web Standards.",
      "Architected the product's front-end structure.",
      "Accomplished the development of sophisticated UI components.",
      "Developed the open-source component library.",
      "Crafted responsive marketing landing pages.",
    ],
  },
  {
    title: "Senior Front-end Engineer",
    company: "Casago",
    flag: "🇺🇸",
    country: "United States",
    type: "Full-Time",
    period: "Oct 2021 – Apr 2022",
    bullets: [
      "Joined the new company after Nokori's acquisition.",
      "Helped to adapt and embed the new assets into the franchise ecosystem.",
      "Developed the ground for the new property analytics project.",
    ],
  },
  {
    title: "Middle Front-end Engineer",
    company: "Nokori",
    flag: "🇺🇸",
    country: "United States",
    type: "Full-Time",
    period: "Jul 2020 – Oct 2021",
    bullets: [
      "Acted as a primary and sole front-end developer of the team.",
      "Was responsible for the development of the single-page application.",
      "Worked on responsive static marketing pages.",
      "Managed the migration from Vue 2 codebase to Vue 3 and Composition API.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Freelance Platforms",
    flag: "🌍",
    country: "Worldwide",
    type: "Freelance",
    period: "Jan 2015 – Jul 2020",
    bullets: [
      "Kick-started my developing career as a PSD-to-HTML developer.",
      "Helped dozens of clients around the world to build and deploy their websites.",
      "Worked hard to meet client deadlines.",
      "Matured as a self-taught front-end engineer.",
    ],
  },
];
