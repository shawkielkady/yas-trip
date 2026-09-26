import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";

interface ProductsDestinationsFilterProps {
  currentSlug?: string;
}

const destinations = [
  { name: "📍 كل الوجهات", slug: "all" },
  { name: "دهب", slug: "dahab" },
  { name: "سيوة", slug: "siwa" },
  { name: "الفيوم", slug: "fayoum" },
  { name: "سانت كاترين", slug: "catherine" },
  { name: "نويبع", slug: "nwebea" },
];

export default function ProductsDestinationsFilter({
  currentSlug = "all",
}: ProductsDestinationsFilterProps) {
  return (
    <section className="mb-6 w-full max-w-full overflow-hidden">
      <div className="flex items-center gap-2 mb-2.5">
        <Compass className="w-4 h-4 text-primary shrink-0" />
        <h2 className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-wider">
          الوجهات الأكثر شعبية
        </h2>
      </div>

      {/* Safe horizontal scroll container inside parent boundaries */}
      <div className="w-full max-w-full overflow-x-auto overflow-y-hidden pb-2 pt-1 scrollbar-none touch-pan-x">
        <div className="flex items-center gap-2 w-max min-w-full">
          {destinations.map((dest) => {
            const isSelected = currentSlug === dest.slug;
            return (
              <Link
                key={dest.slug}
                href={`/products/${dest.slug}`}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? "bg-secondary text-white border-secondary shadow-sm"
                    : "bg-surface text-text-muted hover:text-secondary hover:bg-gray-100 border-gray-200/80"
                }`}
              >
                {dest.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
