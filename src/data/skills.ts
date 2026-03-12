export type Skill = {
  name: string;
  icon: string | null;
};

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skills: Skill[] = [
  { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
  { name: "React", icon: `${D}/react/react-original.svg` },
  { name: "React Native", icon: `${D}/react/react-original.svg` },
  { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
  { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
  { name: "Zustand", icon: null },
  { name: "Redux", icon: `${D}/redux/redux-original.svg` },
  { name: "MobX-State-Tree", icon: `${D}/mobx/mobx-original.svg` },
  { name: "Tailwind", icon: `${D}/tailwindcss/tailwindcss-original.svg` },
  { name: "shadcn/ui", icon: null },
  { name: "Radix", icon: null },
  { name: "NestJS", icon: `${D}/nestjs/nestjs-original.svg` },
  { name: "Node", icon: `${D}/nodejs/nodejs-original.svg` },
  { name: "RabbitMQ", icon: `${D}/rabbitmq/rabbitmq-original.svg` },
  { name: "Socket.io", icon: `${D}/socketio/socketio-original.svg` },
  { name: "Puppeteer", icon: null },
  { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
  { name: "Redis", icon: `${D}/redis/redis-original.svg` },
  { name: "Vite", icon: `${D}/vitejs/vitejs-original.svg` },
  { name: "Docker", icon: `${D}/docker/docker-original.svg` },
  { name: "Git", icon: `${D}/git/git-original.svg` },
  { name: "GitHub", icon: `${D}/github/github-original.svg` },
  { name: "Figma", icon: `${D}/figma/figma-original.svg` },
];
