const {
  rocketApi: { url },
} = require("../Config/Config");
const chalk = require("chalk");
const getRocketsModel = async () => {
  try {
    const fetchRockets = await fetch(url + "/rockets");
    const rockets = await fetchRockets.json();
    return rockets;
  } catch (error) {
    console.error(chalk.bgRed(error.message));
    throw error;
  }
};
module.exports = { getRocketsModel };
