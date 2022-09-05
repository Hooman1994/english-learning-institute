import cover1 from "../assets/images/cover1.png";
import cover2 from "../assets/images/cover2.png";
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
  // {
  //   id: "3",
  //   imageSource: image3,
  //   name: "3",
  //   alt: "image 3",
  // },
];

const cardData = [
  {
    id: "1",
    bodyOne: "شهریه کلاس ها و دوره ها",
    bodyTwo: "اطلاع از نحوه پرداخت و جدول پرداخت شهریه زبان آموزان",
    image: fee,
    name: "1",
    alt: "fee",
  },
  {
    id: "2",
    bodyOne: "واحد های آموزشگاه",
    bodyTwo: "آشنایی با واحد های آموزشی، کادر مجرب ما و مدیریت کلاس ها",
    image: introduction,
    name: "2",
    alt: "introduction",
  },
  {
    id: "3",
    bodyOne: "دوره های آموزشی",
    bodyTwo: "آشنایی با ادوار اموزشی و کلاس ها و متد های آموزشی آموزشگاه",
    image: online,
    name: "3",
    alt: "online",
  },
  {
    id: "4",
    bodyOne: "تقویم آموزشی",
    bodyTwo: "مشاهده تقویم برگزاری کلاس ها و دوره ها",
    image: calendar,
    name: "4",
    alt: "calendar",
  },
  {
    id: "5",
    bodyOne: "تعیین سطح",
    bodyTwo: "برگزاری آزمون تعیین سطح با پیشرفته ترین متد ها",
    image: levelTest,
    name: "5",
    alt: "levelTest",
  },
  {
    id: "6",
    bodyOne: "خدمات آنلاین",
    bodyTwo:
      "آشنایی با خدمات آنلایناعم از کلاس های غیر حضوری، دوره های نیمه آفلاین و پشتیبانی زبان آموزان",
    image: onlineServices,
    name: "6",
    alt: "onlineServices",
  },
  {
    id: "7",
    bodyOne: "فروشگاه کتاب ما",
    bodyTwo: "معرفی کتاب های مورد تائید آموزشگاه و خرید کتاب های کمک آموزشی",
    image: store,
    name: "7",
    alt: "store",
  },
  {
    id: "8",
    bodyOne: "دوره های TTC و جذب اساتید",
    bodyTwo: "برگزاری دوره های آموزش علاقه مندان به تدریس و شرایط جذب اساتید",
    image: ttc,
    name: "8",
    alt: "ttc",
  },
];

const menuItems = [
  {
    id: "3",
    title: "تماس با ما",
    subMenu: [
      {
        id: "31",
        title: "راه های ارتباطی",
      },
      {
        id: "32",
        title: "انتقادات  پیشنهادات",
      },
    ],
  },
  {
    id: "2",
    title: "درباره ما",
    subMenu: [
      {
        id: "21",
        title: "عناوین  و جوایز",
      },
      {
        id: "22",
        title: "آلبوم",
      },
    ],
  },
  {
    id: "1",
    title: "ثبت نام",
    subMenu: [
      {
        id: "11",
        title: "دوره ها",
      },
      {
        id: "12",
        title: "کلاس ها",
      },
    ],
  },
];

export { cardData, carouselData, menuItems };
