const express=require('express')
const router= express.Router()
const User=require('../models/user')
const Userlink=require('../models/userlink')
const Link=require('../models/Link')

const isAuthorised=require('../utils/isAuthorised')

router.get('/test',isAuthorised,(req,res)=>{
    res.send("test")
})

router.get('/all/:id',isAuthorised,async(req,res)=>{

    const {id}=req.params
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

    res.status(200).json({"success":true,payload:arr})

})

router.post('/:id',async(req,res)=>{

    const {id}=req.params
    const user=await User.findById(id);
    const ulinkid=user.userlink.toHexString()
    const userlink= await Userlink.findById(ulinkid);
    // change here later
    const {visited}= req.body
    //visited here is an array
    const linkbody=await Link.create({visited})

    userlink.visit.push(linkbody._id)
    await userlink.save();

    res.status(200).json({"success":true,message:"done"})
})

router.get('/:date/:id',async(req,res)=>{
    const {date,id}=req.params;

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
})



module.exports= router