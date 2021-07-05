var express = require('express')
var logger = require('morgan')
var indexRouter = require('./routes/index')
var studentRouter = require('./routes/students')
var path = require('path')
var mongoose = require('mongoose')
var Student = require('./models/studentdata')
mongoose.connect("mongodb://localhost/model",{ useNewUrlParser:true, useUnifiedTopology: true},(err)=>{
    console.log(err?err:'connected to database')
})
var app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'))
//set up view engine
app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))
//routing middlewares
app.use('/', indexRouter)
app.use('/students', studentRouter)
//error handler middlewares
app.use((req,res,next)=>{
    res.send('Page not found')
})
//listener
app.listen(3000,()=>{
    console.log('server is listening to port 3000')
})