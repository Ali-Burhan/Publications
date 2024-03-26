import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const User =  mongoose.models.User || mongoose.model('User',userSchema)

export default User