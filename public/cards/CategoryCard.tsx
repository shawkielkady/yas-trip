import Image from "next/image";
import React from "react";
import siwa from "../assets/images/areas/siwa.png";
// interface CategoryCard{
//    title: string;
//    image: string;
//    description: string;
// }
function CategoryCard() {
  return (
    <div className="rounded-2xl relative h-96  bg-white shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
      {/* Container Image */}
      <Image
        src={siwa}
        alt="siwa"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8 text-white space-y-2 text-right">
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-md">
          سيوة
        </h3>
        <p className="text-sm sm:text-base text-gray-200 font-normal line-clamp-2 leading-relaxed">
          مخيمات، كانيون، وبحر ملوش نهاية وصباحيات رايقة.
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
