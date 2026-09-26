import React from "react";
import { SlidersHorizontal } from "lucide-react";

const categories = [
  "جميع الأقسام",
  "رحلات شاطئية",
  "تخييم وسفاري",
  "مغامرات وهايكينج",
  "رحلات استجمام",
];

export default function ProductsFilterBar() {
  return (
    <section className="bg-surface rounded-2xl p-4 sm:p-5 border border-gray-200/80 shadow-sm mb-8 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-gray-100">
        {/* Static Category Tabs UI */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                idx === 0
                  ? "bg-primary text-white shadow-sm"
                  : "text-text-muted hover:text-secondary hover:bg-bg-main"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Static Sort Dropdown UI */}
        <div className="flex items-center gap-2 me-auto">
          <span className="text-xs font-semibold text-text-muted flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            الترتيب:
          </span>
          <select
            defaultValue="featured"
            className="bg-bg-main border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-secondary focus:outline-none cursor-pointer"
          >
            <option value="featured">🔥 الأكثر شعبية</option>
            <option value="price-asc">💰 السعر: من الأقل للأعلى</option>
            <option value="price-desc">💎 السعر: من الأعلى للأقل</option>
            <option value="rating">⭐ الأعلى تقييماً</option>
          </select>
        </div>
      </div>

      {/* Static Budget Slider & Filter Info Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <span className="font-semibold text-secondary whitespace-nowrap">
            الحد الأقصى للسعر: <strong className="text-primary font-bold">5,000 ج.م</strong>
          </span>
          <input
            type="range"
            min="1000"
            max="6000"
            defaultValue="5000"
            readOnly
            className="w-32 sm:w-48 accent-primary cursor-default"
          />
        </div>

        {/* Static Counter */}
        <div className="flex items-center gap-2 ms-auto">
          <span className="text-text-muted font-medium">
            عرض <strong className="text-secondary font-bold">2</strong> رحلات
          </span>
        </div>
      </div>
    </section>
  );
}
