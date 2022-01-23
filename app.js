const express = require("express");
const app = express();
const routes = require("./routes/index");
const data = require("./data.json");

const errorHandler = require("./errorHandler");

/**
 * Sets the view engine to Pug for templating
 */
app.set("view engine", "pug");

/**
 * Middleware for parsing JSON, setting static route and the express router
 */
app.use(express.json());
app.use("/static", express.static("public"));
app.use("/", routes);


/** Error Handlers */
app.use((req, res, next) => {
  const err = new Error(`Whoops! Looks like that page doesn't exist`);
  err.status = 404;
  res.render("errorPage", {
    err,
  });
});

app.use(errorHandler);

/**
 * Starts server
 */
app.listen(3000);
console.log("App is listening on port 3000");

// sudo killall -9 node