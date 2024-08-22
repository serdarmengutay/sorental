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
