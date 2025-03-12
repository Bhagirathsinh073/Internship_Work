const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
 const userSchema = new mongoose.Schema({

        name:{
            type:String,
            required:true,
            // unique:true,
        },
        email:{
            type:String,
            required:true,
            // unique:true,
            // validate: {
            //     validator: function(value) {
            //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            //     },
            //     message: 'Please enter a valid email address'
            // }
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:['user','admin'],
            default:'user'
        }
 }) 

 //pre is hook run before the save() - document type middleware 
 userSchema.pre('save',async function (next) {
     if(this.isModified('password')){
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
         }
     return next();
 })

const UserHash = mongoose.model('UserHash',userSchema);

module.exports = UserHash;