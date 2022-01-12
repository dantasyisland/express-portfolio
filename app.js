const express = require('express');
const app = express();
const data = require('./data.json');
const routes = require('./routes/index');

app.set('view engine', 'pug');

app.use(routes);

// app.use(express.static("public"));
// app.use(express.json);


app.listen(3000);
console.log("App is listening on port 3000");

// sudo killall -9 node
