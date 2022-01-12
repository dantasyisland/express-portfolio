const express = require('express');
const router = express.Router();
const data = require('../data.json')

router.get("/", (req, res) => {
  res.render("index");
  console.log("Hey you made it!");
  // res.send('WELCOME TO JURASSIC PARK');
  // res.locals = data.projects;
});

router.get("/about", (req, res) => {
  // console.log("About the about...");
  // res.send('Abouty bouty and rowdy rowdy')
  res.render("about");
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