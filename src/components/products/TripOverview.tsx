"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trip, HotelOption } from "@public/data/tripsData";
import HotelGalleryModal from "@/components/products/HotelGalleryModal";
import {
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Building2,
  PlusCircle,
  Images,
} from "lucide-react";

interface TripOverviewProps {
  trip: Trip;
}

export default function TripOverview({ trip }: TripOverviewProps) {
  const [galleryHotel, setGalleryHotel] = useState<HotelOption | null>(null);

  const hotelsList = trip.hotelOptions || [];
  const topHotels = hotelsList.slice(0, 3);
  const remainingHotelsCount = Math.max(0, hotelsList.length - 3);

  return (
    <>
      <div className="space-y-8">
        {/* Main Image Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-md">
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
              {trip.category}
            </span>
            <span className="bg-secondary/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              📍 {trip.location}
            </span>
          </div>
        </div>

        {/* Title & Metadata */}
        <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary-light" />
              <span>منظم الرحلة: <strong className="text-secondary font-bold">{trip.organizer}</strong></span>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-amber-900">{trip.rating}</span>
              <span className="text-amber-700">({trip.reviewsCount} تقييم)</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-secondary leading-snug">
            {trip.title}
          </h1>

          {/* Quick stats pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-bg-main p-3.5 rounded-2xl border border-gray-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <span className="block text-[11px] text-text-muted">مدة الرحلة</span>
                <strong className="text-xs sm:text-sm font-bold text-secondary">{trip.duration}</strong>
              </div>
            </div>

            <div className="bg-bg-main p-3.5 rounded-2xl border border-gray-100 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-secondary-light" />
              <div>
                <span className="block text-[11px] text-text-muted">الموعد القادم</span>
                <strong className="text-xs sm:text-sm font-bold text-secondary">{trip.startDate || "متاح أسبوعياً"}</strong>
              </div>
            </div>

            <div className="bg-bg-main p-3.5 rounded-2xl border border-gray-100 flex items-center gap-3 col-span-2 sm:col-span-1">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="block text-[11px] text-text-muted">الوجهة</span>
                <strong className="text-xs sm:text-sm font-bold text-secondary">{trip.location}</strong>
              </div>
            </div>
          </div>

          {/* Overview / Description */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-bold text-secondary">تفاصيل الرحلة</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              استعد لمغامرة استثنائية تنقلك إلى أجمل المعالم الطبيعية في {trip.location}. تم إعداد هذه الرحلة بواسطة {trip.organizer} لتوفير أفضل تجربة تجمع بين الراحة والاستكشاف والأنشطة المشوقة مع مرافقة مرشدين محترفين.
            </p>
          </div>

          {/* HOTEL ACCOMMODATIONS PREVIEW */}
          {hotelsList.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-secondary">خيارات الفنادق والمستويات المتاحة</h2>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                  متاح {hotelsList.length} فندق
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {topHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-bg-main/70 p-4 rounded-2xl border border-gray-200/70 space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="flex text-amber-400">
                          {Array.from({ length: hotel.stars }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </span>
                        {hotel.badge && (
                          <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md">
                            {hotel.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-xs text-secondary">{hotel.name}</h3>
                      <p className="text-[11px] text-text-muted leading-relaxed line-clamp-2">
                        {hotel.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-secondary">
                        {hotel.priceDelta === 0 ? "السعر الأساسي" : `+${hotel.priceDelta} ج.م`}
                      </span>

                      {hotel.galleryImages && hotel.galleryImages.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setGalleryHotel(hotel)}
                          className="text-[11px] text-primary hover:text-primary-hover font-bold flex items-center gap-1 bg-white hover:bg-gray-100 border border-primary/20 px-2 py-1 rounded-lg transition-colors shadow-2xs"
                        >
                          <Images className="w-3 h-3" />
                          <span>الصور ({hotel.galleryImages.length})</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {remainingHotelsCount > 0 && (
                <div className="text-center pt-1">
                  <span className="inline-block text-xs font-bold text-text-muted bg-gray-100 px-3.5 py-1.5 rounded-xl">
                    + بالإضافة إلى {remainingHotelsCount} فنادق أخرى يمكنك الاختيار والمفاضلة بينها عند الحجز 🏨
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ADDONS & EXCURSIONS PREVIEW */}
          {trip.addons && trip.addons.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-secondary">الإضافات والأنشطة الاختيارية</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trip.addons.map((addon) => (
                  <div
                    key={addon.id}
                    className="bg-emerald-50/50 p-3.5 rounded-2xl border border-emerald-100 flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-xs font-bold text-secondary block">{addon.title}</span>
                      {addon.description && (
                        <span className="text-[10px] text-text-muted block mt-0.5">
                          {addon.description}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg shrink-0">
                      +{addon.price} ج.م {addon.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What's Included */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="text-lg font-bold text-secondary">ما تشمله التكلفة الأساسية</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-secondary">
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>انتقالات بأتوبيسات حديثة مكيفة</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>الإقامة والتخييم وتجهيزات الأمان</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>وجبات ومشروبات بدوية دافئة</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-900 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>مرشد سياحي وقائد أفواج متمرس</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN HOTEL PHOTO GALLERY SLIDER MODAL */}
      {galleryHotel && galleryHotel.galleryImages && (
        <HotelGalleryModal
          isOpen={Boolean(galleryHotel)}
          onClose={() => setGalleryHotel(null)}
          hotelName={galleryHotel.name}
          hotelStars={galleryHotel.stars}
          images={galleryHotel.galleryImages}
        />
      )}
    </>
  );
}
