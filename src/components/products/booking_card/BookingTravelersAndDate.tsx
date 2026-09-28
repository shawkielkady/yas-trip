import React from "react";
import { Users } from "lucide-react";

export default function BookingTravelersAndDate() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-gray-100">
      <div>
        <label className="block text-[11px] font-bold text-secondary mb-1">
          موعد السفر
        </label>
        <select
          defaultValue="20 أكتوبر 2026"
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
            className="w-7 h-7 rounded-lg bg-white shadow-xs font-bold text-secondary"
          >
            -
          </button>

          <span className="text-xs font-bold text-secondary flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-primary" />
            2 أفراد
          </span>

          <button
            type="button"
            className="w-7 h-7 rounded-lg bg-white shadow-xs font-bold text-secondary"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
