const bcrypt= require('bcrypt')
exports.  passwordBcryption = async(password)=>{

    try{
        const hashRounds = 10;
        const passwordHashing = await bcrypt.hash(password,hashRounds)
        return passwordHashing

    }catch(err){
        console.log(err)
    }
}

exports.  passwordCompare = async(password,hashedPassword)=>{
try{
   
    return bcrypt.compare(password,hashedPassword)
}catch(err){console.log(err)}
}