import { FaHeart } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import image from "../assets/images/avatar.jpg";
import imageCard from "../assets/images/car1.png";

export const navBarIcons = [
  {
    id: 1,
    onClick: () => console.log("Heart Clicked"),
    icon: <FaHeart />,
  },
  {
    id: 2,
    icon: <IoIosNotifications />,
    onClick: () => console.log("Notification Clicked"),
  },
  {
    id: 3,
    icon: <IoSettingsSharp />,
    onClick: () => console.log("Settings Clicked"),
  },
  {
    id: 4,
    image: image,
    onclick: () => console.log("Profile Clicked"),
  },
];

export const FooterList = [
  {
    title: "About",
    links: [
      { name: "About Us", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Press", url: "#" },
      { name: "Blog", url: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "FAQ", url: "#" },
      { name: "Shipping", url: "#" },
      { name: "Returns", url: "#" },
      { name: "Track Order", url: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Facebook", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Pinterest", url: "#" },
    ],
  },
];

export const showCardData = [
  {
    id: 1,
    title: `The Best Platform \n for Car Rental`,
    description: `Ease of doing a car rental safely and reliably. \n Of course at a low price.`,
    type: "best",
    image: imageCard,
  },
  {
    id: 2,
    title: `Easy way to rent \n a car at a low price`,
    description: `We provide the best service for you to rent a car \n at a low price and of course with the best quality.`,
    type: "easy",
    image: imageCard,
  },
];
