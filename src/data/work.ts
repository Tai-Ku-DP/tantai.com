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
    title: "Junior Full-Stack Engineer",
    company: "Simplamo Vietnam (Technology Company)",
    flag: "🇻🇳",
    country: "Vietnam",
    type: "Full-Time",
    period: "Jan 2024 - Present",
    bullets: [
      "[Dashboard](https://help.simplamo.com/features/dashboard/overview) system with 20+ interactive widgets — reduced initial load time by ~50% via component splitting, memoization, and render batching.",
      "Shipped [AI chat](https://help.simplamo.com/features/simplamo-ai/overview) (React Native) and [AI assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/vision-ai) (Next.js) integrated into core user flows; became the fastest-adopted features in Q2 2024.",
      "Built an automated report pipeline: Puppeteer + Cron + RabbitMQ + [AWS SES delivery](https://help.simplamo.com/releases/2025/v2.15.2/#b%C3%A1o-c%C3%A1o-dashboard-t%E1%BB%B1-%C4%91%E1%BB%99ng) — eliminated 100% of manual report generation for the entire user base.",
      "[Google Calendar](https://help.simplamo.com/releases/2024/v2.6/#1-simplamo-calendar) two-way sync with conflict resolution and timezone handling across a multi-tenant SaaS architecture.",
      "Built [Personnel Performance](https://help.simplamo.com/releases/2025/v2.15/#hi%E1%BB%87u-su%E1%BA%A5t-nh%C3%A2n-s%E1%BB%B1) tracking module — aggregates individual KPI results by month/quarter/year, enabling data-driven compensation and bonus decisions for managers.",
      "Maintained and extended NestJS microservices (MongoDB + RabbitMQ) — leveraged aggregation pipeline for complex cross-collection queries; zero unplanned downtime across all feature releases.",
      "Integrated Cursor AI into daily development workflow — used for code generation, refactoring, and architecture planning; consistently reduced implementation time on complex features across both frontend and backend.",
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
      "Built 30+ reusable UI components (shadcn/ui + Tailwind) — cut new-screen implementation time by ~40% across the team.",
      "Engineered JWT + multi-tenant auth flow (token rotation, tenant context, protected routes) — zero security incidents throughout the rollout.",
      "Reduced unnecessary re-renders across CRM modules by applying memoization (React.memo, useMemo, useCallback) and optimizing MobX-State-Tree observers — improved UI responsiveness noticeably in data-heavy views.",
      "Built 30+ transactional email templates using Handlebars — covering onboarding, notifications, and automated reports, used across the entire product.",
      "Collaborated in Agile sprints with backend engineers and designers — consistently hit sprint commitments in a fast-paced startup environment.",
    ],
  },
];
