const { Schema } = require("mongoose");
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
const getUserModel = async ({ username }) => {
  try {
    const users = await Users.find({ name: username });
    return users;
  } catch (error) {
    console.error("get users", error.message);
    return error;
  }
};
const addUsersModel = async (paylaod) => {
  try {
    const user = await Users.insertMany([paylaod]);
    return user;
  } catch (error) {
    console.error("get users", error.message);
    throw error;
    //     return error;
  }
};

const editUsersModel = async ({ username, payload }) => {
  try {
    const editedUser = Users.updateOne(
      { name: username },
      {
        $set: {
          age: payload.age,
          isActive: payload.isActive,
          updated: new Date(),
        },
      }
    );
    return editedUser;
  } catch (error) {
    throw error;
  }
};
const deleteUserModel = async (username = "") => {
  try {
    const deletedUser = Users.deleteOne({ name: username });
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
  getUserModel,
};
