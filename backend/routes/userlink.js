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
router.get('/dum',(req,res)=>{
    console.log("inside dum get")
    res.send("hi")
})

router.post('/dum',(req,res)=>{
    console.log(req.body)
    console.log("inside dum post")
    res.json({message:"h1"})
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

router.post('/',async(req,res,next)=>{
    try{
    // const id=req.user.id
    const id="63e826018c0ddd53dfe1f463"
    const user=await User.findById(id);
    console.log(user)
    const ulinkid=user.userlink.toHexString()
    const userlink= await Userlink.findById(ulinkid);
    // change here later
    const {visited}= req.body
    //visited here is an array
    console.log("workingggg post")
    const linkbody=await Link.create({visited})

    userlink.visit.push(linkbody._id)
    await userlink.save();

    res.status(200).json({success:true,message:"done"})
    }
    catch(err){
        next(err)
    }
})

router.get('/date/:date',isAuthorised,async(req,res,next)=>{
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


router.get('/top',isAuthorised,async(req,res,next)=>{
    try{
    const id=req.user.id
    const user=await User.findById(id)
    const ulinkid=user.userlink.toHexString()
    const userlink=await Userlink.findById(ulinkid)

    const visited=userlink.visit

    const arr=[{url:"",value:0,carbon:0}]
    for(let vis of visited){

        const link=await Link.findById(vis.toHexString())
        const vis_arr=link.visited
        for(let it of vis_arr){
            let f=1;
            for(let ind of arr){
                if(ind.url===it.url){
                    f=0;
                    ind.value=parseInt(ind.value)+parseInt(it.value)
                    ind.carbon=parseInt(ind.carbon)+parseInt(it.carbon)
                    break;
                }
            }
            if(f==1){
                arr.push(it);
            }
        }
    }

    arr.sort((a, b) => parseInt(a.value) > parseInt(b.value) ? -1 : 1);

    res.status(200).json({arr})
}
catch(err){
    next(err)
}
})

router.get('/:url',isAuthorised,async(req,res,next)=>{
try{
    const {url}=req.params
    const id=req.user.id
    const user=await User.findById(id)
    const ulinkid=user.userlink.toHexString()
    const userlink=await Userlink.findById(ulinkid)

    const visited=userlink.visit

    let value=0;
    let carbon=0;

    for(let vis of visited){
        const link=await Link.findById(vis.toHexString())
        const vis_arr=link.visited
        for(let it of vis_arr){
            if(it.url===url){
                value=parseInt(value)+parseInt(it.value)
                carbon=parseInt(carbon)+parseInt(it.carbon)
            }

        }

    }
    res.status(200).json({success:true,value,carbon,url})
}
catch(err){
    next(err)
}

})


module.exports= router