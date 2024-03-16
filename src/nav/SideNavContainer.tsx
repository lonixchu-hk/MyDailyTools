import React, { useEffect, useState } from "react";
import { NavItem } from "./NavItem";
import toolsData from "../tools_data";
import { IconLayoutDashboard } from "@tabler/icons-react";

export const SideNavContainer = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [clickKeepShowSubMenu, setClickKeepShowSubMenu] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  const enterMenuItem = (menuName: string | null) => {
    setShowSubMenu(true);
    setHoverMenu(menuName);
  };

  const leaveMenuItem = () => {
    if (!clickKeepShowSubMenu) {
      setShowSubMenu(false);
      setHoverMenu(null);
    }
  };

  useEffect(() => {
    setClickKeepShowSubMenu(selectedGroup !== "");
  }, [selectedGroup]);

  return (
    <div onMouseLeave={() => leaveMenuItem()}>
      {/* Menu */}
      <div className="h-screen w-20 bg-[#f1f4ff] z-20 py-5">
        <div
          className="flex flex-col items-center"
          onMouseLeave={() => leaveMenuItem()}
        >
          <NavItem
            type="all"
            title="All"
            icon={<IconLayoutDashboard />}
            href="/"
            onMouseEnter={() => leaveMenuItem()}
          />
          {toolsData.map((item, index) => (
            <NavItem
              key={index}
              type="group"
              title={item.name}
              icon={item.icon}
              selectedGroup={selectedGroup}
              onMouseEnter={() => enterMenuItem(item.name)}
              onClick={() => {
                setSelectedGroup(selectedGroup == item.name ? "" : item.name);
              }}
            />
          ))}
        </div>
      </div>

      {/* Sub Menu Layer */}
      <div
        className={`${
          showSubMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-100 absolute left-20 top-0 z-10 h-screen w-[calc(100%-5rem)] bg-[#00000020]`}
        onClick={() => {
          setClickKeepShowSubMenu(false);
          setSelectedGroup("");
          setShowSubMenu(false);
          setHoverMenu(null);
        }}
        onMouseEnter={() => leaveMenuItem()}
      >
        {/* Sub Menu */}
        <div
          className=" h-screen w-20 bg-[#f1f4ff] z-20 p-2 py-5 flex flex-col items-center border-l-2 border-[#ddd]"
          onMouseEnter={() => enterMenuItem(hoverMenu)}
          onMouseLeave={() => leaveMenuItem()}
        >
          {toolsData.map((item, index) =>
            hoverMenu == item.name
              ? item.tools.map((subItem, index) => (
                  <NavItem
                    key={index}
                    type="item"
                    title={subItem.name}
                    icon={subItem.icon}
                    group={item.name}
                    // onMouseEnter={() => setShowSubMenu(true)}
                    // onMouseLeave={() => setShowSubMenu(false)}
                  />
                ))
              : null
          )}
        </div>
      </div>
    </div>
  );
};
