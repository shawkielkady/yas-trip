import React from "react";
import { CheckCircle2 } from "lucide-react";

interface BookingPriceHeaderProps {
  price?: string;
  originalPrice?: string;
}

export default function BookingPriceHeader({
  price = "14,500",
  originalPrice = "16,500",
}: BookingPriceHeaderProps) {
  return (
    <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
      <div>
        <span className="text-xs text-text-muted font-medium block mb-1">
          سعر الفرد يبدأ من
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-primary">
            {price} <span className="text-sm font-bold">ج.م</span>
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through font-normal">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
        <CheckCircle2 className="w-3.5 h-3.5" /> متاح الآن
      </span>
    </div>
  );
}
