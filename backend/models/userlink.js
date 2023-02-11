const mongoose=require('mongoose')
const schema=mongoose.Schema

const UserlinksSchema=new schema({
    
    visit:{
        type:[schema.Types.ObjectId],
        ref:"Links"
    }

},{timestamps:true})

module.exports= mongoose.model('Userlink',UserlinksSchema)