export type Skill = {
  name: string;
  icon: string | null;
  darkInvert?: boolean;
  href?: string;
  level: "proficient" | "familiar";
};

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skills: Skill[] = [
  // Proficient
  {
    name: "Next.js",
    icon: `${D}/nextjs/nextjs-original.svg`,
    darkInvert: true,
    href: "https://nextjs.org",
    level: "proficient",
  },
  {
    name: "React",
    icon: `${D}/react/react-original.svg`,
    href: "https://react.dev",
    level: "proficient",
  },
  {
    name: "React Native",
    icon: `${D}/react/react-original.svg`,
    href: "https://reactnative.dev",
    level: "proficient",
  },
  {
    name: "TypeScript",
    icon: `${D}/typescript/typescript-original.svg`,
    href: "https://www.typescriptlang.org",
    level: "proficient",
  },
  {
    name: "JavaScript",
    icon: `${D}/javascript/javascript-original.svg`,
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    level: "proficient",
  },
  {
    name: "NestJS",
    icon: "/icons/nestjs.svg",
    href: "https://nestjs.com",
    level: "proficient",
  },
  {
    name: "MongoDB",
    icon: `${D}/mongodb/mongodb-original.svg`,
    href: "https://www.mongodb.com",
    level: "proficient",
  },
  {
    name: "Tailwind",
    icon: `${D}/tailwindcss/tailwindcss-original.svg`,
    href: "https://tailwindcss.com",
    level: "proficient",
  },
  {
    name: "Zustand",
    icon: "/icons/zustand.svg",
    href: "https://zustand-demo.pmnd.rs",
    level: "proficient",
  },
  {
    name: "MobX-State-Tree",
    icon: "/icons/mobx.svg",
    href: "https://mobx-state-tree.js.org",
    level: "proficient",
  },
  {
    name: "Node",
    icon: `${D}/nodejs/nodejs-original.svg`,
    href: "https://nodejs.org",
    level: "proficient",
  },
  {
    name: "Git",
    icon: `${D}/git/git-original.svg`,
    href: "https://git-scm.com",
    level: "proficient",
  },
  // Familiar
  {
    name: "Redux",
    icon: `${D}/redux/redux-original.svg`,
    href: "https://redux.js.org",
    level: "familiar",
  },
  {
    name: "shadcn/ui",
    icon: "/icons/shadcnui.svg",
    darkInvert: true,
    href: "https://ui.shadcn.com",
    level: "familiar",
  },
  {
    name: "Radix",
    icon: "/icons/radixui.svg",
    darkInvert: true,
    href: "https://www.radix-ui.com",
    level: "familiar",
  },
  {
    name: "RabbitMQ",
    icon: `${D}/rabbitmq/rabbitmq-original.svg`,
    href: "https://www.rabbitmq.com",
    level: "familiar",
  },
  {
    name: "Socket.io",
    icon: `${D}/socketio/socketio-original.svg`,
    darkInvert: true,
    href: "https://socket.io",
    level: "familiar",
  },
  {
    name: "Puppeteer",
    icon: "/icons/puppeteer.svg",
    href: "https://pptr.dev",
    level: "familiar",
  },
  {
    name: "Cypress",
    icon: `${D}/cypressio/cypressio-original.svg`,
    darkInvert: true,
    href: "https://www.cypress.io",
    level: "familiar",
  },
  {
    name: "Redis",
    icon: `${D}/redis/redis-original.svg`,
    href: "https://redis.io",
    level: "familiar",
  },
  {
    name: "Docker",
    icon: `${D}/docker/docker-original.svg`,
    href: "https://www.docker.com",
    level: "familiar",
  },
  {
    name: "GitHub",
    icon: `${D}/github/github-original.svg`,
    darkInvert: true,
    href: "https://github.com",
    level: "familiar",
  },
  {
    name: "Vite",
    icon: `${D}/vitejs/vitejs-original.svg`,
    href: "https://vitejs.dev",
    level: "familiar",
  },
  {
    name: "Figma",
    icon: `${D}/figma/figma-original.svg`,
    href: "https://www.figma.com",
    level: "familiar",
  },
  {
    name: "Cursor",
    icon: "/icons/cursor.svg",
    darkInvert: true,
    href: "https://www.cursor.com",
    level: "familiar",
  },
];
