import Link from "next/link";
import React, { useState } from "react";

interface Props {
  type: "all" | "group" | "item";
  title: string;
  icon: JSX.Element;
  selectedGroup?: string | null;
  href?: string | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export const NavItem = (props: Props) => {
  return (
    <div className="w-full">
      <Link
        className={`mb-4 flex flex-col justify-center items-center`}
        href={props.href ? props.href : "/"}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
      >
        <div
          className={`${
            props.type == "all"
              ? "bg-[#ff4141] text-white hover:bg-[#c90000] hover:text-white"
              : props.selectedGroup == null ||
                props.selectedGroup != props.title
              ? "bg-white text-black hover:bg-[#4671f8] hover:text-white"
              : "bg-[#4671f8] text-white"
          } w-12 h-12 rounded mb-1 flex flex-col justify-center items-center border border-[#ededed]`}
        >
          {props.icon}
        </div>
        <div className="text-[10px] text-center leading-tight">
          {props.title}
        </div>
      </Link>
    </div>
  );
};
