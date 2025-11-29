require("dotenv").config();
const express = require("express");
const app = express();
const Connect = require("./src/db/db");
const userRoutes = require("./src/routes/user.routes");
const MainRoutes = require("./src/routes/main.routes");
const cookie_prser = require("cookie-parser");
const createSocketServer = require("./src/services/soket");
const cors = require("cors");

// Middlewares here --
app.use(express.json());
app.use(cookie_prser())

app.use(cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // allow cookies/headers
}));

//api --
app.use("/api", userRoutes)
app.use("/", MainRoutes)

const soketConnection = createSocketServer(app);

Connect()
soketConnection.listen(process.env.PORT, function () {
    console.log('Server Runnig on port ', process.env.PORT)
})