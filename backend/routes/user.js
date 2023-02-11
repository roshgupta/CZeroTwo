
const express=require('express')
const router= express.Router()
const User=require('../models/user')
const Userlink=require('../models/userlink')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.post('/signup',async(req,res)=>{
    const {username,email,password}=req.body
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(password,salt)
        const userlink=await Userlink.insertMany({})
        // console.log(userlink)
        const newUser= new User({
            username,
            email,
            password:hash,
            userlink:userlink[0]._id
        })
        const user=await newUser.save()
        const token= jwt.sign({id:user._id},"secret key")
        res.cookie("access_token",token,{
          httpOnly:true,
          secure:false  
        })
        .status(200)
        .json(user)
})

router.post('/login',async(req,res,next)=>{
      const {email,password}=req.body

      const user =await User.findOne({email})
      if(!user) {
          // throw new Error({status:400,message:"No such Username exists"})
          // return
          res.send('no authenticated')
      }
      const hash=user.password

      const verify=await bcrypt.compare(password,hash)
      if(!verify){
          // throw new Error({status:400,message:"Incorrect password"})
          // return
          res.send('no authenticated')
      }
      const token= jwt.sign({id:user._id},"secret key")
      res.cookie("access_token",token,{
        httpOnly:true  
      })
      .status(200)
      .json({username:user.username,email:user.email})
  })


module.exports= router