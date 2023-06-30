const {
  getUsers,
  addUsers,
  addStudents,
  editUser,
  deleteUser,
} = require("../Controllers/UserController");
const routes = require("express").Router();

routes.get("/users", getUsers);
routes.post("/users", addUsers);
routes.post("/students", addStudents);
routes.put("/user", editUser);
routes.delete("/user", deleteUser);

module.exports = routes;
