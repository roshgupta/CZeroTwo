
const express=require('express')
const router= express.Router()
const User=require('../models/user')
const Userlink=require('../models/userlink')

router.post('/signup',async(req,res)=>{

    const {username,email,password}=req.body
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(password,salt)
        const newUser= new User({
            username,
            email,
            password:hash
        })
        const userlink=await Userlink.insertMany({})
        newUser.userlink=userlink._id
        const user=await newUser.save()

        const token= jwt.sign({id:user._id},"secret key")
        res.cookie("access_token",token,{
          httpOnly:true  
        })
        .status(200)
        .json(user)

})


module.exports= router