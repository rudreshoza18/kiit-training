import React, { useState } from "react";
import {
  getWetherDetails,
  getWetherDayForecast,
} from "../../Shared/Api/WeatherApi";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import moment from "moment";
import Loader from "../../Shared/Loader";
import { useEffect } from "react";
import WeatherDetailsBox from "./WeatherDetailsBox/WeatherDetailsBox";
import { WeatherCurrentDetails } from "./WeatherCurrentDetails/WeatherCurrentDetails";
import { WeatherSearch } from "./WeatherSearch/WeatherSearch";
import WeatherTemp from "./WeatherTemp/WeatherTemp";
const Weather = () => {
  const [cityname, setCityName] = useState("");
  const [checkTempDegree, setCheckTempDegree] = useState("c");

  const [toggleClass, setToggleClass] = useState(false);

  const [weatherDetails, setWeatherDetails] = useState({
    current: {
      condition: {},
    },
    location: {},
  });
  const [weatherForecastData, setWeatherForecastData] = useState({
    location: {},
    forecast: {
      forecastday: [
        {
          hour: [],
        },
      ],
    },
    current: {},
  });

  const [loader, setLoader] = useState(true);

  const getCurrentWeatherHandler = async () => {
    setLoader(true);
    const weatherDetails = await getWetherDetails(cityname);
    const weatherForecast = await getWetherDayForecast(cityname);
    const weatherForeCastData = (await weatherForecast.data) || {};
    const weatherData = (await weatherDetails.data) || {};
    setWeatherDetails({ ...weatherData });
    setWeatherForecastData({ ...weatherForeCastData });
    setLoader(false);
  };

  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };

  const toggleTempHandler = (temp) => {
    setCheckTempDegree(temp);
    setToggleClass(!toggleClass);
  };
  useEffect(() => {
    console.log(weatherForecastData);
  }, [weatherForecastData]);

  return (
    <>
      {/* toggle between temp */}
      {!loader && (
        <WeatherTemp
          toggleClass={toggleClass}
          toggleTempHandler={toggleTempHandler}
        />
      )}
      {/* search city input */}
      <WeatherSearch
        cityNameHandler={cityNameHandler}
        getCurrentWeatherHandler={getCurrentWeatherHandler}
      />

      {/* weather details box */}
      {!loader && <WeatherDetailsBox location={weatherDetails.location} />}
      {/* weather details box */}
      {!loader && (
        <WeatherCurrentDetails
          current={weatherDetails.current}
          forecast={weatherForecastData.forecast}
          checkTemp={checkTempDegree}
        />
      )}
      {loader && (
        <div className="flex justify-center items-center my-5rem">
          <Loader loaderType={"progress"} />
        </div>
      )}
    </>
  );
};

export default Weather;
