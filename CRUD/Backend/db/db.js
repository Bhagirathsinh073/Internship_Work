const mongoose = require('mongoose');
const ConnectDB =   async() =>{
    try {
        const DB = await mongoose.connect(process.env.MONGO_DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${DB.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;