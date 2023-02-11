const express=require("express");
const dontenv=require("dotenv");
const connectToDB=require('./models/connectToMongoDB')
const UserRoutes=require('./routes/user')
const UserlinkRoutes=require('./routes/userlink')

const app=express()

app.use(express.json())

app.use('/user',UserRoutes)
app.use('/userlink',UserlinkRoutes)

app.get('/test',(req,res)=>{
    res.send('hello')
})

app.listen(process.env.PORT||5000,()=>{
    connectToDB()
    console.log(`server started at port ${5000}`)
})