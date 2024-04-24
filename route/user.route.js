const express=require('express');
const { registerController,loginController,userVerification } = require('../controller/auth.controller');
const router=express.Router();


router.route('/register')
.get((req,res)=>{
    return res.render('signup')
})
.post(registerController)


router
.route('/login')
.get((req,res)=>{
    return res.render('login')
})
.post(loginController)

router
.route('/verification/:token')
.get((req,res)=>{
    return res.render('verification')
})
.post(userVerification)


router
.route('/blog')
.get((req,res)=>{
    return res.render('index')
})
router
.route('/main')
.get((req,res)=>{
    return res.render('front')
})

router
.route('/team')
.get((req,res)=>{
    return res.render('tut20')
})
router
.route('/about')
.get((req,res)=>{
    return res.render('about')
})
module.exports=router;