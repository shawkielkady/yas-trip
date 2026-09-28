"use client";
import React, { useState } from "react";
function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    {
      id: 1,
      question: "هل الحجز مؤكد بعد إرسال الطلب؟",
      answer:
        "إطلاقًا! الحجز مش مؤكد بعد إرسال الطلب. منسق رحلاتنا هيتواصل معاك واتساب أو تليفون في خلال يوم عمل واحد عشان يأكد إتاحة الكامب والأتوبيس، ويرتب معاك ميعاد الدفع المناسب ليك. الدفع بيتم بعد ما تتأكد إن كل التفاصيل تمام.",
    },
    {
      id: 2,
      question: "إيه طرق الدفع المتاحة؟",
      answer:
        "إطلاقًا! الحجز مش مؤكد بعد إرسال الطلب. منسق رحلاتنا هيتواصل معاك واتساب أو تليفون في خلال يوم عمل واحد عشان يأكد إتاحة الكامب والأتوبيس، ويرتب معاك ميعاد الدفع المناسب ليك. الدفع بيتم بعد ما تتأكد إن كل التفاصيل تمام.",
    },
    {
      id: 3,
      question: "متى يبدأ رحلة واحة سيو؟",
      answer:
        "إطلاقًا! الحجز مش مؤكد بعد إرسال الطلب. منسق رحلاتنا هيتواصل معاك واتساب أو تليفون في خلال يوم عمل واحد عشان يأكد إتاحة الكامب والأتوبيس، ويرتب معاك ميعاد الدفع المناسب ليك. الدفع بيتم بعد ما تتأكد إن كل التفاصيل تمام.",
    },
    {
      id: 4,
      question: "هل بيوفروا وجبات في الرحلة؟",
      answer:
        "إطلاقًا! الحجز مش مؤكد بعد إرسال الطلب. منسق رحلاتنا هيتواصل معاك واتساب أو تليفون في خلال يوم عمل واحد عشان يأكد إتاحة الكامب والأتوبيس، ويرتب معاك ميعاد الدفع المناسب ليك. الدفع بيتم بعد ما تتأكد إن كل التفاصيل تمام.",
    },
    {
      id: 5,
      question: "هل في عروض خاصة على الرحلة؟",
      answer:
        "إطلاقًا! الحجز مش مؤكد بعد إرسال الطلب. منسق رحلاتنا هيتواصل معاك واتساب أو تليفون في خلال يوم عمل واحد عشان يأكد إتاحة الكامب والأتوبيس، ويرتب معاك ميعاد الدفع المناسب ليك. الدفع بيتم بعد ما تتأكد إن كل التفاصيل تمام.",
    },
  ];
  return (
    <div className="p-6 rounded-xl bg-white space-y-4 mt-4">
      <h2 className="font-bold text-2xl text-primary"> الأسئلة الشائعة </h2>
      {faqs.map((faq) => (
        <div key={faq.id} className="border-b border-gray-200 py-4">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() =>
              setActiveIndex(activeIndex === faq.id ? null : faq.id)
            }
          >
            <span className="text-xl font-bold">{faq.question}</span>
            <span>{activeIndex === faq.id ? "-" : "+"}</span>
          </button>
          {activeIndex === faq.id && <p className="mt-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQs;
