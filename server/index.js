const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tasksRouter = require('./controller');
app.use('/api', tasksRouter);

app.listen(4000, () => console.log("Server running on 4000"));


