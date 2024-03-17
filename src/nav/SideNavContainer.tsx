import React, { useEffect, useState } from "react";
import { NavItem } from "./NavItem";
import { toolsData, ITool } from "../tools_data";
import { IconLayoutDashboard } from "@tabler/icons-react";

interface Props {
  currentGroup: string | null;
  currentItem: ITool | null;
}

export const SideNavContainer = (props: Props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [clickKeepShowSubMenu, setClickKeepShowSubMenu] = useState(false);
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  const enterMenuItem = (menuName: string | null) => {
    setShowSubMenu(true);
    setHoverMenu(menuName);
    setSelectedGroup(menuName ?? "");
  };

  const leaveMenuItem = () => {
    if (!clickKeepShowSubMenu) {
      setShowSubMenu(false);
      setHoverMenu(null);
    }
  };

  useEffect(() => {
    if (selectedGroup == "" && !clickKeepShowSubMenu) {
      setShowSubMenu(false);
      setHoverMenu(null);
    } else {
      setShowSubMenu(true);
      setHoverMenu(selectedGroup);
    }
  }, [selectedGroup]);

  useEffect(() => {
    if (!clickKeepShowSubMenu) {
      setSelectedGroup("");
    }
  }, [clickKeepShowSubMenu]);

  return (
    <div>
      {/* Menu */}
      <div className="h-screen w-20 bg-[#f1f4ff] z-20 py-5 border-r border-[#cdcdcd]">
        <div className="flex flex-col items-center">
          {props.currentItem ? (
            <div className="flex flex-col items-center">
              <NavItem
                type="current"
                title={props.currentItem.name}
                icon={props.currentItem.icon}
              />
              <div className="border-b border-[#cdcdcd] w-12 mb-4"></div>
            </div>
          ) : null}
          <NavItem
            type="all"
            title="All"
            icon={<IconLayoutDashboard />}
            href="/"
          />
          {toolsData.map((item, index) => (
            <NavItem
              key={index}
              type="group"
              title={item.name}
              icon={item.icon}
              selectedGroup={selectedGroup}
              currentGroup={props.currentGroup}
              onMouseEnter={() => {
                enterMenuItem(item.name);
                if (clickKeepShowSubMenu) {
                  setSelectedGroup(item.name);
                }
              }}
              onClick={() => {
                setClickKeepShowSubMenu(!clickKeepShowSubMenu);
              }}
            />
          ))}
        </div>
      </div>

      {/* Sub Menu Layer */}
      <div
        className={`${
          showSubMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-100 absolute left-20 top-0 z-10 h-screen w-[calc(100%-5rem)] bg-[#00000020] flex`}
      >
        {/* Sub Menu */}
        <div
          className=" h-screen w-60 bg-[#f1f4ff] z-20 p-2 py-5"
          onMouseEnter={() => enterMenuItem(hoverMenu)}
        >
          <div className="w-full grid grid-cols-2">
            {toolsData.map((item, index) =>
              hoverMenu == item.name
                ? item.tools.map((subItem, index) => (
                    <NavItem
                      key={index}
                      type="item"
                      title={subItem.name}
                      icon={subItem.icon}
                      currentItem={
                        props.currentItem ? props.currentItem.name : ""
                      }
                      onClick={() => {
                        setClickKeepShowSubMenu(false);
                        setShowSubMenu(false);
                        setHoverMenu(null);
                      }}
                      href={subItem.href}
                    />
                  ))
                : null
            )}
          </div>
        </div>
        {/* buffer */}
        <div className="h-screen w-20" />
        {/* overlay */}
        <div
          className="h-screen w-[calc(100%-5rem)]"
          onClick={() => {
            setClickKeepShowSubMenu(false);
          }}
          onMouseEnter={() =>
            !clickKeepShowSubMenu ? setSelectedGroup("") : null
          }
        />
      </div>
    </div>
  );
};
