import React from "react";

function TotalSummary() {
  return (
    <div className="p-6 rounded-xl bg-white space-y-4 sticky top-4">
      <h2 className="font-bold text-2xl text-primary"> ملخص الحساب </h2>
      <div className="p-4 bg-[#EEF4FF] rounded-lg space-y-4 ">
        <div className="flex justify-between items-center">
          <span className="text-lg  font-bold"> السعر الأساسي </span>
          <span className="text-lg text-primary font-bold"> 3900 جنيه </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg text-secondary font-bold">
            {" "}
            الضرائب والقيمة المضافة{" "}
          </span>
          <span className="text-lg text-primary font-bold"> 3900 جنيه </span>
        </div>
      </div>
      <p className="text-lg text-secondary">
        * السعر النهائي سيتم تأكيده بواسطة منسق الرحلة.
      </p>
    </div>
  );
}

export default TotalSummary;
