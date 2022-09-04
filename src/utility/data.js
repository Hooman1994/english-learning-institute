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
    bodyTwo: "test test 123",
    image: english1,
    name: "1",
    alt: "english1",
  },
  {
    id: "2",
    bodyOne: "456",
    bodyTwo: "test test 456",
    image: english2,
    name: "2",
    alt: "english2",
  },
  {
    id: "3",
    bodyOne: "789",
    bodyTwo: "test test 789",
    image: english3,
    name: "3",
    alt: "english3",
  },
  {
    id: "4",
    bodyOne: "000",
    bodyTwo: "test test 000",
    image: english4,
    name: "4",
    alt: "english4",
  },
];

export { cardData, carouselData };
