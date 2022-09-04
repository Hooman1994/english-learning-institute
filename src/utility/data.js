import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import english1 from "../assets/images/english1.webp";
import english2 from "../assets/images/english2.png";
import english3 from "../assets/images/english3.png";
import english4 from "../assets/images/english4.png";

const carouselData = [
  {
    id: "1",
    imageSource: image1,
    name: "1",
    alt: "image 1",
  },
  {
    id: "2",
    imageSource: image2,
    name: "2",
    alt: "image 2",
  },
  {
    id: "3",
    imageSource: image3,
    name: "3",
    alt: "image 3",
  },
];

const cardData = [
  {
    id: "1",
    bodyOne: "از ابتدایی ترین سطح",
    bodyTwo: "از ابتدایی ترین سطح شروع کنید و پیشرفت را با ما تجربه کنید",
    image: english1,
    name: "1",
    alt: "english1",
  },
  {
    id: "2",
    bodyOne: "مقالات",
    bodyTwo: "مقالات ما را مطالعه کنید و از امکانات بیشتر سایت بهره مند شوید.",
    image: english2,
    name: "2",
    alt: "english2",
  },
  {
    id: "3",
    bodyOne: "کلاس های گروهی و مکالمه",
    bodyTwo: "کلاس های گروهی را با همکلاس های خود شروع کنید.",
    image: english3,
    name: "3",
    alt: "english3",
  },
  {
    id: "4",
    bodyOne: "تدریس تعاملی",
    bodyTwo: "اساتید ما همواره در صدد ترغیب بیشتر شما برای یادگیزی هستند.",
    image: english4,
    name: "4",
    alt: "english4",
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
