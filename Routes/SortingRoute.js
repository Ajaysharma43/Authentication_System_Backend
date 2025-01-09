const express = require('express');
const bodyParser = require('body-parser')
const Router = express.Router();
const Users = require("../Schemma/UserSchemma")

const app = express()


const A_Z_Sort = (data) => {
    const sorting = data.sort((a, b) => a.Username.localeCompare(b.Username));
    console.log(sorting); 
    return sorting;
}

const Z_A_Sort = (data) => {
    const sorting = data.sort((a, b) => b.Username.localeCompare(a.Username));
    console.log(sorting); 
    return sorting;
}

Router.get('/Alphabet_ascending', async(req,res)=>{
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)
    const skip = (page - 1) * limit;
    const data = await Users.find();
    const totalsongs = await Users.countDocuments();
    const result = A_Z_Sort(data)
    const limitedResult = result.slice(skip, skip+limit);
    res.json({limitedResult,TotalPages:Math.ceil(totalsongs / limit)})
})

Router.get('/Alphabet_decending', async(req,res)=>{
    const limit = parseInt(req.query.limit)
    const page = parseInt(req.query.page)
    const skip = (page - 1) * limit;
    const data = await Users.find();
    const totalsongs = await Users.countDocuments();
    const result = Z_A_Sort(data)
    const limitedResult = result.slice(skip, skip+limit);
    res.json({limitedResult,TotalPages:Math.ceil(totalsongs / limit)})
})

module.exports = Router