import React from "react";
import { Smartphone, Mail, Clock, Contact } from "lucide-react";

interface ContactInfoCardProps {
  phone?: string;
  email?: string;
  expectedTime?: string;
}

export default function ContactInfoCard({
  phone = "+20 010 9876 5432",
  email = "ahmed.mostafa@example.com",
  expectedTime = "اليوم قبل الساعة 6:00 مساءً بتوقيت القاهرة أو صباح الغد",
}: ContactInfoCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/80 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-end gap-2.5 mb-2">
        <h2 className="font-bold text-xl md:text-2xl text-[#0F283D] tracking-tight">
          هنتواصل معاك على:
        </h2>
        <div className="p-1.5 rounded-lg bg-[#FAF0E6] text-[#9A4B00] flex items-center justify-center">
          <Contact className="w-6 h-6 text-[#9A4B00]" />
        </div>
      </div>

      {/* Phone / WhatsApp Box */}
      <div className="bg-[#EEF4FF] rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4 transition-all hover:bg-[#E4EFFF]">
        <div className="flex-1 text-right">
          <p className="text-sm md:text-base text-[#6A5B4D] font-medium mb-1">
            واتساب / موبايل
          </p>
          <p className="text-base md:text-lg font-bold text-[#0F283D] dir-ltr text-right font-sans">
            {phone}
          </p>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xs shrink-0">
          <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-[#1261A0]" />
        </div>
      </div>

      {/* Email Box */}
      <div className="bg-[#EEF4FF] rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4 transition-all hover:bg-[#E4EFFF]">
        <div className="flex-1 text-right overflow-hidden">
          <p className="text-sm md:text-base text-[#6A5B4D] font-medium mb-1">
            البريد الإلكتروني
          </p>
          <p className="text-sm md:text-base font-bold text-[#0F283D] truncate dir-ltr text-right font-sans">
            {email}
          </p>
        </div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xs shrink-0">
          <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#1261A0]" />
        </div>
      </div>

      {/* Expected Contact Time Box */}
      <div className="bg-[#FFF7E6] border border-[#FCE8BD]/60 rounded-2xl p-4 md:p-5 space-y-2">
        <div className="flex items-center justify-start gap-2 text-[#7A5703]">
          <Clock className="w-6 h-6 md:w-7 md:h-7 shrink-0 text-[#8B6508]" />
          <p className="font-bold text-base md:text-lg text-[#7A5703]">
            موعد التواصل المتوقع:
          </p>
        </div>
        <p className="font-bold text-base md:text-lg text-[#7A5703] leading-relaxed text-right pr-1">
          {expectedTime}
        </p>
      </div>
    </div>
  );
}
