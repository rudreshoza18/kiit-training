const { getRocketsModel, getRocketModel } = require("../Models/RocketModel");
const getRockets = async (request, response) => {
  try {
    const rockets = await getRocketsModel();
    if (!!rockets && rockets.length === 0 && Array.isArray(rockets)) {
      const emptyRockets = {
        data: [],
        total: 0,
        message: "no rockets available",
        status: 400,
      };
      response.status(400).json(emptyRockets);
    } else {
      const successResponse = {
        data: rockets || [],
        total: rockets.length || 0,
        message: "SUCCESS!!",
        status: 200,
      };
      response.status(200).json(successResponse);
    }
  } catch (error) {
    console.error(error.message);
    const errorResponse = {
      data: [],
      total: 0,
      message: error.message || "internal server error",
      status: 500,
    };
    response.status(500).json(errorResponse);
  }
};
const getRocket = async (request, response) => {
  const { id } = request.params;
  try {
    const rockets = await getRocketModel(id);
    if (!!rockets && rockets.length === 0 && Array.isArray(rockets)) {
      const emptyRockets = {
        data: [],
        total: 0,
        message: "no rockets available",
        status: 400,
      };
      response.status(400).json(emptyRockets);
    } else {
      const successResponse = {
        data: rockets || [],
        total: rockets.length || 0,
        message: "SUCCESS!!",
        status: 200,
      };
      response.status(200).json(successResponse);
    }
  } catch (error) {
    console.error(error.message);
    const errorResponse = {
      data: [],
      total: 0,
      message: error.message || "internal server error",
      status: 500,
    };
    response.status(500).json(errorResponse);
  }
};
module.exports = { getRockets, getRocket };
