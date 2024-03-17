import { ITool } from "@/tools_data";
import React from "react";

interface Props {
  currentGroup: string | null;
  currentItem: ITool | null;
}

export const TitleBar = (props: Props) => {
  return (
    <div className="h-12 w-full bg-[#f1f4ff] border-b border-[#ededed] flex items-center justify-start px-5">
      {props.currentItem
        ? `${props.currentGroup} > ${props.currentItem.name}`
        : "Welcome to Tools Center!"}
    </div>
  );
};
