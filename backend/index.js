const express=require("express");
const dontenv=require("dotenv");
const connectToDB=require('./models/connectToMongoDB')
const UserRoutes=require('./routes/user')
const UserlinkRoutes=require('./routes/userlink')
const apiRoutes=require('./routes/api')
const cors=require('cors')

const app=express()

app.use(cors())

app.use(express.json())

app.use('/user',UserRoutes)
app.use('/userlink',UserlinkRoutes)
app.use('/api',apiRoutes)

app.get('/test',(req,res)=>{
    res.send('hello')
})


app.use((err,req,res,next)=>{
    const errorStatus=err.status||500
    const errorMessage= err.message||"Something went wrong"

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(process.env.PORT||5000,()=>{
    connectToDB()
    console.log(`server started at port ${5000}`)
})