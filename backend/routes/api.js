const express=require('express')
const router= express.Router()
// const fetch=require('fetch')
const axios=require('axios')

router.post('/',async(req,res,next)=>{
    try{
    const {url}=req.body
    console.log('innn')

    const response=await axios.get(`https://api.websitecarbon.com/site?url=${url}`)
    console.log(response.data)

    const {green,bytes,cleanerThan}=response.data

    res.status(200).json({green,bytes,cleanerThan,url:response.data.url})

    }
    catch(err){
        next(err)
    }
})


module.exports= router