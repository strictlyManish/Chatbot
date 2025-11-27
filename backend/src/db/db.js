const mongoose = require("mongoose");


const Connect = () =>{
    try {
        mongoose.connect(process.env.MONGOOSE_URI);
        console.log('Database Connnect Sucessfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = Connect;