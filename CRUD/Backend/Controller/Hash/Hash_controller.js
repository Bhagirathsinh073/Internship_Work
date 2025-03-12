const UserHash = require('../../models/Hash/userSchema');
const bcrypt = require('bcryptjs');
const { request } = require('express');
const jwt = require('jsonwebtoken');

//===User registration Logic===//
const register = async (req,res) =>{
    try {
        const {name,email,password,role} = req.body;
        if(!email || !password || !name){
            return res.status(400).json(
                {
                    error: "All fields are required"
                }
            )
        }
        
        // Check if user already exists
        const userExist = await UserHash.findOne({email});
        if(userExist){
            res.status(400).json({
                error: "User already exists"
            })
        }
        
        const user = new UserHash({name,email, password,role});
        await user.save();
        res.status(201).json(user);
        console.log("User added successfully");

        if(!user && userExist){
            res.status(404).json({
                error: "User not added successfully"
            })
        }
        
       
    } catch (error) {
        console.log(error)
        
    }
}
//===User registration Logic===//


//===Login Logic===//
const login = async (req, res) => {
    try {
        const {email,password} = req.body
        
        //check if email and password are provided
        if(!email ||!password){
            return res.status(400).json(
                {
                    error: "All fields are required"
                }
            )
        }
        
        //check if user exists with same email
        const user = await UserHash.findOne({email});
        if(!user){
            return res.status(404).json({
                error: "User not found"
            })
        }
        
        //check the hash pass is correct 
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({
                error: "Invalid password"
            })
        }
        
        //generate token at user login 
        const token = jwt.sign({id: user._id,role:user.role}, process.env.JWT_SECRET,{expiresIn: "1h"})
        
        res.status(200).json({message:"Logged in Successful",token,role:user.role});
        
    } catch (error) {
        console.log("Server Error at login ",error)
    }
}
//===Login Logic===//


//=== Get all Users Data===//
const data = async (req,res)=>{
    const user = await UserHash.find()
    if(!user){
        return res.status(404).json({
            error: "User not found"
        })
    }
    res.status(200).json(user)
}
//=== Get all Users Data===//







//=== Get pagination Users Data===//
const page = async(req,res) =>{
    const{page=1,limit=5,search} = req.query;
console.log("page start")
    //create variable for query parameters
    const query = search ? {name: new RegExp(search,"i")}  : {}
   console.log(query);
    console.log(page);
    console.log(limit); //      
    try {
        const users = await UserHash.find(query)
        .skip((Number(page) - 1) * Number(limit))    //1-1*5 = 0 then 2-1*5=5 , then 3-1*5=10
        .limit(Number(limit * 1))

        const total = await UserHash.countDocuments(query)
        res.json({
            users,
            total,
            page: Number(page),
            pages: Math.ceil(total / limit),
          });

    } catch (error) {
        res.status(500).json({message: "Server error"});
    }

}
//=== Get pagination Users Data===//


module.exports ={register,login,data,page}