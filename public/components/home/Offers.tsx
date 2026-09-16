import React from "react";
import TripCard from "../../cards/TripCard";

function Offers() {
  return (
    <section className="py-8 ">
      <div className="app-container">
        <div className="mb-6 space-y-2">
          <h1 className="text-secondary font-black  text-4xl  ">عروض اليوم</h1>
          <p className="text-text-muted font-medium text-lg  ">
            حابب تصحى فين المرة الجاية؟ بحيرات ملح، قمم جبال، ولا هدوء الواحات.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </section>
  );
}

export default Offers;
