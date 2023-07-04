const {
  getUsers,
  addUsers,
  addStudents,
  editUser,
  deleteUser,
  getUser,
} = require("../Controllers/UserController");
const routes = require("express").Router();

routes.get("/users", getUsers);
routes.post("/user", addUsers);
routes.put("/user", editUser);
routes.delete("/user", deleteUser);
routes.get("/user", getUser);

routes.post("/students", addStudents);
module.exports = routes;
