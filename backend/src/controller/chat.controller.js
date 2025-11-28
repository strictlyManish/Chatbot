const ChatModel = require("../models/chatModel");


const ChatController = async (req, res) => {
    try {
        const user = req.user;

        const { title } = req.body;
        const chatTitle = await ChatModel.create({
            userId: user.id,
            role: 'user',
            chatTitle: title
        });

        res.status(200).json({
            chatTitle,
            message: 'Chat Created Sucessfully'
        })
    } catch (error) {
        res.status(404).json({
            message:'Something is not going good'
        })
    };
};


module.exports = ChatController