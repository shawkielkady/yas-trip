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

export default function ProductsDestinationsFilter({ currentSlug = "all" }: ProductsDestinationsFilterProps) {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Compass className="w-4 h-4 text-primary" />
        <h2 className="text-sm font-bold text-secondary uppercase tracking-wider">
          الوجهات الأكثر شعبية
        </h2>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {destinations.map((dest) => {
          const isSelected = currentSlug === dest.slug;
          return (
            <Link
              key={dest.slug}
              href={`/products/${dest.slug}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                isSelected
                  ? "bg-secondary text-white shadow-md scale-[1.02]"
                  : "bg-surface text-text-muted hover:text-secondary hover:bg-gray-100 border border-gray-200/70"
              }`}
            >
              {dest.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
