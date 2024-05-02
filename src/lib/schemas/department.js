import mongoose from "mongoose";

const deptSchema = mongoose.Schema({
    deptname:{
        type:String,
        require:true
    },
    hod:{
        type:String,
    }
})

const Department =  mongoose.models.Department || mongoose.model('Department',deptSchema)

export default Department