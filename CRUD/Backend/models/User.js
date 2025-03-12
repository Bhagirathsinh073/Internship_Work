const mongoose = require('mongoose');
const BCompany = require('./companySchema');

const UserSchema = mongoose.Schema({
    userid:{
        type : Number,
        required : true,
        unique : true,
    },
    name:{
        type : String,
        required : true

    },
    username :{
        type : String,
        required : true,

    },
    address :[
        {
            type:{type:String,required:true},
            block:{type:String,required:true},
            street :{type : String, required : true},
            city :{type : String, required : true},
            state :{type : String, required : true},
            zip :{type : Number, required : true, minLength:[5,"number s Less then 5 of only 5"]}
        },
    ],
    password :{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        validate: {
            validator: function(value) {
                return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value);
            },
            message: 'Please enter a valid email address'
        },
        unique :true

    },
    
    phone:{
        type : Number,
        required : true,
        unique: true,
        // minLength :[10,"number s Less then 10 of only 10"]
        validate: {
            validator: function(value) {
                return /^\d{10}$/.test(value);
            },
            message: 'Please enter a valid 10 digit phone number'
        }
    },

    role :{
        type : String,
        required : true,
        enum:{values:['admin','user'],message:"{VALUES} are not allowed"}
    },
    bio:{
        type : String,
        required : false,
        maxLength:[500,"Bio should not exceed 500 characters"]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Companys",
        // required: true
    }
},
    {timestamps: true}
)

const USER = mongoose.model('USERS',UserSchema);


module.exports = USER;