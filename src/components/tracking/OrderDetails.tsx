import { Bus, Calendar, Clock, User, Wallet } from "lucide-react";
import React from "react";

function OrderDetails() {
  return (
    <div className="rounded-xl bg-white ">
      <div className="p-3 bg-[#EEF4FF] flex items-center justify-between md:flex-row flex-col gap-2">
        <p className=" text-xl font-bold bg-[#FFDF97] rounded-2xl px-6 p-2">
          {" "}
          تم استلام طلب الحجز{" "}
        </p>
        <p className="text-md font-bold"> #104073001556339 </p>
      </div>
      <div className="bg-white p-6">
        <div className="p-6 space-y-2">
          <h2 className="font-bold text-xl text-primary">الرحلة المختارة</h2>
          <p className="text-lg md:text-2x; text-secondary font-bold">
            رحلة كامبنج دهب - ركوب بيتش باجي و خيم بدوية، 4 أيام
          </p>
          <div className="flex items-center gap-4">
            <Clock size={30} className="text-[#1261A0]" />
            <p>
              تنظيم: <span className="font-bold text-xl">رحلات سيناء</span>
            </p>
            <p></p>
          </div>
          <p className="font-bold text-xl mt-4 p-1 px-4 bg-[#E4EFFF] w-fit rounded-2xl">
            6 أيام - 5 ليالي
          </p>
        </div>
        <div className="p-6 bg-[#EEF4FF80]">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
            <div className="flex items-center gap-4">
              <Calendar size={30} className="text-[#1261A0]" />
              <div className="space-y-1">
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  ميعاد الانطلاق
                </p>
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  11/12/2025
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <User size={30} className="text-[#1261A0]" />
              <div className="space-y-1">
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  عدد المسافرين
                </p>
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  5
                </p>
              </div>
            </div>{" "}
            <div className="flex items-center gap-4">
              <Bus size={30} className="text-[#1261A0]" />
              <div className="space-y-1">
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  وسيلة السفر
                </p>
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  اتوبيس
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Wallet size={30} className="text-[#1261A0]" />
              <div className="space-y-1">
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  الإجمالي التقديري
                </p>
                <p className="text-lg md:text-2x; text-secondary font-bold">
                  6,400 ج.م
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-2">
          <p className="font-bold text-xl">الملاحظات والطلبات المسجلة:</p>
          <p>&quot;خيمة مطلة على البحر &quot;</p>
        </div>
        <div className="p-6 space-y-2">
          <p className="font-bold text-xl">المشتمالات :</p>
          <p className="font-bold text-xl mt-4 p-1 px-4 bg-[#E4EFFF] w-fit rounded-2xl">
            رحلة سنوركلينج بالبلو هول
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
