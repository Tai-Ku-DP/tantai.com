import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phan Tấn Tài — Full-stack Engineer",
  description:
    "Phan Tấn Tài — Full-stack engineer with 2.5+ years of experience building modern web and mobile applications.",
  metadataBase: new URL("https://tantai-developer.vercel.app"),
  openGraph: {
    title: "Phan Tấn Tài — Fullstack Engineer",
    description:
      "Full-stack engineer with 2.5+ years of experience building modern web and mobile applications.",
    url: "https://tantai-developer.vercel.app",
    siteName: "Phan Tấn Tài",
    images: [
      {
        url: "https://tantai-developer.vercel.app/og-image-new.png",
        width: 1200,
        height: 630,
        alt: "Phan Tấn Tài — Fullstack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phan Tấn Tài — Fullstack Engineer",
    description:
      "Full-stack engineer with 2.5+ years of experience building modern web and mobile applications.",
    images: ["https://tantai-developer.vercel.app/og-image-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script to apply saved theme before React hydrates — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: "var(--bg)", color: "var(--fg)" }}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
