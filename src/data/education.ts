export type EducationEntry = {
  degree: string;
  school: string;
  schoolUrl?: string;
  flag: string;
  period: string;
  bullets?: string[];
};

export const educationHistory: EducationEntry[] = [
  {
    degree: "Trường Đại học Ngoại ngữ - Tin học Thành phố Hồ Chí Minh (HUFLIT)",
    school: "Bachelor's degree in Software Engineering",
    flag: "🇻🇳",
    period: "2022 – 2026",
  },
];
