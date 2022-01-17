const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

// CAN I DESTRUCTURE THIS INTO A SMALLER ARRAY OF JUST WHAT I NEED
router.get("/", (req, res) => {
  const data = projects;
  res.render("index", {data});
});

router.get("/about", (req, res) => {
  res.render("about");
})

router.get("/projects/:id", (req, res) => {
  const id = req.params.id;
  const data = {project_name, description,technologies,live_link,github_link,image_urls} = projects[id];
  res.render("project", { data });
})


// function KickOutTheJams(data) {
//   data.projects.forEach(element => {
//     console.log(element);
//   });
// }

// KickOutTheJams(data);

module.exports = router;