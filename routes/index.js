const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hey you made it!");
  res.send('WELCOME TO JURASSIC PARK');
});

router.get("/about", (req, res) => {
  console.log("About the about...");
  res.send('Abouty bouty and rowdy rowdy')
})

router.get("/projects/:id", (req, res) => {
  res.send(`${req.params.id}`)
  console.log(`${req.params.id}`);
})




module.exports = router;