const router = require("express").Router();
const {
  getUser,
  addUser,
  editUser,
  deleteUser,
  currentWeather,
} = require("../Controllers/Controller");
// const express = require("express");
// const router = express.Router();
router.get("/user", getUser);
router.post("/user", addUser);
// edit data
router.put("/user", editUser);
//delete data
router.delete("/user", deleteUser);
router.get("/methods", (request, response) => {
  response.status = 200;
  response.json({
    currentOS: os.platform(),
    networkInterface: os.networkInterfaces(),
    uptime: os.uptime(),
    version: os.version(),
    browser: browser(request.headers["user-agent"]),
  });
});

router.get("/currentweather", currentWeather);
module.exports = router;
