import mongoose from "mongoose";

const journalSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    department:{
        type:String,
    },
    auther:{
        type:String,
    },
    year:{
        type:String,
    },
    category:{
        type:String,
    },
    impactfactor:{
        type:Number,
    },
    nfccredit:{
        type:String,
    },
    papertype:{
        type:String,
    }
})

const Journal =  mongoose.models.Journal || mongoose.model('Journal',journalSchema)

export default Journal