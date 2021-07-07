var express = require('express')
var router = express.Router()
var User = require('../models/User')

router.get('/', (req,res,next)=>{
    // handle action
    User.find({}, (err,users)=>{
        if(err) return next(err)
        res.render('users.ejs',{users:users})
    })
})

router.get('/new', (req,res)=>{
    // render the create form
    res.render('userForm.ejs')
})

router.post('/',(req,res)=>{
    // capture form data
    User.create(req.body, (err,user)=>{
        if(err) return next(err)
        res.redirect('/')

    })
})

router.get('/:id', (req,res,next)=>{
    // single user details
    var id = req.params.id
    User.findById(id, (err,user)=>{
        if(err) return next(err)
        res.render('singleUser.ejs', {user:user})
    })
})
router.get('/:id/edit', (req,res,next)=>{
    var id = req.params.id
    User.findById(id, (err, user)=>{
        if(err) return next(err)
        res.render('editUser', {user:user})
    })
})
router.post('/:id',(req,res,next)=>{
    var id = req.params.id
    User.findByIdAndUpdate(id, req.body, (err, updatedUser)=>{
        if(err) return next(err)
        res.redirect('/users')
    })
})

router.get('/:id/delete',(req,res,next)=>{
    // delete that user
    User.findByIdAndDelete(id, (err, deletedUser)=>{
        if(err) return next(err)
        res.redirect('/users')
    })
})

module.exports = router