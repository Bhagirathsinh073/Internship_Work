const PUser = require("../models/userSchema");
const Post = require("../models/PostSchema");
const showPosts = async(req,res) =>{
try {
    const postData =  await Post.find().populate('author')
    if(!postData){
        return res.status(404).json({ message: "No posts found" });  // if no posts found return 404 status with message
    }
    res.status(200).json(postData);
} catch (error) {
    console.log(error);
}

}

const addPosts = async(req,res) =>{
    try{
        const {title,content,author} = req.body;
        console.log(req.body)
        const newPost = new Post({title,content,author});
        await newPost.save()  //document middleware - save
        if(!newPost){
            return res.status(400).json({ message: "Post not added" });
        }
        res.status(201).json(newPost);
    }catch(err) {
        console.log(err);
    }
   



}

const addUser = async(req,res) =>{
    try {
        const {name,email} = req.body;
    console.log(req.body)
    const newUSer = new PUser({name,email});
    await newUSer.save()
    if(!newUSer){
        return res.status(400).json({ message: "User not added" });
    }
    res.status(201).json(newUSer);
    } catch (error) {
        console.log(error);
    }
    
}

const getUser = async(req,res)=>{

   try {
    const userData = await PUser.find();
    if(!userData){
        res.status(400).json({
            message: "No users found"
        });
    }
    res.status(200).json(userData);
   } catch (error) {
    console.log(error);
   }
    
}

module.exports = {addUser,getUser,addPosts,showPosts}