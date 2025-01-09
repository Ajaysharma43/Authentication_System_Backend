const express = require('express');
const bodyParser = require('body-parser')
const Router = express.Router();
const Users = require("../Schemma/UserSchemma")

const app = express();

Router.get('/UsersData', async(req,res)=>{
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)

    const skip = (page - 1) * limit;
    const UsersData = await Users.find().skip(skip).limit(limit)
    const totalsongs = await Users.countDocuments();
    res.json({UsersData,TotalPages:Math.ceil(totalsongs / limit)})
});

Router.get('/FullUsersData', async(req,res)=>{
    const UsersData = await Users.find();
    res.json({UsersData})
});

module.exports = Router;