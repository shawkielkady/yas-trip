import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapPin, Clock, Star, Heart, ArrowLeft, ShieldCheck } from "lucide-react";
import { Trip, sampleTrips } from "../data/tripsData";

interface TripCardProps {
  trip?: Trip;
}

function TripCard({ trip }: TripCardProps) {
  const currentTrip = trip || sampleTrips[0];

  const {
    slug,
    locationSlug,
    title,
    location,
    organizer,
    image,
    price,
    originalPrice,
    rating,
    reviewsCount,
    duration,
    category,
    tags,
    isFeatured,
    startDate,
  } = currentTrip;

  const detailHref = `/products/${locationSlug || "dahab"}/${slug || "trip-1"}`;

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* 1. Image & Badges Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Link href={detailHref} className="block w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 z-10">
          {isFeatured && (
            <span className="bg-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md">
              مميزة 🔥
            </span>
          )}
          <span className="bg-secondary/85 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Favorite Icon (Static UI) */}
        <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-700 shadow-sm">
          <Heart className="w-4 h-4 text-gray-400" />
        </div>

        {/* Start Date & Duration */}
        <div className="absolute bottom-2.5 right-3 left-3 flex justify-between items-center text-white text-xs z-10 pointer-events-none">
          {startDate && (
            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg font-medium text-[11px]">
              📅 {startDate}
            </span>
          )}
          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg font-medium text-[11px] flex items-center gap-1 ms-auto">
            <Clock className="w-3 h-3 text-accent-yellow" />
            {duration}
          </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="flex flex-col flex-1 p-5 justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Location & Organizer */}
          <div className="flex items-center justify-between text-xs text-text-muted">
            <div className="flex items-center gap-1 font-semibold text-primary">
              <MapPin className="w-3.5 h-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary-light" />
              <span>بواسطة <strong className="text-secondary font-medium">{organizer}</strong></span>
            </div>
          </div>

          {/* Title */}
          <Link href={detailHref} className="block">
            <h3 className="font-bold text-base sm:text-lg text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {title}
            </h3>
          </Link>

          {/* Rating & Tags */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-amber-900">{rating}</span>
              <span className="text-[10px] text-amber-700/80">({reviewsCount})</span>
            </div>

            {tags && tags.length > 0 && (
              <span className="text-[11px] bg-bg-main text-text-muted px-2 py-0.5 rounded-md border border-gray-100">
                {tags[0]}
              </span>
            )}
          </div>
        </div>

        {/* 3. Footer Price & CTA Button */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="block text-[10px] text-text-muted font-medium">السفر من</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-primary">
                {price.toLocaleString("ar-EG")} <span className="text-xs font-bold">ج.م</span>
              </span>
              {originalPrice && (
                <span className="text-xs text-gray-400 line-through font-normal">
                  {originalPrice.toLocaleString("ar-EG")}
                </span>
              )}
            </div>
          </div>

          <Link
            href={detailHref}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-all duration-200"
          >
            <span>احجز الآن</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
