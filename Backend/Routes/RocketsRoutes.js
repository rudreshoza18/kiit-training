const { getRockets, getRocket } = require("../Controllers/RocketController");

const routes = require("express").Router();

routes.get("/rockets", getRockets);
routes.get("/rocket/:id", getRocket);

module.exports = routes;
