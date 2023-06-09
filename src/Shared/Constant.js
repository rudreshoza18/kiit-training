import { RxCounterClockwiseClock } from "react-icons/rx";
import { DiReact } from "react-icons/di";
import { GiBodyHeight } from "react-icons/gi";
import { TiWeatherCloudy } from "react-icons/ti";
export const navbar = [
  {
    route: "/",
    name: "counter",
    icons: <RxCounterClockwiseClock />,
  },
  {
    route: "/useeffect",
    name: "useeffect",
    icons: <DiReact />,
  },
  {
    route: "/bmi",
    name: "bmi",
    icons: <GiBodyHeight />,
  },
  {
    route: "/weather",
    name: "weather",
    icons: <TiWeatherCloudy />,
  },
  {
    route: "/counter1",
    name: "counter1",
    icons: <TiWeatherCloudy />,
  },
];
