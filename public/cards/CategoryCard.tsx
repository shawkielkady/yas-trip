import Image, { StaticImageData } from "next/image";
import React from "react";
import siwa from "../assets/images/areas/siwa.png";
import Link from "next/link";

export interface CategoryCardProps {
  title?: string;
  image?: StaticImageData | string;
  description?: string;
  href?: string;
}

function CategoryCard({
  title = "سيوة",
  image = siwa,
  description = "مخيمات، كانيون، وبحر ملوش نهاية وصباحيات رايقة.",
  href = "/products",
}: CategoryCardProps) {
  return (
    <Link href={href} className="block h-full w-full">
      <div className="rounded-2xl relative h-full min-h-[220px] bg-white shadow-sm overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 group">
        {/* Container Image */}
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
        <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8 text-white space-y-2 text-right z-10">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-md group-hover:text-accent-yellow transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-200 font-normal line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
