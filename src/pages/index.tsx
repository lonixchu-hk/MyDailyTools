import Image from "next/image";
import { Inter } from "next/font/google";
import { SideNavContainer } from "@/nav/SideNavContainer";
import { toolsData } from "@/tools_data";
import { NavItem } from "@/nav/NavItem";

export default function Home() {
  // Make this index page the dashboard for the tools center
  return (
    <div className="flex flex-col justify-start items-start my-4 px-5">
      {toolsData.map((item, index) => (
        <div className="tool-dashboard-section w-full" key={index}>
          <h1>{item.name}</h1>
          <div className="grid grid-cols-4 md:grid-cols-8 mt-5">
            {item.tools.map((subItem, subIndex) => (
              <NavItem
                key={subIndex}
                type="item"
                title={subItem.name}
                icon={subItem.icon}
                href={subItem.href}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
