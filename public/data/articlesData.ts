import { StaticImageData } from "next/image";
import dahab from "../assets/images/areas/dahab.png";
import siwa from "../assets/images/areas/siwa.png";
import fayoum from "../assets/images/areas/fayoum.png";
import saintcatrine from "../assets/images/areas/saintcatrine.png";
import nwebea from "../assets/images/areas/nwebea.png";

export interface Organizer {
  id: string;
  name: string;
  code: string;
  badgeBg: string;
  badgeText: string;
  rating: number;
  activeTrips: number;
  quote: string;
  tags: string[];
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  colorClass: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  author: {
    name: string;
    role: string;
    avatar: StaticImageData;
  };
  content: {
    intro: string;
    sections: {
      title: string;
      body: string;
      highlight?: string;
    }[];
    conclusion: string;
    keyTips: string[];
  };
}


export const organizersData: Organizer[] = [
  {
    id: "yas-travel",
    name: "Yas Travel",
    code: "YT",
    badgeBg: "bg-[#BFDBFE]",
    badgeText: "text-[#1E3A8A]",
    rating: 4.9,
    activeTrips: 24,
    quote: "«نخلي الويند إند متتنسيش.» متخصصون في السفر الشبابي والمغامرات البحرية في سيناء والفيوم.",
    tags: ["دهب", "سيناء", "الفيوم"],
  },
  {
    id: "dune-nomads",
    name: "Dune Nomads",
    code: "DN",
    badgeBg: "bg-[#FCD34D]",
    badgeText: "text-[#78350F]",
    rating: 5.0,
    activeTrips: 12,
    quote: "«سفاري صحراوي ودروب بدوية حقيقية.» رحلات دفع رباعي عميقة في بحر الرمال الأعظم، وسيوة، والصحراء البيضاء.",
    tags: ["واحة سيوة", "الصحراء البيضاء", "البحرية"],
  },
  {
    id: "red-sea-tribe",
    name: "Red Sea Tribe",
    code: "RT",
    badgeBg: "bg-[#60A5FA]",
    badgeText: "text-white",
    rating: 4.9,
    activeTrips: 19,
    quote: "«غوص حر وإبحار كروز استثنائي.» رحلات لجزر حماطة المالديفية، وأماكن تجمع الدلافين وشعاب مرسى علم البكر.",
    tags: ["مرسى علم", "جزر حماطة", "القصير"],
  },
];

export const statsData: StatItem[] = [
  {
    id: "1",
    value: "14,200+",
    label: "مسافر ومستكشف",
    colorClass: "text-[#0F283D]",
  },
  {
    id: "2",
    value: "3,450+",
    label: "حكاية وتجربة",
    colorClass: "text-[#0D5B9D]",
  },
  {
    id: "3",
    value: "98.4%",
    label: "تقييمات إيجابية",
    colorClass: "text-[#9B7B2B]",
  },
  {
    id: "4",
    value: "25",
    label: "واحة وشاطئ سري",
    colorClass: "text-[#0F283D]",
  },
];

export const articlesData: Article[] = [
  {
    id: "sinai-3-reasons",
    title: "٣ أسباب تخليك تسافر سينا.",
    excerpt: "اكتشف جمال دهب الساحر وتعرّف على أفضل الأماكن اللي ممكن تزورها في الرحلة. استعد لمغامرة استثنائية وسط الطبيعة الخلابة.",
    category: "رحلات وتجارب",
    date: "10 سبتمبر 2026",
    readTime: "4 دقائق",
    image: dahab,
    author: {
      name: "أحمد عبد الوهاب",
      role: "مستكشف وكاتب رحلات",
      avatar: saintcatrine,
    },
    content: {
      intro: "سيناء ليست مجرد وجهة سياحية عادية، بل هي ملاذ للروح وسحر خاص يجمع بين زرقة البحر وأسرار الجبال الشاهقة والهدوء البدوّي النادر. إذا كنت تفكر في رحلتك القادمة، فإليك أهم 3 أسباب تجعل سيناء الخيار الأول دائماً.",
      sections: [
        {
          title: "1. الهدوء وفصل الدماغ عن ضغوط الحياة",
          body: "في أماكن زي دهب ونويبع، الحياة بتتحرك بإيقاع مختلف تماماً. قعدة الروقان على البحر في العسلة أو اللاجونا كفيلة بإنها تشحن طاقتك من جديد وتخليك تنسى كل زحمة ومشاكل الشغل.",
          highlight: "نصيحة رحالة: جرب تصحى مع الشروق في نويبع وتقعد قدام البحر مع كوباية شاي بالمرمية.",
        },
        {
          title: "2. تنوع المغامرات من الغوص حتى تسلق الجبال",
          body: "سواء كنت من محبي الاسترخاء أو المغامرة الحبسية، سيناء فيها كل حاجة. تقدر تروح البلوبول وتشوف الشعب المرجانية الرائعة، أو تجهز نفسك لصعود جبل موسى وسانت كاترين لمشاهدة أجمل شروق شمس من فوق القمم.",
        },
        {
          title: "3. الضيافة البدوية والثقافة الغنية",
          body: "أهل سيناء البدو يمتلكون كرم ضيافة استثنائي. السهر في الوديان تحت ملايين النجوم مع عشاء زرب بدوي مطبوخ تحت الأرض تجربة أكل وثقافة لا تُنسى.",
        },
      ],
      conclusion: "سيناء بتبهر كل اللي بيزورها وتخليه يرجع دايماً مشتاق ليها. خطط لرحلتك الجاية وجرب متعة السفر الحقيقي مع ناس حافظين السكة.",
      keyTips: [
        "أفضل وقت لزيارة سيناء هو الفترة من أكتوبر حتى أبريل حيث الجو لطيف ومعتدل.",
        "احرص على تجربة الأكل البدو والشاي بالمرمية في الوديان.",
        "احمل معك معدات السنوركلينج وملابس مريحة للمشي والهايكينج.",
      ],
    },
  },
  {
    id: "siwa-magic",
    title: "أسرار واحة سيوة وبحيرات الملح السحرية.",
    excerpt: "سحر الهدوء، عيون المياه الطبيعية، وأشجار النخيل المتراصة. دليل شامل لقضاء أجمل أيام في عمق الصحراء الغربية.",
    category: "استكشاف صحراوي",
    date: "5 سبتمبر 2026",
    readTime: "6 دقائق",
    image: siwa,
    author: {
      name: "سارة محمود",
      role: "مصورة ومصممة رحلات",
      avatar: fayoum,
    },
    content: {
      intro: "واحة سيوة هي جوهرة الصحراء الغربية المخبأة، مكان يأخذك عبر الزمن حيث تجتمع البحيرات الملحية الزرقاء النقية مع أشجار الزيتون والنخيل وكثبان الرمال الذهبية.",
      sections: [
        {
          title: "عوم بلا عناء في بحيرات الملح",
          body: "تتميز مناجم الملح في سيوة بوجود بحيرات ذات تركيز ملحي شديد يتيح لك الطفو على سطح الماء بدون أي مجهود، مما يقدم تجربة استرخاء وعلاج طبيعي استثنائية.",
          highlight: "ملاحظة هامة: احرص على شطف جسدك بمياه عذبة فور الخروج من بحيرات الملح.",
        },
        {
          title: "مشاهدة الغروب من جزيرة فتناس",
          body: "لا تكتمل زيارة سيوة دون قضاء وقت الغروب في جزيرة فتناس وسط بحيرة سيوة، وأنت تشرب الشاي السيوي الشهير مع عاطر النخيل وأصوات الطبيعة الهادئة.",
        },
      ],
      conclusion: "سيوة تجربة تغير منظورك عن السفر والاسترخاء، تجربة هادئة تنعش الحواس بعيداً عن صخب العالم.",
      keyTips: [
        "احتفظ دايماً بماء عذب بعد السباحة في بحيرة الملح.",
        "اشترِ زيت الزيتون والتمور السيوية الشهيرة كرمز تذكاري رائع.",
      ],
    },
  },
  {
    id: "fayoum-stars",
    title: "ليالي الفيوم وتأمل النجوم في وادي الحيتان.",
    excerpt: "رحلة يومين بعيداً عن زحمة المدينة، بين الشلالات والتزلج على الرمال وسحر السماء الصافية ليلاً.",
    category: "تخييم ورصد نجوم",
    date: "1 سبتمبر 2026",
    readTime: "5 دقائق",
    image: fayoum,
    author: {
      name: "كريم شريف",
      role: "مستكشف نفيوم وقائد أفواج",
      avatar: nwebea,
    },

    content: {
      intro: "تقع الفيوم على بعد مسافة قصيرة من القاهرة لكنها تنقلك لعالم آخر من الشلالات والبحيرات والتخييم في الصحراء.",
      sections: [
        {
          title: "التزلج على الرمال ورصد المجرة",
          body: "استمتع بمغامرة الساندبوردينج على الكثبان الناعمة بالقرب من قرية التونس، وفي الليل استعد لرصد مجرة درب التبانة والنجوم في محمية وادي الحيتان ذات التلوث الضوئي المنعدم.",
        },
      ],
      conclusion: "الفيوم هي الوجهة المثالية للهروب السريع خلال عطلة نهاية الأسبوع.",
      keyTips: [
        "تأكد من اصطحاب تلسكوب أو كاميرا مخصصة للتصوير ليلاً.",
        "زيارة قرية الفخار (التونس) لشراء أواني وتذكارات خرسانية وفخارية يدكوية.",
      ],
    },
  },
];
