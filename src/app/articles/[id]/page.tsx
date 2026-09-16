import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { articlesData } from "../../../../public/data/articlesData";
import ArticleCard from "../../../../public/cards/ArticleCard";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArticleDetailsPage({ params }: Props) {
  const { id } = await params;

  const article = articlesData.find((item) => item.id === id) || articlesData[0];

  if (!article) {
    notFound();
  }

  // Filter other articles as related articles
  const relatedArticles = articlesData.filter((item) => item.id !== article.id);

  return (
    <main className="min-h-screen bg-bg-main pb-20 pt-6">
      <div className="app-container max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between py-4 mb-6 border-b border-gray-200/60">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary font-bold text-sm sm:text-base transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للرئيسية</span>
          </Link>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted font-medium">
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-secondary font-semibold">المقالات</span>
            <span>/</span>
            <span className="text-primary truncate max-w-[120px] sm:max-w-[200px]">
              {article.title}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3.5 py-1 bg-accent-blue text-[#1D5B8C] font-bold text-xs sm:text-sm rounded-full shadow-2xs">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                زمن القراءة: {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary leading-tight sm:leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author Card Header */}
          <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-xs">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-secondary">
                  {article.author.name}
                </h4>
                <p className="text-xs text-text-muted">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-600 transition-colors shadow-2xs border border-gray-200/80"
                title="حفظ المقال"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="p-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-600 transition-colors shadow-2xs border border-gray-200/80"
                title="مشاركة"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-md mb-10 bg-gray-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Article Body Content */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-gray-100/90 space-y-8 mb-12 text-gray-800 leading-relaxed font-normal">
          {/* Intro Paragraph */}
          <div className="text-lg sm:text-xl font-medium text-secondary bg-[#F8FAFC] p-6 rounded-2xl border-r-4 border-primary">
            {article.content.intro}
          </div>

          {/* Sections */}
          {article.content.sections.map((sec, index) => (
            <div key={index} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-black text-secondary tracking-tight">
                {sec.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {sec.body}
              </p>

              {sec.highlight && (
                <div className="bg-[#FFF8F5] border border-orange-200/60 rounded-2xl p-4 sm:p-5 flex items-start gap-3 text-orange-950 my-4">
                  <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base font-semibold">
                    {sec.highlight}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Key Tips Section */}
          {article.content.keyTips && article.content.keyTips.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-100 bg-[#F0F6FE] rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-secondary flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-secondary-light" />
                <span>نصائح هامة قبل الرحلة:</span>
              </h3>
              <ul className="space-y-3">
                {article.content.keyTips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Conclusion */}
          <div className="pt-6 border-t border-gray-100 space-y-3">
            <h3 className="text-xl font-bold text-secondary">خلاصة الرحلة</h3>
            <p className="text-base sm:text-lg text-gray-700">
              {article.content.conclusion}
            </p>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl sm:text-3xl font-black text-secondary">
                مقالات أخرى قد تعجبك
              </h3>
              <Link
                href="/"
                className="text-primary hover:text-primary-hover font-bold text-sm"
              >
                عرض الكل ←
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
