const userSchema = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const RegisterController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const exists = await userSchema.findOne({ username });

        if (exists) {
            return res.status(400).json({
                message: 'user allready exists !'
            })
        };

        const hashpass = await bcrypt.hash(password, 10);

        const user = (await userSchema.create({ username, email, password: hashpass }));
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);

        res.cookie('token', token)
        res.status(201).json({
            message: 'user created',
            user
        })

    } catch (error) {
        res.status(404).json({
            message: 'something not good'
        })
    }
};
const LoginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await userSchema.findOne({ username });
        if (!user) {
            res.status(401).json({
                message: 'Incorrect Username'
            })
        };

        const passMatch = await bcrypt.compare(password, user.password)

        if (!passMatch) {
            res.status(401).json({
                message: 'Incorrect Password'
            })
        };
        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
        res.cookie('token', token)
        res.status(200).json({
            message: 'User Logged In Sucessfully',
            user
        })
    } catch (error) {
        res.status(404).json({
            message: 'something not good'
        })
    }
};

const LogoutController = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,  // set to false in localhost if needed
        sameSite: "strict"
    });

    return res.status(200).json({
        message: "Logged out successfully"
    });
}



module.exports = { RegisterController, LoginController, LogoutController };