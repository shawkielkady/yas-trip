"use client";

import React, { useState, useMemo } from "react";
import { Trip, HotelOption, DurationOption, TripAddon } from "@public/data/tripsData";
import HotelGalleryModal from "@/components/products/HotelGalleryModal";
import {
  PhoneCall,
  Building2,
  Sparkles,
  CheckCircle2,
  PlusCircle,
  Users,
  Star,
  Check,
  Search,
  ChevronDown,
  X,
  SlidersHorizontal,
  Images,
} from "lucide-react";

interface TripBookingCardProps {
  trip: Trip;
}

export default function TripBookingCard({ trip }: TripBookingCardProps) {
  // 1. Duration State
  const defaultDuration = trip.durationOptions?.[1] || trip.durationOptions?.[0];
  const [selectedDuration, setSelectedDuration] = useState<DurationOption | undefined>(
    defaultDuration
  );

  // 2. Hotel Option State
  const hotelsList = trip.hotelOptions || [];
  const [selectedHotel, setSelectedHotel] = useState<HotelOption | undefined>(
    hotelsList[0]
  );

  // Modal / Drawer state for selecting from 20+ hotels
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);
  const [hotelSearch, setHotelSearch] = useState("");
  const [starFilter, setStarFilter] = useState<number | "all">("all");

  // Gallery Modal state
  const [galleryHotel, setGalleryHotel] = useState<HotelOption | null>(null);

  // Filtered hotels inside modal
  const filteredHotels = useMemo(() => {
    return hotelsList.filter((h) => {
      const matchesSearch =
        hotelSearch.trim() === "" ||
        h.name.toLowerCase().includes(hotelSearch.toLowerCase()) ||
        h.description.toLowerCase().includes(hotelSearch.toLowerCase());

      const matchesStar = starFilter === "all" || h.stars === starFilter;

      return matchesSearch && matchesStar;
    });
  }, [hotelsList, hotelSearch, starFilter]);

  // 3. Add-ons State
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  // 4. Travelers Count State
  const [travelersCount, setTravelersCount] = useState<number>(1);

  // 5. Selected Date State
  const [selectedDate, setSelectedDate] = useState<string>(
    trip.startDate || "20 أكتوبر 2026"
  );

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Dynamic Price Calculation
  const basePricePerPerson = selectedDuration ? selectedDuration.basePrice : trip.price;
  const hotelDeltaPerPerson = selectedHotel ? selectedHotel.priceDelta : 0;
  const pricePerPerson = basePricePerPerson + hotelDeltaPerPerson;

  const addonsTotal = useMemo(() => {
    if (!trip.addons) return 0;
    return trip.addons
      .filter((addon) => selectedAddonIds.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);
  }, [selectedAddonIds, trip.addons]);

  const totalPrice = pricePerPerson * travelersCount + addonsTotal;

  return (
    <>
      <div className="bg-surface rounded-3xl p-5 sm:p-6 border border-gray-200/90 shadow-xl sticky top-24 space-y-6">
        {/* Dynamic Price Top Header */}
        <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs text-text-muted font-medium block mb-1">
              سعر الفرد يبدأ من
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-primary">
                {pricePerPerson.toLocaleString("ar-EG")} <span className="text-sm font-bold">ج.م</span>
              </span>
              {trip.originalPrice && (
                <span className="text-sm text-gray-400 line-through font-normal">
                  {trip.originalPrice.toLocaleString("ar-EG")}
                </span>
              )}
            </div>
          </div>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> متاح الآن
          </span>
        </div>

        {/* STEP 1: DURATION SELECTOR */}
        {trip.durationOptions && trip.durationOptions.length > 0 && (
          <div className="space-y-2">
            <label className="block text-xs font-bold text-secondary flex items-center justify-between">
              <span>1. مدة الرحلة</span>
              <span className="text-[11px] text-text-muted font-normal">اختر البرنامج</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {trip.durationOptions.map((dur) => {
                const isSelected = selectedDuration?.id === dur.id;
                return (
                  <button
                    key={dur.id}
                    type="button"
                    onClick={() => setSelectedDuration(dur)}
                    className={`p-2.5 rounded-xl border text-right transition-all relative ${
                      isSelected
                        ? "border-primary bg-primary/5 text-primary ring-2 ring-primary/20 shadow-xs"
                        : "border-gray-200 hover:border-gray-300 text-gray-700 bg-bg-main"
                    }`}
                  >
                    <span className="block text-xs font-bold">{dur.title}</span>
                    <span className="block text-[11px] font-bold text-secondary mt-0.5">
                      {dur.basePrice.toLocaleString("ar-EG")} ج.م
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: HOTEL SELECTION */}
        {hotelsList.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-secondary flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-primary" />
                <span>2. الفندق والإقامة ({hotelsList.length} فندق متاح)</span>
              </label>
            </div>

            {/* Compact Active Selected Hotel Card */}
            <div className="p-3.5 rounded-2xl border border-primary/40 bg-primary/5 space-y-2.5 shadow-xs">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-secondary">
                      {selectedHotel?.name}
                    </h4>
                    <span className="flex text-amber-400">
                      {Array.from({ length: selectedHotel?.stars || 3 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-muted mt-1 line-clamp-1">
                    {selectedHotel?.description}
                  </p>
                </div>

                <div className="text-left shrink-0">
                  {selectedHotel?.priceDelta === 0 ? (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      السعر الأساسي
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold text-primary bg-white px-2 py-0.5 rounded-md border border-primary/30">
                      +{selectedHotel?.priceDelta.toLocaleString("ar-EG")} ج.م /فرد
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: Photos Slider + Change Hotel */}
              <div className="flex items-center gap-2 pt-1 border-t border-primary/20">
                {selectedHotel?.galleryImages && selectedHotel.galleryImages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setGalleryHotel(selectedHotel)}
                    className="py-1.5 px-3 rounded-xl bg-white hover:bg-gray-100 border border-primary/30 text-primary text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Images className="w-3.5 h-3.5" />
                    <span>صور الفندق ({selectedHotel.galleryImages.length})</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsHotelModalOpen(true)}
                  className="py-1.5 px-3 rounded-xl bg-secondary hover:bg-secondary-light text-white text-xs font-bold flex items-center gap-1.5 transition-colors ms-auto shadow-2xs"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>تغيير الفندق</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: ADDONS & EXTRAS CHECKLIST */}
        {trip.addons && trip.addons.length > 0 && (
          <div className="space-y-2.5 pt-2 border-t border-gray-100">
            <label className="block text-xs font-bold text-secondary flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <PlusCircle className="w-4 h-4 text-primary" />
                3. الإضافات والأنشطة الاختيارية
              </span>
              <span className="text-[10px] text-text-muted">حسب رغبتك</span>
            </label>

            <div className="space-y-2">
              {trip.addons.map((addon: TripAddon) => {
                const isChecked = selectedAddonIds.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                      isChecked
                        ? "border-emerald-500 bg-emerald-50/60"
                        : "border-gray-200 hover:border-gray-300 bg-bg-main"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addon.id)}
                        className="w-4 h-4 accent-primary rounded cursor-pointer"
                      />
                      <div>
                        <span className="text-xs font-semibold text-secondary block">
                          {addon.title}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
                      +{addon.price.toLocaleString("ar-EG")} ج.م {addon.unit}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: DATE & TRAVELERS COUNT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100">
          <div>
            <label className="block text-[11px] font-bold text-secondary mb-1">
              موعد السفر
            </label>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full bg-bg-main border border-gray-200 rounded-xl px-2.5 py-2 text-xs font-semibold text-secondary focus:outline-none"
            >
              <option value="20 أكتوبر 2026">20 أكتوبر 2026</option>
              <option value="01 نوفمبر 2026">01 نوفمبر 2026</option>
              <option value="15 نوفمبر 2026">15 نوفمبر 2026</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-secondary mb-1">
              عدد المسافرين
            </label>
            <div className="flex items-center justify-between bg-bg-main border border-gray-200 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setTravelersCount((prev) => Math.max(1, prev - 1))}
                className="w-7 h-7 rounded-lg bg-white shadow-xs font-bold text-secondary hover:bg-gray-100"
              >
                -
              </button>

              <span className="text-xs font-bold text-secondary flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-primary" />
                {travelersCount} {travelersCount === 1 ? "فرد" : "أفراد"}
              </span>

              <button
                type="button"
                onClick={() => setTravelersCount((prev) => prev + 1)}
                className="w-7 h-7 rounded-lg bg-white shadow-xs font-bold text-secondary hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* PRICE SUMMARY BREAKDOWN BOX */}
        <div className="bg-bg-main p-4 rounded-2xl border border-gray-200/80 space-y-2 text-xs">
          <div className="flex justify-between text-text-muted">
            <span>الإقامة ({selectedHotel?.name}) × {travelersCount}:</span>
            <span className="font-bold text-secondary">
              {(pricePerPerson * travelersCount).toLocaleString("ar-EG")} ج.م
            </span>
          </div>

          {addonsTotal > 0 && (
            <div className="flex justify-between text-emerald-800">
              <span>إجمالي الإضافات:</span>
              <span className="font-bold">+{addonsTotal.toLocaleString("ar-EG")} ج.م</span>
            </div>
          )}

          <div className="flex justify-between text-sm font-black text-secondary pt-2 border-t border-gray-200">
            <span>الإجمالي النهائي:</span>
            <span className="text-primary text-base">
              {totalPrice.toLocaleString("ar-EG")} ج.م
            </span>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="space-y-2">
          <button
            type="button"
            className="w-full py-3.5 rounded-2xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>تأكيد وحجز الرحلة ({totalPrice.toLocaleString("ar-EG")} ج.م)</span>
          </button>

          <button
            type="button"
            className="w-full py-2.5 rounded-2xl bg-bg-main hover:bg-gray-200 text-secondary text-xs font-bold transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-primary" />
            <span>تحدث مع مسئول الرحلة</span>
          </button>
        </div>
      </div>

      {/* HOTEL SELECTION MODAL */}
      {isHotelModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-surface w-full max-w-lg rounded-3xl p-5 sm:p-6 shadow-2xl border border-gray-200 space-y-4 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-secondary flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  اختر الفندق المناسب ({hotelsList.length} فندق متاح)
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  تختلف الأسعار حسب تقييم ونوع الفندق المختار
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsHotelModalOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative">
              <Search className="absolute right-3.5 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={hotelSearch}
                onChange={(e) => setHotelSearch(e.target.value)}
                placeholder="ابحث باسم الفندق..."
                className="w-full py-2.5 pr-10 pl-3 bg-bg-main border border-gray-200 rounded-xl text-xs text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Star Rating Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setStarFilter("all")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  starFilter === "all"
                    ? "bg-secondary text-white"
                    : "bg-bg-main text-text-muted hover:bg-gray-200"
                }`}
              >
                الكل ({hotelsList.length})
              </button>
              {[3, 4, 5].map((star) => {
                const count = hotelsList.filter((h) => h.stars === star).length;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setStarFilter(star)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-colors ${
                      starFilter === star
                        ? "bg-secondary text-white"
                        : "bg-bg-main text-text-muted hover:bg-gray-200"
                    }`}
                  >
                    <span>{star} نجوم</span>
                    <span className="text-[10px] opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Hotels List */}
            <div className="overflow-y-auto max-h-72 space-y-2.5 pr-1 scrollbar-thin flex-1">
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => {
                  const isSelected = selectedHotel?.id === hotel.id;
                  return (
                    <div
                      key={hotel.id}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-xs ring-2 ring-primary/20"
                          : "border-gray-200 bg-surface hover:bg-bg-main/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className="flex items-start gap-2.5 flex-1 cursor-pointer"
                          onClick={() => {
                            setSelectedHotel(hotel);
                            setIsHotelModalOpen(false);
                          }}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "border-primary bg-primary text-white"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-xs font-bold text-secondary">
                                {hotel.name}
                              </h4>
                              <span className="flex text-amber-400">
                                {Array.from({ length: hotel.stars }).map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                                ))}
                              </span>
                            </div>
                            <p className="text-[11px] text-text-muted mt-1 leading-snug">
                              {hotel.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          {hotel.priceDelta === 0 ? (
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                              السعر الأساسي
                            </span>
                          ) : (
                            <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 whitespace-nowrap">
                              +{hotel.priceDelta.toLocaleString("ar-EG")} ج.م /فرد
                            </span>
                          )}

                          {hotel.galleryImages && hotel.galleryImages.length > 0 && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setGalleryHotel(hotel);
                              }}
                              className="text-[11px] text-primary hover:text-primary-hover font-bold flex items-center gap-1 bg-primary/5 hover:bg-primary/10 px-2 py-1 rounded-md transition-colors"
                            >
                              <Images className="w-3 h-3" />
                              <span>الصور ({hotel.galleryImages.length})</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-8 text-center text-text-muted text-xs">
                  لا توجد فنادق تطابق كلمة البحث
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => setIsHotelModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-secondary text-white text-xs font-bold hover:bg-secondary-light transition-colors"
              >
                تأكيد اختيار الفندق
              </button>
            </div>
          </div>
        </div>
      )}

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
