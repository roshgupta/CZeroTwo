const mongoose=require('mongoose')
const schema=mongoose.Schema

const UserSchema=new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userlink:{
        type:schema.Types.ObjectId,
        ref:"Userlink"

    }
},{timestamps:true})

module.exports= mongoose.model('User',UserSchema)