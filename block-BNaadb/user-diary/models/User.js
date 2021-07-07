var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
    name: String,
    email: String,
    age: Number
}, {timestamps:true})


module.exports = mongoose.model('User', userSchema)
