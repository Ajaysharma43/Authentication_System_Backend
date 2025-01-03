const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const Users = require('./Schemma/UserSchemma')
const Authentication = require('./Routes/Authentication')
const data  = require('./Routes/DataRoute')
const DataOperations = require('./Routes/DataOperation')
const database = require('./Database_connection/Database_connection')

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/Authentication',Authentication)
app.use('/Data',data)
app.use('/Operation',DataOperations)

database();



app.listen(3000)