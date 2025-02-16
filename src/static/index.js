import { FaCar } from "react-icons/fa";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { MdGroups2 } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";

export const navbarLinks = ["Home", "About", "Contact", "Admin"];
export const homeINputs = ["title", "desc", "author", "type", "soldCount"];
export const reports = [
  { title: "Monthly Report", date: "January 2025" },
  { title: "Annual Report", date: "2024" },
  { title: "Weekly Summary", date: "Week 6, 2025" },
  { title: "Daily Activity", date: "February 16, 2025" },
];
export const likedCars = [
  { id: 1, name: "Tesla Model S", desc: "Electric, Autopilot, 405-mile range" },
  { id: 2, name: "BMW M3", desc: "3.0L Twin-Turbo, 473 HP, Rear-Wheel Drive" },
  { id: 3, name: "Audi R8", desc: "V10 Engine, Quattro AWD, 0-60 in 3.2s" },
  {
    id: 4,
    name: "Mercedes-AMG GT",
    desc: "Hand-built V8, 523 HP, Luxurious Design",
  },
  { id: 5, name: "Porsche 911 Turbo", desc: "Twin-Turbo Flat-6, 572 HP, AWD" },
];
export const carInputs = ["title", "desc", "brand", "year", "price"];
export const adminLinks = [
  { id: 1, path: "car", label: "Car", icon: FaCar },
  {
    id: 2,
    path: "createcars",
    label: "CreateCars",
    icon: VscGitPullRequestCreate,
  },
  { id: 6, path: "catalog", label: "Catalog", icon: GrCatalog },
  { id: 3, path: "groups", label: "Groups", icon: MdGroups2 },
  { id: 4, path: "users", label: "Users", icon: FaUserAlt },
  { id: 5, path: "shop", label: "Shop", icon: FaShoppingBag },
  { id: 7, path: "analytic", label: "Analytic", icon: IoMdAnalytics },
  { id: 8, path: "likes", label: "Likes", icon: AiFillLike },
  { id: 9, path: "reports", label: "Reports", icon: TbReportSearch },
  { id: 10, path: "settings", label: "Settings", icon: IoSettings },
];
export const catalogInfo = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$89,990",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2025-tesla-model-s-1-672d42e172407.jpg?crop=0.465xw:0.466xh;0.285xw,0.361xh&resize=2048:*",
  },
  {
    id: 2,
    name: "BMW M3",
    price: "$72,800",
    image:
      "https://cdn.motor1.com/images/mgl/1ZQrxK/s3/2023-bmw-m3-cs-first-drive-review.jpg",
  },
  {
    id: 3,
    name: "Audi R8",
    price: "$158,600",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.684xw:0.577xh;0.0321xw,0.281xh&resize=2048:*",
  },
  {
    id: 4,
    name: "Mercedes-AMG GT",
    price: "$96,950",
    image:
      "https://vehicle-images.dealerinspire.com/371b-110012062/thumbnails/large/W1KRJ7JB8SF004347/ba0b4f6d356b00ea51bd487b8627d3ea.jpg",
  },
];
