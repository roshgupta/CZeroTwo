const express=require('express')
const router= express.Router()
const User=require('../models/user')
const Userlink=require('../models/userlink')
const Link=require('../models/Link')

const isAuthorised=require('../utils/isAuthorised')

router.get('/test',isAuthorised,(req,res,next)=>{
    console.log(req.user.id)
    res.send("test")
})

router.get('/all',isAuthorised,async(req,res,next)=>{
    try{
    
    const id=req.user.id
    const user=await User.findById(id)
    const ulinkid=user.userlink.toHexString()
    const userlink=await Userlink.findById(ulinkid)
    const visited=userlink.visit
    const arr=[]

    for(let vis of visited){
        const link=await Link.findById(vis.toHexString())
        console.log(link)
        arr.push(link)
    }

    res.status(200).json({success:true,payload:arr})
}
catch(err){
    next(err)
}

})

router.post('/',isAuthorised,async(req,res,next)=>{

    try{
        const id=req.user.id
    
    const user=await User.findById(id);
    const ulinkid=user.userlink.toHexString()
    const userlink= await Userlink.findById(ulinkid);
    // change here later
    const {visited}= req.body
    //visited here is an array
    const linkbody=await Link.create({visited})

    userlink.visit.push(linkbody._id)
    await userlink.save();

    res.status(200).json({success:true,message:"done"})
    }
    catch(err){
        next(err)
    }
})

router.get('/:date',isAuthorised,async(req,res,next)=>{
    try{
    const {date}=req.params;
    const id=req.user.id
    const user=await User.findById(id)
    const ulinkid=user.userlink.toHexString()
    const userlink=await Userlink.findById(ulinkid)

    const visited=userlink.visit
   
    for(let vis of visited){

        const link=await Link.findById(vis.toHexString())
        console.log(link.date)
        // if(link.date===date){
        //     res.status(200).json({"success":true,payload:link})
        // }

    }
    res.status(200).json({success:false,message:"No such data"})
}
catch(err){
    next(err)
}
})



module.exports= router