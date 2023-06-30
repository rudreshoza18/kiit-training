const { Student } = require("../Schemas/Schemas");
const { Users } = require("../Schemas/UserSchemas");
const getUsersModel = async () => {
  try {
    const users = await Users.find({});
    return users;
  } catch (error) {
    console.error("get users", error.message);
    return error;
  }
};
const addUsersModel = async () => {
  try {
    const user = await Users.insertMany([
      { name: "ram", age: 49, isActive: false },
    ]);
    return user;
  } catch (error) {
    console.error("get users", error.message);
    throw error;
    //     return error;
  }
};

const editUsersModel = async () => {
  try {
    const editedUser = Users.updateOne({ name: "ram" }, { $set: { age: 40 } });
    return editedUser;
  } catch (error) {
    throw error;
  }
};
const deleteUserModel = async () => {
  try {
    const deletedUser = Users.deleteOne({ name: "ram" });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

const addStudentModel = async () => {
  try {
    const student = await Student.insertMany([
      { name: "david", rollNumber: 657 },
    ]);
    return student;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsersModel,
  addUsersModel,
  addStudentModel,
  editUsersModel,
  deleteUserModel,
};
