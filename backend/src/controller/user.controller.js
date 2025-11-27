const userSchema = require("../models/userModel");


const RegisterController = async (req,res) =>{
    try {
        const {username,email,password} = req.body;
        const exists = userSchema.findOne({username}); 


    } catch (error) {
        
    }
};
const LoginController = async (req,res) =>{};



module.exports =  {RegisterController,LoginController};