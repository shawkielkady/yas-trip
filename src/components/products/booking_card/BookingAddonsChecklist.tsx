import React from "react";
import { PlusCircle } from "lucide-react";

export default function BookingAddonsChecklist() {
  return (
    <div className="space-y-2.5 pt-2 border-t border-gray-100">
      <label className="block text-xs font-bold text-secondary flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <PlusCircle className="w-4 h-4 text-primary" />
          3. الإضافات والأنشطة الاختيارية
        </span>
        <span className="text-[10px] text-text-muted">حسب رغبتك</span>
      </label>

      <div className="space-y-2">
        <label className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-500 bg-emerald-50/60 cursor-pointer">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              defaultChecked
              readOnly
              className="w-4 h-4 accent-primary rounded"
            />
            <span className="text-xs font-semibold text-secondary block">
              رحلة السفاري بالبيتش باجي والمغيب
            </span>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
            +1,200 ج.م /للشخص
          </span>
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-bg-main cursor-pointer">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              readOnly
              className="w-4 h-4 accent-primary rounded"
            />
            <span className="text-xs font-semibold text-secondary block">
              عشاء بدوي مع عروض الفلكلور
            </span>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
            +800 ج.م /للشخص
          </span>
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-500 bg-emerald-50/60 cursor-pointer">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              defaultChecked
              readOnly
              className="w-4 h-4 accent-primary rounded"
            />
            <span className="text-xs font-semibold text-secondary block">
              رحلة يخت وجزيرة التيران شاملة الغداء
            </span>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0">
            +1,500 ج.م /للشخص
          </span>
        </label>
      </div>
    </div>
  );
}
