import React from "react";
import Link from "next/link";
import { sampleTrips } from "@public/data/tripsData";
import TripCard from "@public/cards/TripCard";
import TripOverview from "@/components/products/TripOverview";
import TripBookingCard from "@/components/products/TripBookingCard";
import { ArrowRight } from "lucide-react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug } = await params;
  const trip = sampleTrips[0];

  return (
    <main className="min-h-screen py-8 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href={`/products/${slug || "all"}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-text-muted hover:text-primary transition-colors bg-surface px-4 py-2 rounded-xl border border-gray-200/80 shadow-xs"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لجميع الرحلات</span>
        </Link>
      </div>

      {/* Main Grid: Left Details & Right Booking Box */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Hero Image & Trip Overview */}
        <div className="lg:col-span-2">
          <TripOverview trip={trip} />
        </div>

        {/* Right Sticky Booking Box */}
        <div>
          <TripBookingCard trip={trip} />
        </div>
      </div>

      {/* Related Trips Static UI */}
      <section className="pt-8 border-t border-gray-200 space-y-6">
        <h2 className="text-2xl font-black text-secondary">رحلات قد تعجبك أيضاً</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TripCard trip={sampleTrips[1]} />
        </div>
      </section>
    </main>
  );
}
