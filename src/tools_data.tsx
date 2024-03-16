import {
  IconCode,
  IconJson,
  IconCoins,
  IconMoneybag,
} from "@tabler/icons-react";
import { JsonFormatter } from "./pages/tools/json-formatter";
import { CurrencyConverter } from "./pages/tools/currency-converter";

const toolsData = [
  {
    name: "Development",
    icon: <IconCode />,
    tools: [
      {
        name: "Json Formatter",
        icon: <IconJson />,
        tool: <JsonFormatter />,
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
        tool: <CurrencyConverter />,
      },
    ],
  },
];

export default toolsData;
