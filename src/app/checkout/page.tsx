import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckOutTitle from "@/components/checkout/CheckOutTitle";
import ContactCompany from "@/components/checkout/ContactCompany";
import FAQs from "@/components/checkout/faqs";
import TotalSummary from "@/components/checkout/TotalSummary";
import TripSummary from "@/components/checkout/TrpSummary";
import React from "react";

function CheckoutPage() {
  return (
    <main className="min-h-screen pb-16 pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CheckOutTitle />
          <CheckoutForm />
          <FAQs />
        </div>

        <div className="lg:col-span-1">
          <TripSummary />
          <TotalSummary />
          <ContactCompany />
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;
