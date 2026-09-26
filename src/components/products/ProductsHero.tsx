import React from "react";
import { Search, Sparkles } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-[#143450] to-secondary-light text-white p-6 sm:p-10 lg:p-12 mb-10 shadow-lg">
      {/* Background glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-accent-yellow border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-accent-yellow" />
          <span>استكشف عروض ورحلات مصر 2026</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          دليلك الأفضل لأجمل <span className="text-primary">الرحلات والمغامرات</span>
        </h1>

        <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
          من بحيرات الملح السحرية في سيوة وحتى غوص الشعاب المرجانية في دهب ومرسى علم. اختر رحلتك القادمة واحجز بسهولة مع أفضل منظمي الرحلات.
        </p>

        {/* Static Search Box UI */}
        <div className="pt-4 max-w-2xl">
          <div className="relative flex items-center">
            <Search className="absolute right-4 w-5 h-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              readOnly
              placeholder="ابحث عن وجهة، رحلة، أو منظم (مثال: دهب، سيوة، وادي الحيتان)..."
              className="w-full py-4 pr-12 pl-4 text-sm sm:text-base text-secondary bg-white rounded-2xl shadow-xl placeholder-gray-400 focus:outline-none cursor-default"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
