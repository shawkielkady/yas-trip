import React from "react";
import { statsData } from "../../data/articlesData";

function HomeStats() {
  return (
    <section className="py-8 bg-bg-main">
      <div className="app-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#F0F6FE] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center shadow-2xs hover:shadow-md transition-all duration-300 border border-blue-50/50 group"
            >
              <span
                className={`text-3xl sm:text-4xl lg:text-5xl font-black ${stat.colorClass} tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300 dir-ltr inline-block`}
              >
                {stat.value}
              </span>
              <span className="text-gray-500 font-semibold text-xs sm:text-sm lg:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeStats;
