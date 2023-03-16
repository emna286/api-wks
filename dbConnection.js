const mongoose=require ('mongoose')
require('dotenv').config();
const Connect=()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("connected")

    }catch (error){
        console.log("error")

    }
}
module.exports=Connect