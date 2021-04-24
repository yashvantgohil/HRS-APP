const winston = require("winston");
const config = require("config");

require("winston-mongodb");

module.exports = function () {
  // handling uncaughtException
  process.on("uncaughtException", (err) => {
    winston.error(err.message, err);
  });

  // handling promiseRejection
  process.on("unhandledRejection", (err) => {
    winston.error(err.message, err);
  });

  winston.add(winston.transports.File, {
    filename: "error.log",
    level: "error",
  });

  winston.add(winston.transports.MongoDB, {
    db: config.get("DatabaseURI"),
    level: "error",
  });
};
