import React from "react";
import TripCard from "@public/cards/TripCard";
import { sampleTrips } from "@public/data/tripsData";

export default function ProductsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {sampleTrips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </section>
  );
}
