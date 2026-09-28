import React from "react";
import { Building2, Star, Images, SlidersHorizontal } from "lucide-react";

export default function BookingHotelSelection() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold text-secondary flex items-center gap-1.5">
          <Building2 className="w-4 h-4 text-primary" />
          <span>2. الفندق والإقامة</span>
        </label>
      </div>

      {/* Selected Hotel Card */}
      <div className="p-3.5 rounded-2xl border border-primary/40 bg-primary/5 space-y-2.5 shadow-xs">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-bold text-secondary">
                فندق شتايجنبرجر ألكازار
              </h4>
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </span>
            </div>
            <p className="text-[11px] text-text-muted mt-1 line-clamp-1">
              إقامة شاملة كلياً (Soft All Inclusive) - صف أول على البحر مباشرة
            </p>
          </div>

          <div className="text-left shrink-0">
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
              السعر الأساسي
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1 border-t border-primary/20">
          <button
            type="button"
            className="py-1.5 px-3 rounded-xl bg-white border border-primary/30 text-primary text-xs font-bold flex items-center gap-1.5 shadow-2xs"
          >
            <Images className="w-3.5 h-3.5" />
            <span>صور الفندق (8)</span>
          </button>

          <button
            type="button"
            className="py-1.5 px-3 rounded-xl bg-secondary text-white text-xs font-bold flex items-center gap-1.5 ms-auto shadow-2xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>تغيير الفندق</span>
          </button>
        </div>
      </div>
    </div>
  );
}
