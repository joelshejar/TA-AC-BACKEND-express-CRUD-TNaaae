var express = require('express')
var router = express.Router()
var User = require('../models/User')

router.get('/',(req,res, next)=>{
    // handle action
    User.find({}, (er,users)=>{
        if(err) return next(err)
        res.render('users.ejs', {users:users})
    })
})

router.get('/new', (req,res)=>{
    // render the create form
    res.render('userForm.ejs')
})

router.post('/',(req,res)=>{
    // capture form data
    User.create(req.body,(err, user)=>{
        if(err) return next(err)
        res.redirect('/')
    })
})

router.get('/:id', (req,res,next)=>{
    // single user detail
    var id = req.params.id
    Users.findById(id, (err,user)=>{
        if(err) return next(err)
        res.render('singleUser.ejs', { user: user})
    })
})









