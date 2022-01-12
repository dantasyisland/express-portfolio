const express = require('express');
const app = express();
const data = require('./data.json');
const routes = require('./routes/index');


app.set('view engine', 'pug');

app.use(express.static("public"));

console.log(data);


app.use(routes);


app.listen(3000);
console.log("App is listening on port 3000");