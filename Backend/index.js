// const http = require("http");
const express = require("express");
const chalk = require("chalk");
const morgan = require("morgan");
const app = express();
const os = require("os");
const cors = require("cors");
const browser = require("browser-detect");
const router = require("./Routes/routes");
const rocketRouter = require("./Routes/RocketsRoutes");
app.use(express.json()); // to parse payload
app.use(morgan("dev"));
app.use(cors("*"));
const PORT = 8080 || process.env.PORT;
app.use(router);
app.use("/rocket", rocketRouter);
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("HELLO NODE");
//     res.end();
//     console.log("HELLO NODE LOG");
//   })
//   .listen(8080);
app.listen(PORT, () => {
  console.log(chalk.red("your server is running on", chalk.blueBright(PORT)));
});