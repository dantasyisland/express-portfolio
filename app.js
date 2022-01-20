const express = require("express");
const app = express();
const data = require("./data.json");
const routes = require("./routes/index");
const errorHandler = require('./errorHandler');

/**
 * Sets the view engine to Pug for templating
 */
app.set("view engine", "pug");

/**
 * Middleware for parsing JSON, setting static route and the express router
 */
app.use(express.json());
app.use("/static", express.static("public"));
app.use(routes);

app.use((req, res, next) => {
  const error = new Error("Whoopsiedoodle! Looks like you entered an invalid URL");
  error.status = 400;
  next(error);
});
app.use(errorHandler);


/**
 * Starts server
 */
app.listen(3000);
console.log("App is listening on port 3000");

// sudo killall -9 node
