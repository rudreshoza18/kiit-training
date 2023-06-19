const {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
  currentWeatherModel,
} = require("../Models/Model");
const getUser = (request, response) => {
  try {
    const userData = getUserModel();
    const responseObj = {
      total: userData.length || 0,
      data: undefined || [],
      message: "SUCCESS" || "",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.error(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const addUser = (request, response) => {
  const payload = { ...request.body };
  try {
    const userData = addUserModel(payload);
    const responseObj = {
      message: "user added successfully!!",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.error(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const editUser = (request, response) => {
  try {
    const body = request.body;
    const params = request.query;
    const editedData = editUserModel(body, params);
    const responseObj = {
      data: editedData || {},
      message: "edited successfully",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.error(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const deleteUser = (request, response) => {
  try {
    const params = request.query;
    deleteUserModel(params);
    const responseObj = {
      message: "user deleted successfully!!",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.error(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
const currentWeather = async (request, response) => {
  try {
    const params = request.query;
    const data = await currentWeatherModel();
    response.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    const errorObj = {
      total: 0,
      data,
      message: error.message,
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
module.exports = { getUser, addUser, deleteUser, editUser, currentWeather };
