import CategoryCard from "../../cards/CategoryCard";
import React from "react";

function HomeCategories() {
  return (
    <section className="py-8 ">
      <div className="app-container">
        <div className="mb-6 space-y-2">
          <h1 className="text-secondary font-black  text-4xl  ">استكشف مصر</h1>
          <p className="text-text-muted font-medium text-lg  ">
            حابب تصحى فين المرة الجاية؟ بحيرات ملح، قمم جبال، ولا هدوء
            الواحات.{" "}
          </p>
        </div>
        {/* Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  gap-6">
          <div className="col-span-2 md:col-span-1 lg:col-span-7 row-span-2">
            <CategoryCard />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-5 row-span-2">
            <CategoryCard />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-4">
            <CategoryCard />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-4">
            <CategoryCard />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-4">
            <div className="flex h-96 gap-2 flex-col overflow-hidden">
              <CategoryCard />
              <CategoryCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCategories;
