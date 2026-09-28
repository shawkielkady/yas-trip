"use client";
import React, { useState } from "react";
import { MessageCircle, Copy, Check, Send } from "lucide-react";

function ContactCompany() {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "01054518173";
  // تحويل الرقم للصيغة الدولية المناسبة للواتساب (+20 لمصر)
  const whatsappNumber = "201054518173";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("فشل نسخ الرقم:", err);
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="p-6 rounded-xl bg-white space-y-4 shadow-sm border border-gray-100">
      <h2 className="font-bold text-2xl text-primary">تواصل مع الشركة</h2>

      <div className="p-4 bg-[#EEF4FF] rounded-lg space-y-4">
        <div className="flex gap-4 items-center">
          <MessageCircle className="text-blue-500" size={28} />
          <div>
            <span className="text-sm text-gray-500 font-medium">واتساب</span>
            <p className="text-lg font-bold text-gray-800" dir="ltr">
              {phoneNumber}
            </p>
          </div>
        </div>

        {/* أزرار التحكم */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-blue-100">
          {/* زر التوجيه للواتساب */}
          <button
            onClick={handleWhatsAppRedirect}
            className="flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors duration-200"
          >
            <Send size={16} />
            <span>محادثة واتساب</span>
          </button>

          {/* زر نسخ الرقم */}
          <button
            onClick={handleCopy}
            className={`flex-1 min-w-[110px] flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 border ${
              copied
                ? "bg-green-50 text-green-700 border-green-300"
                : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
            }`}
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-600" />
                <span>تم النسخ!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>نسخ الرقم</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCompany;
