var express = require('express')
var path = require('path')
var usersRouter = require('./routes/users')
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/user-diary", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err)=>{
    console.log(err ? "Connected false" : "Connected true")
})

var app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    res.render('index.ejs')
})
app.use('/users', usersRouter)

// handle error

app.use((req,res,next)=>{
    res.status(404).send('Page Not found')
})
// custom error handler

app.use((err,req,res,next)=>{
    res.send(err)
})
app.listen(3000,()=>{
    console.log('listening to port 3000')
})