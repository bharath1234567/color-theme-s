const jwt = require('jsonwebtoken');
const User = require('../model/userModel.js')
const Preference = require('../model/userColorPreference')
const { passwordBcryption, passwordCompare } = require("../helpers/encrypt-bcrypt.js")
exports.registerController = async(req,res,next)=>{
 
    try{
        const {name,email,password} = req.body

        if(!name || !email   || !password){
         return   res.status(400).send({
                status:false,
                message:'field  is missing'
            })
        }
    
        const existingUser = await User.findOne({email})
        if(existingUser){
         return   res.status(400).send({
                status:false,
                message:'user already exists please login'
            })
        }
     
        const newUser = await User.create({name,email,password: await passwordBcryption(password)})
      return  res.status(201).send({status:true,user:newUser,message:'user registered successfully'})
        

    }catch(err){
      return  res.status(500).send({
            status:false,
            message:'registration failed',
            err
        })
    }
   
}

exports. loginController = async(req,res)=>{
  
    try{
       
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).send({
                status:false,
                message:"email or password is required"
            })
        }

        const user = await User.findOne({email})
       
        if(!user){
           return  res.status(404).send({
                status:false,
                message:"user is not present, please register"
            })
        }
        const hashedPassword = user.password

      if(await passwordCompare(password,hashedPassword)){
        const token =   jwt.sign({_id:user.id},process.env.JWT_SECRET)
      return  res.status(200).send({
            status:true,
            message:"logged in successfully",
            user:{
                name:user.name,
                email:user.email,
               _id:user.id,
              
            },
            token 
        })
      }
      return res.status(400).send({
        status:false,
        message:"email or password is incorrect"
    })


    }catch(err){
      
      return  res.status(500).send({status:false,message:"Bad request"})
    }
}