const express = require("express");
const router = express.Router();

// Import User model
const USER = require('../models/User');
const Companys = require("../models/companySchema");

router.get('/',(req, res) => {
  res.send("Hello User");
  console.log('user list');
})
//Create Opration -  User created
router.post('/create',async (req, res) => {
  try {
    console.log('User created request')
    const company = await Companys.findById(req.body.company);
    console.log(company)
    const {userid,name,username,address,password,email,phone,role,bio,isActive} = req.body

    const newUser = new USER({userid,name,username,address,password,email,phone,role,bio,isActive,company})
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
})

// Read Opration - Get all users
router.get('/data', async (req, res) => {
  try {
    
    const users = await USER.find().populate('company');

    res.status(200).json(users);
    // console.log("users found")
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get Single User
router.get("/:id", async (req, res) => {
  try {
    console.log('Get single user request')
    const user = await USER.findOne({userid:req.params.id}).populate('company');
    await user.save();
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update
 router.put('/:id',async(req, res) => {
  try {
      const {username,password,address,phone,bio,email} = req.body;
  const updateUser = await USER.findOneAndUpdate({userid:req.params.id},{username,password,address,phone,bio,email},{ new: true});
  res.status(200).json(updateUser);
  if(!updateUser){
    return res.status(404).json({ message: "User not found with that id" });
  }
  } catch (error) {
      console.log(error);
  }
  
})
 
//Delete using spefic id 

router.delete('/:id',async(req,res)=>{
  try {
    console.log('User Delete request')
    const user = await USER.findOneAndDelete({userid: req.params.id})
    
    if(!user){
      console.log('User not found')
      return res.status(404).json({ message: "User not found with that id" });
    }
    res.status(200).json("User DELETED");
  } catch (error) {
    console.log(error);
  }
})

//Delete using spefic name ---------------------------not run

// router.delete("/:name",async(req,res)=>{
//   try {
//     const {name} = req.params;
//     if (!name) {
//       return res.status(400).json({ message: "Name is required for deletion" });
//     }

//     const delete_name = await USER.FindOneAndDelete({name});
//     if(!delete_name){
//       console.log('User not found')
//       return res.status(404).json({ message: "User not found with that name" });
//     }
//     res.status(200).send("user_delete_name",delete_name)
//   } catch (error) {
//       console.log(error);
//   }
// })



module.exports = router;

