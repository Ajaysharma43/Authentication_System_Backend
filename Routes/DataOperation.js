const express = require('express');
const bodyParser = require('body-parser')
const Router = express.Router();
const Users = require("../Schemma/UserSchemma")

const app = express();

Router.get('/UsersData', async(req,res)=>{
    const UsersData = await Users.find()
    res.send(UsersData)
});

module.exports = Router;