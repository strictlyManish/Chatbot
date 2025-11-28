const jwt = require("jsonwebtoken");


const authController = async (req,res,next) =>{
    const token = req.cookies.token;
    console.log(token)
    if(!token){
        res.status(403).json({
            message:'Kindle Provide Token'
        })
    };

    const verify =  jwt.verify(token,process.env.JWT_KEY);

    if(!verify){
        res.status(403).json({
            message:'token not verified, login again'
        })
    }
    next()
};


module.exports = authController