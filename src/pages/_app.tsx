import { SideNavContainer } from "@/nav/SideNavContainer";
import { TitleBar } from "@/nav/TitleBar";
import "@/pages/styles/globals.css";
import { ITool, toolsData } from "@/tools_data";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [currentGroup, setCurrentGroup] = useState<string | null>(null);
  const [currentItem, setCurrentItem] = useState<ITool | null>(null);
  useEffect(() => {
    const getCurrentPageItem = () => {
      setCurrentGroup(null);
      setCurrentItem(null);
      toolsData.map((item) =>
        item.tools.map((subItem) => {
          if (subItem.href == router.pathname) {
            setCurrentGroup(item.name);
            setCurrentItem(subItem);
          }
        })
      );
    };
    getCurrentPageItem();
  }, [router.pathname]);

  return (
    <main className={`h-screen w-screen flex ${inter.className}`}>
      <SideNavContainer currentGroup={currentGroup} currentItem={currentItem} />
      <div className="h-screen w-full flex flex-col justify-start items-left">
        <TitleBar currentGroup={currentGroup} currentItem={currentItem} />
        <Component {...pageProps} />
      </div>
    </main>
  );
}
