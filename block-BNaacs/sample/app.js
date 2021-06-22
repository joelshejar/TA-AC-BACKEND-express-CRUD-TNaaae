var express = require('express')
var logger = require('morgan')
var mongoose = require('mongoose')
var path = require('path')
var User = require('./models/user')
mongoose.connect("mongodb://localhost/model",{ useNewUrlParser: true ,useUnifiedTopology: true},(err)=>{
    console.log(err?err:'connected to database')
})
app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"views"))
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'))
app.post('/users',(req,res,next)=>{
    User.create(req.body, (err,product)=>{
        // console.log(err,product)
        next(err)
        res.json(product)
    })
    
})
app.get('/users',(req,res)=>{
    User.find({},(err,users)=>{
        console.log(err,users)
        res.json({users:users})
    })
})
app.get('/users/:id', (req,res)=>{
    var id = req.params.id
    User.findById(id, (err, user)=>{
        next(err)
        res.json(user)
    })
})
app.put('/users/:id',(req,res,next)=>{
    var id = req.params.id
    User.findByIdAndUpdate(id, req.body, {new:true}, (err,updatedUser)=>{
        next(err)
        res.json(updatedUser)
    })
})
app.delete('/users/:id', (req,res)=>{
    Product.findByIdAndDelete(req.params.id, (err, deletedUser)=>{
        res.send(`${deletedUser.name} was deleted`)
    })
})
app.listen(3000,()=>{
    console.log('server is listening to port 3000')
})