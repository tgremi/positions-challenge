const app = require("./middlewares");
const config = require("../config");
const routes = require("../app/routes");

try {
  app
    .listen(config.PORT, config.HOSTNAME, () => {})
    .on("error", error => {
      console.log("[ERROR] - ", error);
    })
    .on("listening", () => {
      console.log(
        "[LISTENING] - Host: ",
        config.HOSTNAME,
        "PORT: ",
        config.PORT
      );

      require("../config/database");
      Object.values(routes).forEach((route, i) => route(app, "/v1"));
    })
    .on("request", request => {
      console.log(" HTTP - request received ");
    });
} catch (error) {
  console.log("Error - [error]:", error);
}
