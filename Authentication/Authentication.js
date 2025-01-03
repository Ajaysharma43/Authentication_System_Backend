const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const router = express.Router()

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/Signup',async(req,res)=>{

})

module.exports = router;