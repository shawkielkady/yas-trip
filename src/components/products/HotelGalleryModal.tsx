"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ChevronLeft, ChevronRight, Star, Images } from "lucide-react";

interface HotelGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
  hotelStars: number;
  images: (StaticImageData | string)[];
}

export default function HotelGalleryModal({
  isOpen,
  onClose,
  hotelName,
  hotelStars,
  images,
}: HotelGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-in fade-in duration-200">
      {/* 1. Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 max-w-6xl w-full mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
            <Images className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              {hotelName}
              <span className="flex text-amber-400">
                {Array.from({ length: hotelStars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </span>
            </h3>
            <p className="text-xs text-gray-400">معاينة صور الفندق والإقامة</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
            صورة {currentIndex + 1} من {images.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق المعرض"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. Main Fullscreen Slider Center Stage */}
      <div className="relative w-full max-w-5xl h-[55vh] sm:h-[65vh] mx-auto my-auto flex items-center justify-center">
        {/* Next / Prev Navigation Buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="الصورة السابقة"
          className="absolute right-3 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl border border-white/10 group"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>

        {/* Big Main Image Container */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          <Image
            src={images[currentIndex]}
            alt={`${hotelName} - صورة ${currentIndex + 1}`}
            fill
            priority
            className="object-cover transition-opacity duration-300"
          />
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="الصورة التالية"
          className="absolute left-3 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl border border-white/10 group"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* 3. Bottom Thumbnail Strip Navigation Bar */}
      <div className="max-w-4xl w-full mx-auto pt-3 border-t border-white/10">
        <div className="flex items-center justify-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                  isActive
                    ? "border-primary scale-105 shadow-lg opacity-100 ring-2 ring-primary/40"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`مصغرة ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
