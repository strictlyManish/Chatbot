require("dotenv").config();
const express = require("express");
const app = express();
const Connect = require("./src/db/db");
const userRoutes = require("./src/routes/user.routes");
const MainRoutes = require("./src/routes/main.routes");

// Middlewares here --
app.use(express.json());

//api --

app.use("/api", userRoutes)
app.use("/", MainRoutes)





Connect()
app.listen(process.env.PORT, function () {
    console.log('Server Runnig on port ', process.env.PORT)
})