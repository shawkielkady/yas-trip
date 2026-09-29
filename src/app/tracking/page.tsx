import Image from "next/image";
import React from "react";
import trackingImg from "../../../public/assets/images/tracking.png";
import ConfirmSteps from "@/components/tracking/ConfirmSteps";
import TrackingTripDetails from "@/components/tracking/TrackingTripDetails";
import TrackingSearchBar from "@/components/tracking/TrackingSearchBar";

function TrackingPage() {
  return (
    <main className="p-6 space-y-6">
      <section>
        <div className="flex flex-col justify-center items-center">
          <Image src={trackingImg} alt="tracking" width={150} height={150} />
          <h1 className="font-bold text-4xl md:text-6xl text-center mt-2 mb-2">
            خلاص قربت توصل! ✈️
          </h1>
          <p className="text-center text-gray-600 text-lg">
            استلمنا طلب حجزك لرحلة
          </p>
        </div>
        <TrackingSearchBar />
      </section>
      <ConfirmSteps />
      <TrackingTripDetails />
    </main>
  );
}

export default TrackingPage;

