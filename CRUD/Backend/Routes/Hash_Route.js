const express = require('express');
const { register, login, data } = require('../Controller/Hash/Hash_controller');
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

module.exports = router