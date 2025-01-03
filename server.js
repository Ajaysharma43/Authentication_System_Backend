const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");
const Users = require('./Schemma/UserSchemma')

const app = express();

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/Authentication').then(()=>console.log('connected successfully'))

app.get('/',async(req,res)=>{
    res.send('hello world')
})

app.listen(3000)