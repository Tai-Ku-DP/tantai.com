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
    title: "Full-stack Engineer",
    company: "Simplamo Vietnam (Technology Company)",
    flag: "🇻🇳",
    country: "Vietnam",
    type: "Full-Time",
    period: "Jan 2024 - Present",
    bullets: [
      "Developed and maintained web and mobile applications using ReactJS (Next.js), and ReactNative.",
      "Built and maintained backend services with NestJS in a microservices architecture, working with MongoDB, RabbitMQ, and RESTful APIs.",
      "Built a [Calendar](https://help.simplamo.com/releases/2024/v2.6/#1-simplamo-calendar) feature with Google Calendar integration for event scheduling and synchronization.",
      "Developed [AI chat](https://help.simplamo.com/features/simplamo-ai/overview) features for mobile applications and [AI assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/vision-ai) features for web applications.",
      "Developed statistical widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to present and analyze data, and implemented [automated email reporting](https://help.simplamo.com/releases/2025/v2.15.2/#b%C3%A1o-c%C3%A1o-dashboard-t%E1%BB%B1-%C4%91%E1%BB%99ng).",
      "Developed web applications with Next.js, leveraging Server-Side Rendering (SSR) for performance and SEO optimization.",
      "Implemented automated report generation and email delivery systems using AWS SES for notifications and scheduled reports.",
    ],
  },
  {
    title: "Front-end Engineer",
    company: "Simplamo Vietnam (Technology Company)",
    flag: "🇻🇳",
    country: "Vietnam",
    type: "Full-Time",
    period: "Jun 2023 - Dec 2023",
    bullets: [
      "Developed web applications using React.js and Next.js and mobile applications using React Native.",
      "Built and maintained CRM system features, including customer management, dashboards, and reporting interfaces.",
      "Handled authentication flow for a multi-tenant architecture on the frontend, managing JWT tokens, tenant context, and protected routes to ensure secure access across different tenants.",
      "Implemented role-based access control to manage user permissions across different modules.",
      "Designed and developed reusable UI components to improve development efficiency and maintain consistency across the application.",
      "Optimized application performance and rendering by splitting components, using memoization, and improving state management.",
      "Collaborated closely with backend developers and designers to deliver scalable and user-friendly features.",
      "Integrated APIs and handled data fetching, state management, and error handling for better user experience.",
    ],
  },
];
