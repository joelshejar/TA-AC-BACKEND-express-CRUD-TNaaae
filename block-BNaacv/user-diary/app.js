var express = require('express')
var logger = require('morgan')
var path = require('path')
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/model",{ useNewUrlParser:true, useUnifiedTopology: true},(err)=>{
    console.log(err?err:'connected to database')
})
var app = express()
