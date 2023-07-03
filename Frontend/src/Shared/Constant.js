import { RxCounterClockwiseClock } from "react-icons/rx";
import { DiReact } from "react-icons/di";
import { GiBodyHeight, GiSpaceShuttle } from "react-icons/gi";
import { TiWeatherCloudy } from "react-icons/ti";
import { TbUserPlus } from "react-icons/tb";
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
  {
    route: "/spacex",
    name: "spaceX",
    icons: <GiSpaceShuttle />,
  },
  {
    route: "/adduser",
    name: "addusers",
    icons: <TbUserPlus />,
  },
  {
    route: "/users",
    name: "users",
    icons: <TbUserPlus />,
  },
];
