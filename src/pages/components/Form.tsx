import React from "react";

interface Props {
  children: string | JSX.Element | JSX.Element[] | string[] | null;
}

export const FormItem = (props: Props) => {
  return <div className="my-2">{props.children}</div>;
};
