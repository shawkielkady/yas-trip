import CategoryCard from "../../cards/CategoryCard";
import React from "react";
import siwa from "../../assets/images/areas/siwa.png";
import dahab from "../../assets/images/areas/dahab.png";
import fayoum from "../../assets/images/areas/fayoum.png";
import saintcatrine from "../../assets/images/areas/saintcatrine.png";
import nwebea from "../../assets/images/areas/nwebea.png";

function HomeCategories() {
  return (
    <section className="py-8">
      <div className="app-container">
        <div className="mb-6 space-y-2">
          <h1 className="text-secondary font-black text-4xl">استكشف مصر</h1>
          <p className="text-text-muted font-medium text-lg">
            حابب تصحى فين المرة الجاية؟ بحيرات ملح، قمم جبال، ولا هدوء الواحات.
          </p>
        </div>
        {/* Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="col-span-2 md:col-span-1 lg:col-span-7 h-96">
            <CategoryCard
              title="سيوة"
              image={siwa}
              description="مخيمات، كانيون، وبحر ملوش نهاية وصباحيات رايقة."
              href="/products/siwa"
            />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-5 h-96">
            <CategoryCard
              title="دهب"
              image={dahab}
              description="مغامرات اللاجونا، البلوبول، والروقان عند البحر الأحمر."
              href="/products/dahab"
            />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-4 h-80">
            <CategoryCard
              title="الفيوم"
              image={fayoum}
              description="تزلج الرمال وتأمل النجوم في وادي الحيتان."
              href="/products/fayoum"
            />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-4 h-80">
            <CategoryCard
              title="سانت كاترين"
              image={saintcatrine}
              description="صعود جبل موسى وأعلى قمم جبلية لمشاهدة أجمل شروق."
              href="/products/catherine"
            />
          </div>
          <div className="col-span-2 md:col-span-1 lg:col-span-4 h-80">
            <CategoryCard
              title="نويبع وطابا"
              image={nwebea}
              description="استرخاء في وادي الوشواشي ومخيمات راس شيدان."
              href="/products/nwebea"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCategories;
