const express  = require('express');
// const { addUser, getUser, addPosts, showPosts } = require('../Controller/Post-controller');
const PostController  = require('../Controller/Post-controller');
const router = express.Router();

router.get("/post",PostController.showPosts);
router.post("/post/create",PostController.addPosts);
router.post("/post/user",PostController.addUser);
router.get("/post/user",PostController.getUser);


module.exports = router;