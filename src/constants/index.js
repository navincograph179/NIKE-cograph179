import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  shibuya,
  yoshida,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: "4.6",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: "4.9",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: "4.0",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: "4.1",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "配達無料",
    subtext: "弊社の無料配送サービスでスムーズなショッピングをお楽しみください。",
  },
  {
    imgURL: shieldTick,
    label: "安全なお支払い",
    subtext:
      "弊社の安全な支払いオプションで、安心して取引をお楽しみください。",
  },
  {
    imgURL: support,
    label: "お手伝いさせていただきます",
    subtext: "当社の専任チームがあらゆる段階でお客様をサポ​​ートします。",
  },
];

export const reviews = [
  {
    imgURL: shibuya,
    customerName: "Shibuya",
    rating: 4.5,
    feedback:
      "細部へのこだわりと製品の品質は私の期待を超えていました。強くお勧めします!",
  },
  {
    imgURL: yoshida,
    customerName: "Yoshida",
    rating: 4.5,
    feedback:
      "製品は期待を満たすだけでなく、期待を上回るものでした。私は間違いなくリピーターになるでしょう!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "navin_gurung@co-graph.com", link: "mailto:navin_gurung@co-graph.com" },
      { name: "+81123454489", link: "tel:+810704377156" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
