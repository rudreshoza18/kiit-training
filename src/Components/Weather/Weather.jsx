import React, { useState } from "react";
import { getWetherDetails } from "../../Shared/Api/WeatherApi";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import moment from "moment";
import Loader from "../../Shared/Loader";
import { useEffect } from "react";
const Weather = () => {
  const [cityname, setCityName] = useState("");
  const [checkTempDegree, setCheckTempDegree] = useState("c");

  const [weatherDetails, setWeatherDetails] = useState({
    current: {
      condition: {},
    },
    location: {},
  });

  const [loader, setLoader] = useState(true);

  const getCurrentWeatherHandler = async () => {
    const weatherDetails = await getWetherDetails(cityname);
    const weatherData = (await weatherDetails.data) || {};
    console.log(weatherData);
    setWeatherDetails({ ...weatherData });
  };
  const cityNameHandler = (event) => {
    setCityName(event.target.value);
  };
  useEffect(() => {
    console.log(weatherDetails);
  }, [weatherDetails]);

  return (
    <>
      <div
        className="flex justify-end items-center
      md:w-100%
      md:mx-10
      md:px-10
       lg:w-70%
       lg:mx-5
       lg:my-5
       "
      >
        <button
          className="btn btn-error mx-2
        text-white
        rounded-none"
          onClick={() => setCheckTempDegree("f")}
        >
          &deg; F
        </button>
        <button
          className="btn btn-accent
        text-white
        rounded-none
        "
          onClick={() => setCheckTempDegree("c")}
        >
          &deg; C
        </button>
      </div>
      {/* search city input */}
      <div className="flex justify-center items-center">
        <Input
          placeholder="enter cityname"
          className="input-primary w-50rem"
          onChange={cityNameHandler}
          value={cityname}
          type="text"
        />
        <Button buttonname="submit" onClick={getCurrentWeatherHandler} />
      </div>

      {/* weather details box */}
      <div className="flex justify-start items-center mx-30rem ">
        <p style={{ margin: "1rem 0 1rem 0 " }}>
          <span className="font-sans text-4xl font-semibold">
            {weatherDetails.location.name} weather forecast,
          </span>
          <span className="text-gray text-2xl">
            {weatherDetails.location.region} {weatherDetails.location.country}
          </span>
        </p>
      </div>
      {/* weather details box */}
      <div
        className="bg-weather
      h-80
       bg-no-repeat bg-center bg-cover
       md:mx-24
       lg:mx-24rem
       md:py-5
       md:px-10
       my-5
       rounded-lg
       text-white
       "
      >
        <div className="flex justify-around align-top">
          <div className="flex justify-center items-center flex-row-reverse">
            <p>{weatherDetails.current.condition.text}</p>
            <figure>
              <img
                height={100}
                width={100}
                src={"https:" + weatherDetails.current.condition.icon}
                alt="weatherimage"
              />
            </figure>
          </div>
          <div className="flex-col justify-center items-center text-center">
            <p>wind {weatherDetails.current.wind_kph}</p>
            <p>prec {weatherDetails.current.precip_in} in</p>
            <p>pressure {weatherDetails.current.pressure_in}</p>
            <p className="text-3xl ">
              {checkTempDegree === "c" && (
                <span>{weatherDetails.current.temp_c} &deg;C</span>
              )}{" "}
              {checkTempDegree === "f" && (
                <span>{weatherDetails.current.temp_f} &deg;F</span>
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
