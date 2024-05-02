import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    departmentid:{
        type:String,
    },
    contact:{
        type:String,
    },
    status:{
        type:String,
    },
    designation:{
        type:String,
    },
    email:{
        type:String,
    },

})

const Faculty =  mongoose.models.Faculty || mongoose.model('Faculty',facultySchema)

export default Faculty