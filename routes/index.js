const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");


/**
 * Route for index page - passing project data to be rendered
 */
router.get("/", (req, res) => {
  const data = projects;
  res.render("index", {
    data,
  });
});

/**
 * Route for about page
 */
router.get("/about", (req, res) => {
  res.render("about");
});

/**
 * Route for ID page - passes id parameter from request to select project - data passed to be rendered
 */
router.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  if(id > projects.length || id != typeof Number) {
    router.use((error, req,res,next) => {
      error.message = 'Whoopsiedoodle! Looks like you entered an invalid URL'
      error.status = 400
      next(error)
      res.status = error.status;
      console.log(res.status);
     })
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
