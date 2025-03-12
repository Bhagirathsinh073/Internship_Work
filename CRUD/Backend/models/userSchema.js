const mongoose = require('mongoose');
 const userSchema = new mongoose.Schema({

        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
        }
 }) 


const PUser = mongoose.model('PUser',userSchema);

module.exports = PUser;