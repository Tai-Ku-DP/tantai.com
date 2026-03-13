export type Skill = {
  name: string;
  icon: string | null;
  darkInvert?: boolean;
  href?: string;
};

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skills: Skill[] = [
  {
    name: "Next.js",
    icon: `${D}/nextjs/nextjs-original.svg`,
    darkInvert: true,
    href: "https://nextjs.org",
  },
  {
    name: "React",
    icon: `${D}/react/react-original.svg`,
    href: "https://react.dev",
  },
  {
    name: "React Native",
    icon: `${D}/react/react-original.svg`,
    href: "https://reactnative.dev",
  },
  {
    name: "TypeScript",
    icon: `${D}/typescript/typescript-original.svg`,
    href: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    icon: `${D}/javascript/javascript-original.svg`,
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "Zustand",
    icon: "/icons/zustand.svg",
    href: "https://zustand-demo.pmnd.rs",
  },
  {
    name: "Redux",
    icon: `${D}/redux/redux-original.svg`,
    href: "https://redux.js.org",
  },
  {
    name: "MobX-State-Tree",
    icon: "/icons/mobx.svg",
    href: "https://mobx-state-tree.js.org",
  },
  {
    name: "Tailwind",
    icon: `${D}/tailwindcss/tailwindcss-original.svg`,
    href: "https://tailwindcss.com",
  },
  {
    name: "shadcn/ui",
    icon: "/icons/shadcnui.svg",
    darkInvert: true,
    href: "https://ui.shadcn.com",
  },
  {
    name: "Radix",
    icon: "/icons/radixui.svg",
    darkInvert: true,
    href: "https://www.radix-ui.com",
  },
  {
    name: "NestJS",
    icon: "/icons/nestjs.svg",
    href: "https://nestjs.com",
  },
  {
    name: "Node",
    icon: `${D}/nodejs/nodejs-original.svg`,
    href: "https://nodejs.org",
  },
  {
    name: "RabbitMQ",
    icon: `${D}/rabbitmq/rabbitmq-original.svg`,
    href: "https://www.rabbitmq.com",
  },
  {
    name: "Socket.io",
    icon: `${D}/socketio/socketio-original.svg`,
    darkInvert: true,
    href: "https://socket.io",
  },
  {
    name: "Puppeteer",
    icon: "/icons/puppeteer.svg",
    href: "https://pptr.dev",
  },
  {
    name: "MongoDB",
    icon: `${D}/mongodb/mongodb-original.svg`,
    href: "https://www.mongodb.com",
  },
  {
    name: "Redis",
    icon: `${D}/redis/redis-original.svg`,
    href: "https://redis.io",
  },
  {
    name: "Vite",
    icon: `${D}/vitejs/vitejs-original.svg`,
    href: "https://vitejs.dev",
  },
  {
    name: "Docker",
    icon: `${D}/docker/docker-original.svg`,
    href: "https://www.docker.com",
  },
  {
    name: "Git",
    icon: `${D}/git/git-original.svg`,
    href: "https://git-scm.com",
  },
  {
    name: "GitHub",
    icon: `${D}/github/github-original.svg`,
    darkInvert: true,
    href: "https://github.com",
  },
  {
    name: "Figma",
    icon: `${D}/figma/figma-original.svg`,
    href: "https://www.figma.com",
  },
  {
    name: "Cursor",
    icon: "/icons/cursor.svg",
    darkInvert: true,
    href: "https://www.cursor.com",
  },
];
