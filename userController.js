const mongoose=require('mongoose')
const Users=require('./models/userSchema')

const userController={

get: async(req,res)=>{
    console.log('object')
const user=await Users.find()

res.send(user)
    },
add:async(req,res)=>{
    const user=Users.create({name:req.body.name,password:req.body.password})
    res.send('user created')
},
update:async(req,res)=>{
const user=await Users.updateOne({name:req.body.name},{name:req.body.newname})
res.send('user updated')

},
delete:async (req,res)=>{
    const test=await Users.deleteOne({name:req.body.name})
    if (test.deletedCount>0)
    res.send ("user deleted")
    else 
    res.send("erreur")
}
}
module.exports=(userController)