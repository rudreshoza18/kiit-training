import { localURL } from "../../Config/WeatherConfig";
import axios from "axios";
export const getWetherDetails = async (cityName) => {
  try {
    const url = localURL + `currentweather?city=${cityName}&aqi=no`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error("CATCH ERROR", error.message);
    return error;
  }
};

export const getWetherDayForecast = async (cityName) => {
  try {
    const url =
      localURL + `forecastweather?city=${cityName}&aqi=no&days=1&alert=no`;
    const weatherData = await axios.get(url);
    return weatherData;
  } catch (error) {
    console.error("CATCH FORECAST ERROR", error.message);
    return error;
  }
};
