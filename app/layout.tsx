import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
