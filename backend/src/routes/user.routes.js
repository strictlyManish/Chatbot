const express = require("express");
const routes = express.Router();
const {RegisterController,LoginController,LogoutController} =  require("../controller/user.controller");


routes.post("/register",RegisterController)
routes.post("/login",LoginController)



routes.get("/logout",LogoutController)
module.exports = routes