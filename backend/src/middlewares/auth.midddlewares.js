const jwt = require("jsonwebtoken");


const authController = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(403).json({
                message: 'Kindle Provide Token'
            })
        };

        const verify = jwt.verify(token, process.env.JWT_KEY);

        if (!verify) {
            res.status(403).json({
                message: 'token not verified, login again'
            })
        };
        req.user = verify;
        next()
    } catch (error) {
        return res.status(500).json({
            message: 'Something is not going good'
        })
    }
};


module.exports = authController