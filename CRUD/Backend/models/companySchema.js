const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    cid:{
        type : Number,
        required : true,
    },
    cname:{
        type : String,
        required : true
    },
    contact:{
        type : Number,
        required : true
    },
    location:{
        type: String,
        required : true
    },
    type:{
        type: String,
        required : true
    }
})

const Companys = mongoose.model("Companys",companySchema)



module.exports = Companys;