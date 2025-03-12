const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    // get token from request header
    const token =req.header('Authorization')?.split(' ')[1];

    if(!token) return res.status(401).json({error: "Access denied"});

    // verify token here
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(400).json({error: "Invalid token"});
    }
}

module.exports = {verifyToken};