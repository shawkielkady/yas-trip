import Image from "next/image";
import Link from "next/link";
import React from "react";
import dahab from "../assets/images/areas/dahab.png";
import { Article } from "../data/articlesData";

interface ArticleCardProps {
  article?: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  const articleId = article?.id || "sinai-3-reasons";
  const title = article?.title || "٣ أسباب تخليك تسافر سينا.";
  const excerpt =
    article?.excerpt ||
    "اكتشف جمال دهب الساحر وتعرّف على أفضل الأماكن اللي ممكن تزورها في الرحلة. استعد لمغامرة استثنائية وسط الطبيعة الخلابة.";
  const image = article?.image || dahab;
  const category = article?.category || "رحلات وتجارب";
  const readTime = article?.readTime || "5 دقائق";

  return (
    <Link
      href={`/articles/${articleId}`}
      className="group flex flex-col h-full overflow-hidden rounded-2xl bg-white shadow-xs hover:shadow-md transition-all duration-300 border border-gray-100/80 cursor-pointer"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-secondary shadow-xs">
          {category}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div className="space-y-3">
          <h3 className="font-bold text-xl sm:text-2xl text-secondary leading-snug group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 font-normal">
            {excerpt}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm font-medium text-gray-500">
          <span className="text-primary font-semibold flex items-center gap-1">
            <span>قراءة المقال</span>
            <span className="text-xs">({readTime})</span>
          </span>
          <span className="text-primary font-bold transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;

