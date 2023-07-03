import { localURL, userURL } from "../../Config/WeatherConfig";
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
export const getRockets = async () => {
  try {
    const url = localURL + `space/rockets`;
    const weatherFetch = await fetch(url);
    const weatherData = await weatherFetch.json();
    return weatherData;
  } catch (error) {
    console.error("CATCH FORECAST ERROR", error.message);
    return error;
  }
};
export const getRocketServices = async (rocketId = "") => {
  try {
    const url = localURL + `space/rocket/${rocketId}`;
    const weatherFetch = await fetch(url);
    const weatherData = await weatherFetch.json();
    return weatherData;
  } catch (error) {
    console.error("CATCH FORECAST ERROR", error.message);
    return error;
  }
};
export const addUser = async (
  payload = { name: "", age: "", isActive: false }
) => {
  try {
    const url = userURL + `user`;
    const weatherData = await axios.post(url, payload);
    return weatherData;
  } catch (error) {
    console.error("CATCH ADD USER ERROR", error.message);
    return error;
  }
};
export const getUsers = async (
  payload = { name: "", age: "", isActive: false }
) => {
  try {
    const url = userURL + `users`;
    const weatherAxios = await axios.get(url);
    const weatherData = await weatherAxios.data;
    return weatherData;
  } catch (error) {
    console.error("CATCH GET USERS ERROR", error.message);
    return error;
  }
};
