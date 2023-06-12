import { weatherKey, weatherURL } from "../../Config/WeatherConfig";
import axios from "axios";
export const getWetherDetails = async (cityName) => {
  try {
    const url =
      weatherURL + `current.json?key=${weatherKey}&q=${cityName}&aqi=no`;
    const weatherData = await axios.get(url);
    console.log("TRY BLOCK");
    return weatherData;
  } catch (error) {
    console.error("CATCH ERROR", error.message);
    return error;
  }
};
