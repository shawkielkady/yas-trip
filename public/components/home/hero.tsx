import heroImage from "../../assets/images/heroimg.png";
import Image from "next/image";
import {
  ArrowLeft,
  Compass,
  ShieldCheck,
  MapPin,
  Users,
  Sun,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg-main  dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(80vh-7rem)]">
        {/* SECTION 1: TEXT CONTENT */}
        <div className="hero-text-section flex flex-col justify-center text-right space-y-6 order-2 lg:order-1">
          {/* Badge فوق العنوان */}
          <div className="inline-flex items-center gap-2 bg-accent-yellow/30 border border-accent-yellow text-secondary px-4 py-1.5 rounded-full w-fit text-sm font-bold">
            <Sun className="w-4 h-4 text-primary" />
            <span>سفر حر ومغامرات محلية</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary leading-tight tracking-tight">
            مصر أقرب <br className="hidden sm:inline" />
            <span className="text-primary">مما تتخيل.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl">
            من شعاب البحر الأحمر المرجانية لسكون صحاري سيناء.. ديماً في قصة
            تانية ومغامرة مستنياك.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="flex items-center gap-2 px-6 py-3.5 text-white bg-primary hover:bg-primary-hover font-bold rounded-full shadow-lg shadow-primary/20 transition-all duration-200 active:scale-95">
              <span>استكشف مصر</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-2 px-6 py-3.5 text-secondary bg-surface hover:bg-gray-100 font-bold border border-gray-200 rounded-full transition-all duration-200 active:scale-95">
              <Compass className="w-5 h-5 text-secondary-light" />
              <span>احجز رحلتك</span>
            </button>
          </div>

          {/* Stats Tags */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm bg-accent-blue/40 text-secondary font-bold px-3.5 py-2 rounded-full border border-accent-blue/60">
              <ShieldCheck className="w-4 h-4 text-secondary-light" />
              <span>١٢٠+ رحلة موثوقة</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm bg-accent-blue/40 text-secondary font-bold px-3.5 py-2 rounded-full border border-accent-blue/60">
              <MapPin className="w-4 h-4 text-secondary-light" />
              <span>٢٥ وجهة ساحرة</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm bg-gray-100 text-text-muted font-bold px-3.5 py-2 rounded-full border border-gray-200">
              <Users className="w-4 h-4 text-text-muted" />
              <span>١٠+ منظمين مستقلين</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: HERO IMAGE WITH OVERLAY & TEXT */}
        <div className="hero-image-section relative w-full h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
          <Image
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            priority
            src={heroImage}
            alt="رحلات مصر وشبه جزيرة سيناء"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute top-4 right-4 bg-accent-yellow text-secondary font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-md">
            ساحل سيناء
          </div>

          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white border border-white/20 font-medium text-xs sm:text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Sun className="w-4 h-4 text-accent-yellow" />
            <span>٢٧° مئوية</span>
          </div>

          <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-8 text-white space-y-2 text-right">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-md">
              شبه جزيرة سيناء
            </h3>
            <p className="text-sm sm:text-base text-gray-200 font-normal line-clamp-2 leading-relaxed">
              مخيمات، كانيون، وبحر ملوش نهاية وصباحيات رايقة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
