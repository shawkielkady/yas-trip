"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("الرئيسية");

  const navTabs = [
    { name: "الرئيسية", href: "#" },
    { name: "استكشف الوجهات", href: "#" },
    { name: "رحلات ومغامرات", href: "#" },
    { name: "حكايات السفر", href: "#" },
    { name: "شركات السفر", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. اللوجو (Logo) */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              {/* شعار مؤقت بنفس طابع الموقع */}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                ر
              </div>
              <span className="text-2xl font-black text-secondary tracking-tight">
                رحالة{" "}
                <span className="text-primary text-sm font-semibold">مصر</span>
              </span>
            </a>
          </div>

          {/* 2. التابس للشاشات الكبيرة (Desktop Navigation) */}
          <nav className="hidden md:flex items-center gap-1 bg-bg-main p-1.5 rounded-full border border-gray-200/60">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-secondary text-white shadow-sm"
                      : "text-text-muted hover:text-secondary hover:bg-white/60"
                  }`}
                >
                  {tab.name}
                </a>
              );
            })}
          </nav>

          {/* 3. زر المنيو للموبايل (Mobile Menu Button) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-secondary hover:bg-bg-main transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. القائمة المنسدلة للموبايل (Mobile Navigation Drawer) */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-gray-100 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navTabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => {
                  setActiveTab(tab.name);
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-secondary text-white"
                    : "text-text-muted hover:bg-bg-main hover:text-secondary"
                }`}
              >
                {tab.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
