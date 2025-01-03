const mongoose = require('mongoose')
const Users = new mongoose.Schema({
    Username:{type:String},
    Password:{type:String},
    Email:{type:String}
})

module.exports = mongoose.model('table1',Users)