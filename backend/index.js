const express=require("express");
const dontenv=require("dotenv");
const connectToDB=require('./models/connectToMongoDB')


const app=express()

app.listen(process.env.PORT||5000,()=>{
    connectToDB()
    console.log('server started')
})