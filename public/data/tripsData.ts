import { StaticImageData } from "next/image";
import dahab from "../assets/images/areas/dahab.png";
import siwa from "../assets/images/areas/siwa.png";
import fayoum from "../assets/images/areas/fayoum.png";
import saintcatrine from "../assets/images/areas/saintcatrine.png";
import nwebea from "../assets/images/areas/nwebea.png";
import sahel from "../assets/images/areas/sahel.png";

export interface HotelOption {
  id: string;
  name: string;
  stars: number;
  badge?: string;
  priceDelta: number; // 0 for base hotel, positive number for upgrade
  description: string;
  image?: StaticImageData | string;
  galleryImages?: (StaticImageData | string)[];
}

export interface DurationOption {
  id: string;
  title: string;
  nightsCount: number;
  basePrice: number;
  badge?: string;
}

export interface TripAddon {
  id: string;
  title: string;
  price: number;
  unit: string;
  category: "وجبات" | "أنشطة" | "خدمات إضافية";
  description?: string;
}

export interface Trip {
  id: string;
  slug: string;
  title: string;
  location: string;
  locationSlug: string;
  organizer: string;
  image: StaticImageData | string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  duration: string;
  category: string;
  tags?: string[];
  isFeatured?: boolean;
  startDate?: string;
  hotelOptions?: HotelOption[];
  durationOptions?: DurationOption[];
  addons?: TripAddon[];
}

export const sampleTrips: Trip[] = [
  {
    id: "dahab-blue-hole-2",
    slug: "dahab-blue-hole-abugalum",
    title: "دهب - مغامرة البلوبول واللاجونا وتخييم رأس أبو جالوم",
    location: "دهب",
    locationSlug: "dahab",
    organizer: "Yas Travel",
    image: dahab,
    price: 2800,
    originalPrice: 3200,
    rating: 4.95,
    reviewsCount: 88,
    duration: "4 أيام / 3 ليالي",
    category: "رحلات شاطئية",
    tags: ["غوص وسنوركلينج", "أبو جالوم", "شامل الإقامة"],
    isFeatured: true,
    startDate: "20 أكتوبر 2026",

    durationOptions: [
      { id: "dur-3d2n", title: "3 أيام / ليليتين", nightsCount: 2, basePrice: 2200 },
      { id: "dur-4d3n", title: "4 أيام / 3 ليالي", nightsCount: 3, basePrice: 2800, badge: "الأكثر طلباً 🔥" },
      { id: "dur-5d4n", title: "5 أيام / 4 ليالي", nightsCount: 4, basePrice: 3400 },
    ],

    hotelOptions: [
      {
        id: "camp-standard",
        name: "مخيم شاطئي بدوي (راس أبو جالوم)",
        stars: 3,
        badge: "التجربة الكلاسيكية",
        priceDelta: 0,
        description: "غرف بدوية خشبية على الشاطئ مباشرة مع حمامات مشتركة نظيفة.",
        galleryImages: [dahab, nwebea, siwa, saintcatrine],
      },
      {
        id: "hotel-bluehole-3",
        name: "فندق البلو هول 3 نجوم (العسلة)",
        stars: 3,
        badge: "اقتصادي مريح",
        priceDelta: 350,
        description: "غرف مكيفة مع حمام خاص، حمام سباحة، وشامل الإفطار.",
        galleryImages: [dahab, sahel, fayoum, nwebea],
      },
      {
        id: "hotel-dahab-paradise",
        name: "فندق دهب بارادايس (3 نجوم)",
        stars: 3,
        priceDelta: 450,
        description: "موقع مميز على كورنيش دهب مع إطلالة على الجبال والغروب.",
        galleryImages: [dahab, siwa, sahel],
      },
      {
        id: "resort-swiss-inn",
        name: "منتجع سويس إن دهب (4 نجوم)",
        stars: 4,
        badge: "الأعلى تقييماً 🌟",
        priceDelta: 950,
        description: "شاطئ خاص باللاجونا، بوفيه مفتوح، وألعاب مائية.",
        galleryImages: [dahab, sahel, nwebea, fayoum],
      },
      {
        id: "resort-meridien",
        name: "منتجع لو ميريديان دهب (5 نجوم)",
        stars: 5,
        badge: "VIP 👑",
        priceDelta: 1850,
        description: "إقامة 5 نجوم فاخرة جداً، جناح بياضات قطنية وإفطار ملكي.",
        galleryImages: [dahab, sahel, siwa, saintcatrine],
      },
    ],

    addons: [
      {
        id: "addon-zarb",
        title: "عشاء زرب بدوي مطبوخ تحت الأرض",
        price: 250,
        unit: "/ للفرد",
        category: "وجبات",
        description: "وجبة دجاج ولحم مطبوخ بالرمال مع أرز وشاي بالمرمية.",
      },
      {
        id: "addon-diving",
        title: "غوص تجريبي مع مدرب في البلوبول",
        price: 650,
        unit: "/ للفرد",
        category: "أنشطة",
        description: "شامل المعدات الكاملة والتصوير الفوتوغرافي تحت الماء.",
      },
      {
        id: "addon-safari",
        title: "رحلة بيتش باجي سفاري وادي قني",
        price: 350,
        unit: "/ للمركبة",
        category: "أنشطة",
        description: "مغامرة قيادة 45 دقيقة في صحراء دهب وقت الغروب.",
      },
    ],
  },
];
