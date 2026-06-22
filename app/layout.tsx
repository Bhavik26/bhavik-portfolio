import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhavik Upadhaya | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Bhavik Upadhaya — Full Stack Developer and AI Engineer specializing in React, Next.js, Python, Machine Learning, and intelligent web applications.",
  keywords: [
    "Bhavik Upadhaya",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Bhavik Upadhaya" }],
  creator: "Bhavik Upadhaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Bhavik Upadhaya | Full Stack Developer & AI Engineer",
    description:
      "Building scalable web applications, AI-powered systems, and intelligent solutions with modern technologies.",
    siteName: "Bhavik Upadhaya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavik Upadhaya | Full Stack Developer & AI Engineer",
    description:
      "Building scalable web applications, AI-powered systems, and intelligent solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-dark-950 text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
