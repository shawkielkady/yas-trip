import React from "react";
import { ShieldCheck, Tag, Headphones } from "lucide-react";

export default function ProductsWhyUsBanner() {
  return (
    <section className="mt-16 bg-surface border border-gray-100 rounded-3xl p-8 shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
        <h2 className="text-2xl font-black text-secondary">لماذا تحجز مع رحالة مصر؟</h2>
        <p className="text-text-muted text-sm">
          نوفر لك تجربة حجز سلسة ومضمونة مع أفضل الشركات المعتمدة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-5 rounded-2xl bg-bg-main/60 space-y-2 border border-gray-100/60">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-secondary text-base">شركات ومنظمون موثوقون</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            نختار منظمي الرحلات بعناية ونضمن لك أعلى مستويات الأمان والجودة في جميع الفعاليات.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-bg-main/60 space-y-2 border border-gray-100/60">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
            <Tag className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-secondary text-base">أفضل الأسعار بدون عمولات</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            احصل على أسعار مراجعة ومنافسة مباشرة بدون أي رسوم خفية أو إضافات غير معلنة.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-bg-main/60 space-y-2 border border-gray-100/60">
          <div className="w-12 h-12 rounded-2xl bg-accent-yellow/30 text-amber-900 flex items-center justify-center mx-auto">
            <Headphones className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-secondary text-base">دعم مستمر وإرشاد بدوي</h3>
          <p className="text-xs text-text-muted leading-relaxed">
            فريق الدعم والمرشدون جاهزون لمساعدتك في التخطيط والإجابة عن جميع استفساراتك قبل وأثناء الرحلة.
          </p>
        </div>
      </div>
    </section>
  );
}
