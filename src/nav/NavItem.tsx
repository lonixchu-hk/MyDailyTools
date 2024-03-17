import { IconCircleCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  type: "current" | "all" | "group" | "item";
  title: string;
  icon: JSX.Element;
  selectedGroup?: string | null;
  currentGroup?: string | null;
  currentItem?: string | null;
  href?: string | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export const NavItem = (props: Props) => {
  return (
    <div className="w-full h-fit flex justify-center items-center">
      <Link
        className={`w-fit mb-4 px-2 flex flex-col justify-center items-center ${
          props.type == "current" ? "disabled" : ""
        }`}
        href={props.href ? props.href : "#"}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onClick={props.onClick}
      >
        <div
          className={`${
            props.type == "all"
              ? "bg-[#ff4141] text-white hover:bg-[#c90000] hover:text-white"
              : props.type == "current"
              ? "bg-[#cfc6b9] text-white"
              : (props.type == "group" && props.currentGroup == props.title) ||
                (props.type == "item" && props.currentItem == props.title)
              ? "bg-[#4671f8] text-white"
              : props.selectedGroup == null ||
                props.selectedGroup != props.title
              ? "bg-white text-black hover:bg-[#9cb0f1] hover:text-white"
              : "bg-[#9cb0f1] text-white"
          } w-12 h-12 relative rounded mb-1 flex flex-col justify-center items-center border border-[#ededed]`}
        >
          {props.icon}
          {props.type == "current" ? (
            <div className="absolute right-[-10px] bottom-[-5px] rounded-sm bg-white text-[#e7700d] text-[10px] px-1">
              Using
            </div>
          ) : null}
          {(props.type == "group" && props.currentGroup == props.title) ||
          (props.type == "item" && props.currentItem == props.title) ? (
            <div className="absolute right-[-5px] bottom-[-5px] rounded-full bg-white">
              <IconCircleCheckFilled color="#e7700d" size="17" />
            </div>
          ) : null}
        </div>
        <div className="text-[10px] text-center leading-tight">
          {props.title}
        </div>
      </Link>
    </div>
  );
};
