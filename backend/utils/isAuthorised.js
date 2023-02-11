
const jwt=require('jsonwebtoken')

const isAuthorised=(req,res,next)=>{

    console.log(req.cookies)
    if(req.cookies==undefined){
        res.status(200).json({"message":"no cookies"})
        return
    }
    const token=req.cookies.access_token
    console.log(token)

    const verify=jwt.verify(token,"secret key",(err,user)=>{
        if(err){
            next(err)
            return
        }
        // console.log('bruu')
        req.user=user
        next()
    })


}

module.exports=isAuthorised