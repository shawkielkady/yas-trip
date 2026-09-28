import React from "react";
import { Trip } from "@public/data/tripsData";
import {
  BookingPriceHeader,
  BookingDurationSelector,
  BookingHotelSelection,
  BookingAddonsChecklist,
  BookingTravelersAndDate,
  BookingPriceSummary,
  BookingActions,
} from "./booking_card";

interface TripBookingCardProps {
  trip?: Trip;
}

export default function TripBookingCard({ trip }: TripBookingCardProps) {
  const price = trip?.price ? trip.price.toLocaleString("ar-EG") : "14,500";
  const originalPrice = trip?.originalPrice
    ? trip.originalPrice.toLocaleString("ar-EG")
    : "16,500";

  return (
    <div className="bg-surface rounded-3xl p-5 sm:p-6 border border-gray-200/90 shadow-xl sticky top-24 space-y-6">
      {/* 1. Price Header */}
      <BookingPriceHeader price={price} originalPrice={originalPrice} />

      {/* 2. Duration Selector */}
      <BookingDurationSelector />

      {/* 3. Hotel Selection */}
      <BookingHotelSelection />

      {/* 4. Addons Checklist */}
      <BookingAddonsChecklist />

      {/* 5. Travelers & Date */}
      <BookingTravelersAndDate />

      {/* 6. Price Summary Box */}
      <BookingPriceSummary />

      {/* 7. CTA Action Buttons */}
      <BookingActions />
    </div>
  );
}
