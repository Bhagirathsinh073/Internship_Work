const express = require('express');
const ConnectDB = require('./db/db');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require('./Routes/userRoutes');
const companyRoutes = require('./Routes/companyRoutes');
const Post_Route = require('./Routes/Post-Route');
const Hash_Route = require('./Routes/Hash_Route');


//Env
dotenv.config();
//connect mongodb
ConnectDB();

const app = express();
const PORT = process.env.PORT || 3000;

//own middleware functions 1.create middleware 2.add req,res,next in argu 3.call last at next() function 
const myLogger = function (req,res,next){
    console.log("Middleware");
    next();
}
const requestTime = (req,res,next)=>{
    req.requestTime = Date.now();
    next();
}

// Middleware
app.use(cors());
app.use(express.json());  //pass json to express 
app.use(bodyParser.json());

//error middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong! ---- index.js line global middleware error");
  });

//custom middleware - own middleware use
// app.use(myLogger);
app.use(requestTime);



// Routes
app.use("/api/users", userRoutes);
app.use("/api/com", companyRoutes);
app.use("/api/p1",Post_Route );
app.use("/api/hash",Hash_Route);



app.get('/',(req,res)=>{
    res.send('Welcome to CRUD API');
 });

 app.get('/temp',(req,res)=>{
    res.send('Welcome to Temp API');
 })

 app.get('/temp1', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })



app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})