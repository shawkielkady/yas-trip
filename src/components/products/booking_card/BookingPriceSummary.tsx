import React from "react";

interface BookingPriceSummaryProps {
  hotelName?: string;
  travelersCount?: number;
  accommodationPrice?: string;
  addonsTotal?: string;
  totalPrice?: string;
}

export default function BookingPriceSummary({
  hotelName = "فندق شتايجنبرجر",
  travelersCount = 2,
  accommodationPrice = "29,000",
  addonsTotal = "5,400",
  totalPrice = "34,400",
}: BookingPriceSummaryProps) {
  return (
    <div className="bg-bg-main p-4 rounded-2xl border border-gray-200/80 space-y-2 text-xs">
      <div className="flex justify-between text-text-muted">
        <span>الإقامة ({hotelName}) × {travelersCount}:</span>
        <span className="font-bold text-secondary">{accommodationPrice} ج.م</span>
      </div>

      <div className="flex justify-between text-emerald-800">
        <span>إجمالي الإضافات:</span>
        <span className="font-bold">+{addonsTotal} ج.م</span>
      </div>

      <div className="flex justify-between text-sm font-black text-secondary pt-2 border-t border-gray-200">
        <span>الإجمالي النهائي:</span>
        <span className="text-primary text-base">{totalPrice} ج.م</span>
      </div>
    </div>
  );
}
