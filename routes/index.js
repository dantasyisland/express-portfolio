const express = require('express');
const router = express.Router();
const data = require('../data.json')

router.get("/", (req, res) => {
  res.render("index")
});

router.get("/about", (req, res) => {
  res.render("about")

})

router.get("/projects/:id", (req, res) => {
  res.send(`${req.params.id}`)
  console.log(`${req.params.id}`);
  console.log(`${data}`);
})


// function KickOutTheJams(data) {
//   data.projects.forEach(element => {
//     console.log(element);
//   });
// }

// KickOutTheJams(data);

module.exports = router;