/**
 * Sets up Express
 */

const express = require("express");
const app = express();

/**
 * Imports JSON data
 */
const {
  projects
} = require("./data.json");

/**
 * Sets the view engine to Pug for templating
 */
app.set("view engine", "pug");

/**
 * Middleware for parsing JSON, setting static route
 */
app.use(express.json());
app.use("/public", express.static("public"));

/**
 * Routes
 */
app.get("/", (req, res, next) => {
  res.render("index", {
    projects
  });
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("/projects/:id", (req, res, next) => {
  const project = projects[req.params.id];
  if (req.params.id > projects.length || isNaN(req.params.id)) {
    const err = new Error(`Whoopsidoodle! Looks like that project doesn't exist`);
    err.status = 404;
    next(err);
  } else {
    res.render("project", project);
  }
});

/**
 * Error Handlers
 */
app.use((req, res, next) => {
  const err = new Error(`Whoopsidoodle! Looks like that page doesn't exist`);
  err.status = 404;
  res.render("page-not-found", {
    err,
  });
});

app.use((err, req, res, next) => {
  if (!err.status) {
    err.message = `It's not you. It's us! Something went wrong on the server. Sorry! Please try again!`;
    err.status = 500;
    res.render("error-page", {
      err,
    });
  } else {
    res.render("error-page", {
      err
    });
  }
});

/**
 * Starts server
 */
app.listen(3000);
console.log("App is listening on port 3000");