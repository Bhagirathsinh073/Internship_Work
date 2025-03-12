const express = require('express');
const { register, login, data, page } = require('../Controller/Hash/Hash_controller');

//middleware
const {  verifyToken } = require('../middleware/verifyToken');
const { authRole } = require('../middleware/authRole');

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.get('/datas',data)
router.get('/protected',verifyToken,authRole(['admin']),(req,res)=>{
    res.status(200).json({
        message: "Protected route",
        user: req.user
    });
})
router.get('/users',page)
module.exports = router