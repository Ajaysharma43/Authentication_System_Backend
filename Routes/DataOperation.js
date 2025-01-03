const express = require('express');
const bodyParser = require('body-parser')
const Router = express.Router();
const Users = require("../Schemma/UserSchemma")

const app = express();

Router.post('/Delete', async(req,res)=>{
    const id = req.body.Id;
    const User = await Users.deleteOne({_id:id})
    res.send('removed')
});

Router.post('/Update',async(req,res)=>{
    const id = req.body.id;
    const username = req.body.Username;
    const password = req.body.Password;
    const email = req.body.Email;

    const findUser = await Users.updateOne({_id:id},{$set:{Username:username,Password:password,Email:email}})
    res.send('updated')
})

module.exports = Router;