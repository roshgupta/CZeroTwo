const express=require('express')
const router= express.Router()
const User=require('../models/user')
const Userlink=require('../models/userlink')
const Link=require('../models/Link')

router.get('/all/:id',async(req,res)=>{

    const id=req.params
    const user=await User.findById(id)
    const userlink=await Userlink.findById(user.userLink)

    const visited=userlink.visited
    const arr=[]

    for(let vis of visited){
        const link=await Link.findById(vis)
        arr.push(link)
    }

    res.status(200).json({"success":true,payload:arr})

})

router.post('/id',async(req,res)=>{

    const {id}=req.params
    const user=await User.findById(id);
    const ulinkid=user.userLink;

    const userlink= await Userlink.findById(ulinkid);

    //change here later
    const {visited}= req.body
    const linkbody=await Link.insertMany({visited});

    userlink.visit.push(linkbody._id)
    userlink.save();

})

router.get('/:date/:id',async(req,res)=>{
    const {date,id}=req.params;

    const user=await User.findById(id)
    const userlink=await Userlink.findById(user.userlink)

    const visited=userlink.visited;

    
    for(let vis of visited){

        const link=await Link.findById(vis)
        if(link.date===date){
            res.status(200).json({"success":true,payload:link})
        }

    }
    res.status(200).json({success:false,message:"No such data"})
})



module.exports= router