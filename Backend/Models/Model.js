const axios = require("axios");
const config = require("../Config/Config");
let data = [
  {
    id: 1,
    name: "rudresh",
    age: 10,
  },
  {
    id: 2,
    name: "rahul",
    age: 20,
  },
  {
    id: 3,
    name: "rajesh",
    age: 50,
  },
];
const getUserModel = () => {
  try {
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
const addUserModel = (payload) => {
  try {
    data = [...data, payload];
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
const deleteUserModel = (params) => {
  try {
    const updatedData = data.filter((ele) => ele.id !== +params.id);
    data = [...updatedData];
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
const editUserModel = (body, params) => {
  try {
    const user = data.find((ele) => ele.id === +params.id);
    console.log(user);
    user.name = body.name;
    return user;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
const currentWeatherModel = async () => {
  try {
    const data = await axios.get(
      config.weatherApi.url +
        "/current.json" +
        "?key=" +
        config.weatherApi.key +
        "&q=" +
        "jaipur" +
        "&aqi=" +
        "no"
    );
    return data.data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
module.exports = {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
  currentWeatherModel,
};
