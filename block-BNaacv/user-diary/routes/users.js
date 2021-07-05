var express = require('express')
var router = express.Router()

router.get('/', (req,res)=>{
    //handle action
})

router.get('/new', (req,res)=> {
    // render the create form
    res.render('users.ejs')
})

router.post('/', (req,res)=>{
    // capture form data
})

router.get('/:id', (req,res)=>{
    // single user detail
})

router.get('/:id/edit', (req,res) => {
    // edit form
})

router.put('/:id', (req,res)=>{
    // capture the data
})

router.delete('/:id',(req,res)=>{
    // delete that user
})



module.exports = router