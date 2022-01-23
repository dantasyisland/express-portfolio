const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

/**
 * Route for index page - passing project data to be rendered
 */
router.get("/", (req, res, next) => {
  const data = projects;
  res.render("index", {
    data,
  });
});

/**
 * Route for about page
 */
router.get("/about", (req, res, next) => {
  res.render("about");
});

/**
 * Route for ID page - passes id parameter from request to select project - data passed to be rendered
 */
router.get("/projects/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  if (!projects[id]) {
    const err = new Error();
    err.message = `Whoopsidoolde! Looks like that project doesn't exist`;
    err.status = "401";
    next(err);
  }
  const data = ({
    project_name,
    description,
    technologies,
    live_link,
    github_link,
    image_urls,
  } = projects[id]);
  res.render("project", {
    data,
  });
});


/**
 * Router exported to be used in app.js as middleware
 */
module.exports = router;
