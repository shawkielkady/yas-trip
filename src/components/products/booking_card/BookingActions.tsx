import React from "react";
import { Sparkles, PhoneCall } from "lucide-react";
import Link from "next/link";

interface BookingActionsProps {
  totalPrice?: string;
}

export default function BookingActions({
  totalPrice = "34,400",
}: BookingActionsProps) {
  return (
    <div className="space-y-2">
      <Link
        href={"/checkout"}
        type="button"
        className="w-full py-3.5 rounded-2xl bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        <span>تأكيد وحجز الرحلة ({totalPrice} ج.م)</span>
      </Link>

      <button
        type="button"
        className="w-full py-2.5 rounded-2xl bg-bg-main hover:bg-gray-200 text-secondary text-xs font-bold transition-colors flex items-center justify-center gap-2"
      >
        <PhoneCall className="w-4 h-4 text-primary" />
        <span>تحدث مع مسئول الرحلة</span>
      </button>
    </div>
  );
}
