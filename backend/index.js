const express=require("express");
const dontenv=require("dotenv");

const app=express()

app.listen(process.env.PORT||5000,()=>{
    console.log('server started')
})