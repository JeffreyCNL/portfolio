import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jeffrey Lee",
  description: "Software engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors font-sans">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
