import React from "react";

interface Props {
  children: string | JSX.Element | JSX.Element[] | string[] | null;
}

export const Tool = (props: Props) => {
  return <div className="py-8 px-5">{props.children}</div>;
};
