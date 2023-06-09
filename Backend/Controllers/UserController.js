const {
  getUsersModel,
  addUsersModel,
  addStudentModel,
  editUsersModel,
  deleteUserModel,
  getUserModel,
} = require("../Models/UserModel");
const getUsers = async (req, res) => {
  try {
    const data = await getUsersModel();
    const resData = {
      data,
      total: data.length,
    };
    res.status(200).json(resData);
  } catch (error) {
    console.error("controller error", error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
};
const getUser = async (req, res) => {
  try {
    const username = req.query.name || "";
    const data = await getUserModel({ username });
    const resData = {
      data,
      total: data.length,
    };
    res.status(200).json(resData);
  } catch (error) {
    console.error("controller error", error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
};

const addUsers = async (req, res) => {
  try {
    const payload = { ...req.body } || {};
    const user = await addUsersModel(payload);
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
};
const editUser = async (req, res) => {
  try {
    const username = req.query.name || "";
    const payload = req.body || {};
    const user = await editUsersModel({ username, payload });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
};
const deleteUser = async (req, res) => {
  try {
    const username = req.query.name || "";
    const user = await deleteUserModel(username);
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
};
const addStudents = async (req, res) => {
  try {
    const student = await addStudentModel();
    res.status(200).json(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message, status: 500 });
  }
};

module.exports = {
  getUsers,
  addUsers,
  addStudents,
  editUser,
  deleteUser,
  getUser,
};
