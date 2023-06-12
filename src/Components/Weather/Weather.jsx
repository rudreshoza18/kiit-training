import React, { useState } from "react";
import { getWetherDetails } from "../../Shared/Api/WeatherApi";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import moment from "moment";
import Loader from "../../Shared/Loader";
const Weather = () => {
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");
  const [cityname, setcityname] = useState("");

  const [loader, setLoader] = useState(true);

  const getCurrentWeatherHandler = async () => {
    const weatherDetails = await getWetherDetails(cityname);
    const weatherData = (await weatherDetails.data) || {};
    console.log(weatherData?.location);
    setCity(weatherData?.location?.name);
    setRegion(weatherData?.location?.region);
    setCountry(weatherData?.location?.country);
    const customTime = moment
      .unix(weatherData?.location?.localtime_epoch)
      .format("dddd, MMMM Do, YYYY h:mm:ss A");
    setTime(customTime);
    if (weatherData.location) {
      setLoader(false);
    } else {
      setLoader(true);
    }
  };
  const cityNameHandler = (event) => {
    setcityname(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <Input
          placeholder="enter cityname"
          className="w-80"
          label="cityname"
          onChange={cityNameHandler}
          value={cityname}
          type="text"
        />
      </div>
      <div className="flex justify-around items-center my-10">
        {loader ? (
          <Loader />
        ) : (
          <div className="border rounded-lg my-10  mx-5 py-8 px-5">
            <div>City:-{city}</div>
            <div>Region:-{region}</div>
            <div>Time:-{time}</div>
            <div>Country:-{country}</div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center my-5">
        <Button buttonname="submit" onClick={getCurrentWeatherHandler} />
      </div>
    </>
  );
};

export default Weather;
