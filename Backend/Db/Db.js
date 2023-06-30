const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("../Config/Config");
const { url } = config.db;

const connectDb = async () => {
  const dbName = "practice";
  try {
    await mongoose.connect(url + dbName, {
      retryWrites: true,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    });
    console.log(chalk.greenBright("DB CONNECTED"));
  } catch (error) {
    console.error(chalk.red(error));
  }
};
module.exports = { connectDb, mongoose };
