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
    <section className="bg-surface rounded-2xl p-3.5 sm:p-5 border border-gray-200/80 shadow-xs mb-8 space-y-3.5 w-full max-w-full overflow-hidden">
      {/* 1. Category Tabs Horizontal Scroll (Mobile & Desktop) */}
      <div className="w-full max-w-full overflow-x-auto overflow-y-hidden scrollbar-none touch-pan-x pb-2 border-b border-gray-100/90">
        <div className="flex items-center gap-1.5 w-max min-w-full">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                idx === 0
                  ? "bg-primary text-white border-primary shadow-2xs"
                  : "bg-bg-main text-text-muted hover:text-secondary hover:bg-gray-200/60 border-gray-200/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Controls Row (Sort Dropdown, Price Slider & Counter) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs w-full">
        {/* Sort Dropdown */}
        <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
          <span className="font-semibold text-text-muted flex items-center gap-1 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            الترتيب:
          </span>
          <select
            defaultValue="featured"
            className="bg-bg-main border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-secondary focus:outline-none cursor-pointer w-auto"
          >
            <option value="featured">🔥 الأكثر شعبية</option>
            <option value="price-asc">💰 السعر: من الأقل للأعلى</option>
            <option value="price-desc">💎 السعر: من الأعلى للأقل</option>
            <option value="rating">⭐ الأعلى تقييماً</option>
          </select>
        </div>

        {/* Price Slider & Counter */}
        <div className="flex items-center justify-between gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-secondary whitespace-nowrap">
              السعر حتى: <strong className="text-primary font-bold">5,000 ج.م</strong>
            </span>
            <input
              type="range"
              min="1000"
              max="6000"
              defaultValue="5000"
              readOnly
              className="w-24 sm:w-36 accent-primary cursor-default"
            />
          </div>

          <span className="text-[11px] font-bold text-secondary bg-bg-main px-2.5 py-1 rounded-lg border border-gray-200/60 shrink-0">
            2 رحلة
          </span>
        </div>
      </div>
    </section>
  );
}
