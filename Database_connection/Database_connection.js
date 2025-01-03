const mongoose = require('mongoose')

const connectdb = async() =>{
    mongoose.connect('mongodb://127.0.0.1:27017/Authentication').then(()=>console.log('connected successfully'))
}

module.exports = connectdb;