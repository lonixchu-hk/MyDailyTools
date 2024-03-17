import {
  IconCode,
  IconJson,
  IconCoins,
  IconMoneybag,
} from "@tabler/icons-react";

export interface ITool {
  name: string;
  icon: JSX.Element;
  href: string;
}

export const toolsData = [
  {
    name: "Development",
    icon: <IconCode />,
    tools: [
      {
        name: "Json Formatter",
        icon: <IconJson />,
        href: "/tools/json-formatter",
      },
    ],
  },
  {
    name: "Finance",
    icon: <IconMoneybag />,
    tools: [
      {
        name: "Currency Converter",
        icon: <IconCoins />,
        href: "/tools/currency-converter",
      },
    ],
  },
];
