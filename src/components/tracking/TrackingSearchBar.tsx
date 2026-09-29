"use client";
import React from "react";
import { Search } from "lucide-react";

export default function TrackingSearchBar() {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 px-2">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white rounded-2xl p-2 md:p-2.5 shadow-sm border border-gray-100 flex items-center gap-2 focus-within:ring-2 focus-within:ring-primary/30 transition-all"
      >
        <div className="relative flex-1 flex items-center pr-3">
          <Search className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
          <input
            type="text"
            placeholder="ابحث برقم طلب الحجز (مثال: #104073001556339)..."
            className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base py-2 font-medium"
            readOnly
          />
        </div>
        <button
          type="button"
          className="bg-[#0F283D] hover:bg-[#1D5B8C] text-white font-bold px-6 py-2.5 rounded-xl text-sm md:text-base flex items-center gap-2 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-4 h-4" />
          <span>بحث</span>
        </button>
      </form>
    </div>
  );
}
