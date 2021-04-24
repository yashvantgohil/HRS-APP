const express = require("express");
const winston = require("winston");
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 4000; // >> set PORT = <number>

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./startup/log")();
require("./startup/route")(app); //setting middleware and routes
require("./startup/db")(); //connecting mongodb
require("./startup/config")();
require("./startup/prod");

app.listen(port, () => {
  winston.info(`server is listening to http://localhost:${port} `);
});
