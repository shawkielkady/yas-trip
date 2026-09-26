import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../public/shared_components/navbar";

export const metadata: Metadata = {
  title: "رحالة مصر | أجمل الرحلات والمغامرات",
  description: "استكشف أفضل الرحلات، التخييم، الغوص، والرحلات الصحراوية في مصر.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased overflow-x-hidden">
      <body className="min-h-full flex flex-col overflow-x-hidden w-full max-w-full bg-bg-main text-text-main">
        <Navbar />
        <div className="app-container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
