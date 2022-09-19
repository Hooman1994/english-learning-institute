import cover1 from "../assets/images/cover1.png";
import cover2 from "../assets/images/cover2.webp";
import cover3 from "../assets/images/cover3.png";
import cover4 from "../assets/images/cover4.png";
import fee from "../assets/images/fee.png";
import account from "../assets/images/account.png";
import calendar from "../assets/images/calendar.png";
import contactUs from "../assets/images/contactUs.png";
import online from "../assets/images/online.png";
import onlineServices from "../assets/images/onlineServices.png";
import store from "../assets/images/store.png";
import suggestion from "../assets/images/suggestion.png";
import ttc from "../assets/images/ttc.png";
import levelTest from "../assets/images/levelTest.png";
import introduction from "../assets/images/introduction.png";
import ielts from "../assets/images/introduction.png";
import begginer from "../assets/images/introduction.png";
import intermediate from "../assets/images/introduction.png";
import advanced from "../assets/images/introduction.png";
import amf0 from "../assets/images/amf0.png";
import amf1 from "../assets/images/amf1.png";
import amf2 from "../assets/images/amf2.png";
import amf3 from "../assets/images/amf3.png";
import amf4 from "../assets/images/amf4.png";
import amf5 from "../assets/images/amf5.png";
import dictionary from "../assets/images/dictionary.png";
import topNotch from "../assets/images/topNotch.jpg";
import level1 from "../assets/images/level1.jpg";
import level2 from "../assets/images/level2.jpg";
import level3 from "../assets/images/level3.jpg";
import level4 from "../assets/images/level4.jpg";
import level5 from "../assets/images/level5.jpg";
import level6 from "../assets/images/level6.jpg";

const carouselData = [
  {
    id: "1",
    imageSource: cover1,
    name: "1",
    alt: "cover1",
  },
  {
    id: "2",
    imageSource: cover2,
    name: "2",
    alt: "cover2",
  },
  {
    id: "3",
    imageSource: cover3,
    name: "3",
    alt: "cover3",
  },
  {
    id: "4",
    imageSource: cover4,
    name: "3",
    alt: "cover4",
  },
];

const cardData = [
  {
    id: "3",
    bodyOne: "دوره های آموزشی",
    bodyTwo: "آشنایی با ادوار اموزشی و کلاس ها و متد های آموزشی آموزشگاه",
    image: online,
    name: "3",
    alt: "online",
    url: "/courses",
  },

  {
    id: "7",
    bodyOne: "فروشگاه کتاب ما",
    bodyTwo: "معرفی کتاب های مورد تائید آموزشگاه و خرید کتاب های کمک آموزشی",
    image: store,
    name: "7",
    alt: "store",
    url: "/store",
  },
  {
    id: "4",
    bodyOne: "تقویم آموزشی",
    bodyTwo: "مشاهده تقویم برگزاری کلاس ها و دوره ها",
    image: calendar,
    name: "4",
    alt: "calendar",
    url: "/calendar",
  },
  {
    id: "6",
    bodyOne: "خدمات آنلاین",
    bodyTwo:
      "آشنایی با خدمات آنلایناعم از کلاس های غیر حضوری، دوره های نیمه آفلاین و پشتیبانی زبان آموزان",
    image: onlineServices,
    name: "6",
    alt: "onlineServices",
    url: "/online-services",
  },
  {
    id: "1",
    bodyOne: "شهریه کلاس ها و دوره ها",
    bodyTwo: "اطلاع از نحوه پرداخت و جدول پرداخت شهریه زبان آموزان",
    image: fee,
    name: "1",
    alt: "fee",
    url: "/fee",
  },
  {
    id: "2",
    bodyOne: "واحد های آموزشگاه",
    bodyTwo: "آشنایی با واحد های آموزشی، کادر مجرب ما و مدیریت کلاس ها",
    image: introduction,
    name: "2",
    alt: "introduction",
    url: "/introduction",
  },

  {
    id: "5",
    bodyOne: "تعیین سطح",
    bodyTwo: "برگزاری آزمون تعیین سطح با پیشرفته ترین متد ها",
    image: levelTest,
    name: "5",
    alt: "levelTest",
    url: "/level-test",
  },

  {
    id: "8",
    bodyOne: "دوره های TTC و جذب اساتید",
    bodyTwo: "برگزاری دوره های آموزش علاقه مندان به تدریس و شرایط جذب اساتید",
    image: ttc,
    name: "8",
    alt: "ttc",
    url: "/ttc",
  },
];

const menuItems = [
  {
    id: "4",
    title: "درباره ما",
    subMenu: [
      {
        id: "41",
        title: "ارتباط با شعبه ها",
      },
      {
        id: "42",
        title: "همکاری با ما",
      },
      {
        id: "43",
        title: "تماس با پشتیبانی",
      },
    ],
  },
  {
    id: "3",
    title: "درباره ما",
    subMenu: [
      {
        id: "31",
        title: "درباره موسسه",
      },
      {
        id: "32",
        title: "قوانین و مقررات",
      },
      {
        id: "33",
        title: "سوالات متداول",
      },
    ],
  },
  {
    id: "2",
    title: "آموزش آیلتس",
    subMenu: [
      {
        id: "21",
        title: "دوره های آیلتس",
      },
      {
        id: "22",
        title: "خدمات تضمین قبولی آزمون",
      },
      {
        id: "23",
        title: "امتحانات ماک آیلتس",
      },
      {
        id: "24",
        title: "کارگاه تک مهارتی",
      },
    ],
  },
  {
    id: "1",
    title: "دوره های عمومی",
    subMenu: [
      {
        id: "11",
        title: "دوره های آنلاین",
      },
      {
        id: "12",
        title: "دوره های کودکان",
      },
      {
        id: "13",
        title: "دوره های نوجوانان",
      },
      {
        id: "14",
        title: "دوره های بزرگسالان",
      },
      {
        id: "15",
        title: "دوره های مکالمه متمرکز",
      },
    ],
  },
];
const levels = [
  {
    id: "1",
    body: "Beginner/Elementary دوره های",
    paragraph: "TTC برگزاری دوره های تخصصی",
    image: level1,
    name: "ttcImage",
    alt: "ttc-image",
    url: "/ttc",
  },
  {
    id: "2",
    body: "Pre Intermediate دوره های",
    paragraph: "",
    image: level2,
    name: "ieltsImage",
    alt: "ielts-image",
    url: "/ielts",
  },
  {
    id: "3",
    body: "Intermediate دوره های",
    paragraph: "",
    image: level3,
    name: "3",
    alt: "intermediate",
    url: "/intermediate",
  },
  {
    id: "4",
    body: "Upper Intermediate دوره های",
    paragraph: "",
    image: level4,
    name: "4",
    alt: "begginer",
    url: "/begginer",
  },
  {
    id: "5",
    body: "Advanced دوره های",
    paragraph: "",
    image: level5,
    name: "5",
    alt: "advanced",
    url: "/advanced",
  },
  {
    id: "6",
    body: "Proficient دوره های",
    paragraph: "",
    image: level6,
    name: "5",
    alt: "advanced",
    url: "/advanced",
  },
];
const onlineOptions = [
  {
    id: "1",
    body: "مشاوره آنلاین و رایگان",
    paragraph:
      "جلسه مشاوره آنلاین با کادر مجرب مجموعه جهت تعیین سطح دقیق و ارزیابی مهارت ها",
    image: ttc,
    name: "ttcImage",
    alt: "ttc-image",
  },
  {
    id: "2",
    body: "مشاوره آزمون های معتبر",
    paragraph:
      "جلسه مشاوره با اساتید مجموعه جهت اقدام برای شرکت در آزمون های معتبر بین المللی",
    image: ielts,
    name: "ieltsImage",
    alt: "ielts-image",
  },
  {
    id: "3",
    body: "برگزاری آزمون های آزمایشی",
    paragraph:
      "برگزاری آزمون های معتبر آزمایشی جهت آماده سازی داوطلبان برای شرکت در آزمون",
    image: intermediate,
    name: "3",
    alt: "intermediate",
  },
  {
    id: "4",
    body: "کلاس های مکالمه",
    paragraph:
      "کلاس های مکالمه آزاد برای سطوح پیشرفته با به کارگیری جدید ترین متد های روز",
    image: begginer,
    name: "4",
    alt: "begginer",
  },
];
const shoppingItems = [
  {
    id: "1",
    body: "American English File starter",
    paragraph: "",
    image: amf0,
    name: "ttcImage",
    alt: "ttc-image",
    url: "/ttc",
  },
  {
    id: "2",
    body: "American English File 1",
    paragraph: "",
    image: amf1,
    name: "ieltsImage",
    alt: "ielts-image",
    url: "/ielts",
  },
  {
    id: "3",
    body: "American English File 2",
    paragraph: "",
    image: amf2,
    name: "3",
    alt: "intermediate",
    url: "/intermediate",
  },
  {
    id: "4",
    body: "American English File 3",
    paragraph: "",
    image: amf3,
    name: "4",
    alt: "begginer",
    url: "/begginer",
  },
  {
    id: "5",
    body: "American English File 4",
    paragraph: "",
    image: amf4,
    name: "5",
    alt: "advanced",
    url: "/advanced",
  },
  {
    id: "6",
    body: "American English File 5",
    paragraph: "",
    image: amf5,
    name: "6",
    alt: "tofel",
    url: "/tofel",
  },
  {
    id: "6",
    body: "Dictionary",
    paragraph: "",
    image: dictionary,
    name: "6",
    alt: "tofel",
    url: "/tofel",
  },
  {
    id: "7",
    body: "Top Notch",
    paragraph: "",
    image: topNotch,
    name: "7",
    alt: "tofel",
    url: "/tofel",
  },
];

export {
  cardData,
  carouselData,
  menuItems,
  onlineOptions,
  shoppingItems,
  levels,
};
