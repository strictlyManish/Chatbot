const express = require("express");
const ChatController = require("../controller/chat.controller");
const authController = require("../middlewares/auth.midddlewares");
const routes = express.Router();



routes.post("/chat",authController, ChatController);

module.exports = routes;