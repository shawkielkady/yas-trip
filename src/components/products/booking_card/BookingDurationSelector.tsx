import React from "react";

export default function BookingDurationSelector() {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-secondary flex items-center justify-between">
        <span>1. مدة الرحلة</span>
        <span className="text-[11px] text-text-muted font-normal">اختر البرنامج</span>
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="p-2.5 rounded-xl border text-right border-gray-200 text-gray-700 bg-bg-main">
          <span className="block text-xs font-bold">5 أيام / 4 ليالي</span>
          <span className="block text-[11px] font-bold text-secondary mt-0.5">
            12,500 ج.م
          </span>
        </div>
        <div className="p-2.5 rounded-xl border text-right border-primary bg-primary/5 text-primary ring-2 ring-primary/20 shadow-xs">
          <span className="block text-xs font-bold">7 أيام / 6 ليالي</span>
          <span className="block text-[11px] font-bold text-secondary mt-0.5">
            14,500 ج.م
          </span>
        </div>
        <div className="p-2.5 rounded-xl border text-right border-gray-200 text-gray-700 bg-bg-main">
          <span className="block text-xs font-bold">10 أيام / 9 ليالي</span>
          <span className="block text-[11px] font-bold text-secondary mt-0.5">
            18,500 ج.م
          </span>
        </div>
      </div>
    </div>
  );
}
