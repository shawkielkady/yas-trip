"use client";
import CustomInput from "@public/shared_components/CustomInput";
import React, { useState } from "react";
import { LockKeyhole } from "lucide-react";
import CustomBtn from "@public/shared_components/CustomBtn";
import { redirect } from "next/navigation";
function CheckoutForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  return (
    <div className="p-6 rounded-xl bg-white space-y-4 mt-4">
      <h2 className="fonr-bold text-2xl text-primary"> بيانات الحجز </h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 col-span-2">
            <CustomInput
              label="الاسم بالكامل "
              placeholder="الاسم بالكامل "
              helperText="كما في بطاقة الرقم القومي أو جواز السفر"
              required
              id="name"
              value={name}
              onChange={(value) => {
                setName(value.target.value);
              }}
            />
          </div>
          <div className="space-y-2 col-span-2 md:col-span-1">
            <CustomInput
              label="البريد الإلكتروني "
              placeholder="البريد الإلكتروني "
              helperText="البريد الإلكتروني المستخدم في  تلقي الإشعارات"
              required
              id="email"
              value={email}
              onChange={(value) => {
                setEmail(value.target.value);
              }}
            />
          </div>
          <div className="space-y-2 col-span-2 md:col-span-1">
            <CustomInput
              label="رقم الهاتف "
              placeholder="رقم الهاتف "
              helperText="رقم الهاتف المستخدم في الحجز وتلقي الإشعارات"
              required
              id="phone"
              value={phone}
              onChange={(value) => {
                setPhone(value.target.value);
              }}
            />
          </div>
          <div className="space-y-2 col-span-2">
            <CustomInput
              label="ملاحظات "
              placeholder="ملاحظات "
              helperText="اختياري "
              id="notes"
              value={notes}
              onChange={(value) => {
                setNotes(value.target.value);
              }}
            />
          </div>
        </div>
        <div className="bg-[#FFDF9759] p-6 rounded-xl flex gap-4 my-6">
          <LockKeyhole className="text-[#011D35] h-10 w-10" />
          <div className="">
            <span className="text-xl font-bold text-[#011D35] block mb-2">
              حجزك مش نهائي لسه.
            </span>
            <p className="text-base text-secondary">
              بعد إرسال الطلب، منسقنا هيكلمك واتساب أو تليفون خلال يوم عمل واحد
              لتأكيد إتاحة الكامب والأتوبيس، وتنسيق طريقة الدفع المريحة ليك
              (إنستاباي، فوري، أو تحويل بنكي) بدون أي استعجال.
            </p>
          </div>
        </div>
        <CustomBtn
          title="ارسال طلب الحجز"
          disabled={false}
          onClick={() => {
            redirect("/tracking");
          }}
        />
      </form>
    </div>
  );
}

export default CheckoutForm;
