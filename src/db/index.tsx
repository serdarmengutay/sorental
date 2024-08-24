import { FaHeart } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import image from "../assets/images/avatar.jpg";

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
