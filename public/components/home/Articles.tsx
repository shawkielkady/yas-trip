import React from "react";
import ArticleCard from "../../cards/ArticleCard";
import { articlesData } from "../../data/articlesData";

function Articles() {
  return (
    <section className="py-12 bg-bg-main">
      <div className="app-container">
        <div className="mb-8 space-y-2">
          <h2 className="text-secondary font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            لكل مكان حكاية.
          </h2>
          <p className="text-text-muted font-medium text-base sm:text-lg">
            تعمّق في القصص والتجارب اللي بتشكّل ثقافة مصر.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;

