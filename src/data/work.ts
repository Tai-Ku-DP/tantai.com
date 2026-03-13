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
    company: "Simplamo Vietnam (Technology Company)",
    flag: "🇻🇳",
    country: "Vietnam",
    type: "Full-Time",
    period: "Mar 2023 – Present",
    bullets: [
      "Built Tree & Gantt views features to improve goal organization, visibility, and progress tracking.",
      "Developed [AI Chat](https://simplamo.com/features/ai-chat) and [AI Assistant](https://simplamo.com/features/ai-assistant) features.",
      "Developed Whiteboards with real-time collaboration.",
      "Built and maintained the Zalo Mini App for Simplamo with seamless integration.",
      "Developed interactive chart and analytics widgets for the Dashboard to enhance data visualization.",
      "Developed and maintained core features to enhance functionality and user experience.",
      "Ensured UI/UX consistency and adherence to standards.",
      "Implemented robust frontend solutions for web and mobile platforms.",
      "Analyzed technical capabilities and provided optimal solutions.",
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
