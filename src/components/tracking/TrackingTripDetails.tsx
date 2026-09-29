import React from "react";
import OrderDetails from "./OrderDetails";
import ContactInfoCard from "./ContactInfoCard";

function TrackingTripDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <OrderDetails />
      </div>
      <div className="lg:col-span-1">
        <ContactInfoCard />
      </div>
    </div>
  );
}

export default TrackingTripDetails;

