import React from "react";
import { ShieldCheck, Star, ArrowLeft } from "lucide-react";
import { organizersData } from "../../data/articlesData";

function Organizers() {
  return (
    <section className="py-12 bg-bg-main">
      <div className="app-container">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <span className="text-[#B45309] font-bold text-sm sm:text-base block">
              منظمون وخبراء محليون
            </span>
            <h2 className="text-secondary font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              سافر مع ناس حافظين السكة.
            </h2>
            <p className="text-text-muted font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
              شركات ومجموعات سفر مصرية مستقلة يقودها مستكشفون وسائقو صحراء محترفون.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[#0F568A] hover:text-[#0A3C60] font-bold text-sm sm:text-base transition-colors shrink-0 group self-start md:self-auto"
          >
            <span>استكشف كل الـ 18 شركة سفر</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {organizersData.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-gray-100/90 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Card Header: Avatar & Info */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Badge / Avatar */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${org.badgeBg} ${org.badgeText} flex items-center justify-center font-bold text-lg sm:text-xl shadow-xs shrink-0`}
                    >
                      {org.code}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-blue-500 fill-blue-100" />
                        <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">
                          {org.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 font-medium mt-1">
                        <span className="flex items-center text-amber-500 font-bold gap-0.5">
                          {org.rating}
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        </span>
                        <span className="text-gray-300">•</span>
                        <span>{org.activeTrips} رحلة نشطة</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal my-5 text-right">
                  {org.quote}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {org.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F0F6FE] text-[#1D5B8C] text-xs font-semibold rounded-full hover:bg-blue-100 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <button className="w-full mt-6 py-3 px-4 rounded-full bg-[#EBF3FB] hover:bg-[#DCEBF9] text-[#0F283D] font-bold text-sm text-center transition-all duration-200 active:scale-[0.99]">
                عرض الشركة والرحلات
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#0B629B] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5 text-white">
          <div className="flex items-center gap-4 text-right">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-1">
                100% منظمين رحلات مصريين معتمدين
              </h4>
              <p className="text-white/80 text-xs sm:text-sm font-normal">
                تواصل مباشر مع قادة الرحلات - إلغاء مجاني حتى 48 ساعة • أفواج آمنة
              </p>
            </div>
          </div>

          <button className="bg-white text-[#0B629B] hover:bg-gray-50 px-7 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 shrink-0 w-full sm:w-auto">
            انضم كمنظم رحلات
          </button>
        </div>
      </div>
    </section>
  );
}

export default Organizers;
