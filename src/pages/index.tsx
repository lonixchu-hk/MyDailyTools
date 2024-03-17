import Image from "next/image";
import { Inter } from "next/font/google";
import { SideNavContainer } from "@/nav/SideNavContainer";
import { MainContent } from "./main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>Welcome to Tools Center</div>;
}
