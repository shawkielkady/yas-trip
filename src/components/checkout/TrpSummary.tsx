import React from "react";
import { BusFront, Calendar, Clock5, House, Users } from "lucide-react";
function TripSummary() {
  return (
    <div className="p-6 rounded-xl bg-white space-y-4 sticky top-4">
      <h2 className="font-bold text-2xl text-primary"> ملخص الرحلة </h2>
      <div className="p-4 bg-[#EEF4FF] rounded-lg space-y-2 ">
        <div className="flex gap-4 items-center">
          <Calendar className="text-blue-300" size={24} />
          <div className="">
            <span className="text-lg text-primary font-bold"> المواعيد </span>
            <p className="text-lg font-bold">
              {" "}
              الجمعة، 18 سبتمبر – الأحد، 20 سبتمبر 2025{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Clock5 className="text-blue-300" size={24} />
          <div className="">
            <span className="text-lg text-primary font-bold"> المدة </span>
            <p className="text-lg font-bold"> 3 أيام · ليلتان</p>
          </div>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <Users className="text-blue-300" size={24} />
          <div className="">
            <span className="text-lg text-primary font-bold"> الأفراد </span>
            <p className="text-lg font-bold"> 4</p>
          </div>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <House className="text-blue-300" size={24} />
          <div className="">
            <span className="text-lg text-primary font-bold"> الإقامة </span>
            <p className="text-lg font-bold"> جبل واحة سيو</p>
          </div>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <BusFront className="text-blue-300" size={24} />
          <div className="">
            <span className="text-lg text-primary font-bold">
              {" "}
              نقطة التجمع والانطلاق{" "}
            </span>
            <p className="text-lg font-bold">
              {" "}
              القاهرة (ميدان عبد المنعم رياض، محطة جو باص)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripSummary;
