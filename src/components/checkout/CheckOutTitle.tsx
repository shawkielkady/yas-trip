import React from "react";

function CheckOutTitle() {
  return (
    <div className="p-6 rounded-xl bg-white space-y-4">
      <span className="text-primary"> طلب سريع خلال دقيقتين </span>
      <h1 className="font-bold text-4xl mt-2 "> خطوة واحدة باقية! </h1>
      <p className="mt-2 text-gray-400 text-lg w-5/5 ">
        {" "}
        سيب لنا وسيلة تواصل، ومنسق الرحلة هيكلمك خلال يوم عمل واحد لتأكيد الحجز
        والإجابة عن أي استفسارات.{" "}
      </p>
    </div>
  );
}

export default CheckOutTitle;
