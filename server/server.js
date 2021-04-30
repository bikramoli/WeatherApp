require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// use body parser to get data from post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use api routes from the api folder
const apis = require("./api");
app.use("/api", apis);

app.listen(port, () => console.log('listening on port ${port}'));