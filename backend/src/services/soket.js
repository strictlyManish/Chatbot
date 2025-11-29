const { createServer } = require("http");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken")
const cookie = require("cookie");
const userSchema = require("../models/userModel");

const createSocketServer = (app) => {
    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            allowedHeaders: ["Content-Type", "Authorization"],
            credentials: true
        }
    });

    io.use(async (socket, next) => {
        const token = socket.handshake.headers?.token;

        if (!token) {
            return next(new Error("No token provided"));
        };


        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            const user = await userSchema.findById(decoded.id)
            if (!user) return next(new Error("User not found"));
            socket.user = user;
            next();

        } catch (error) {
            next(new Error("Invalid token"));
        }

    });

    io.on("connection", (socket) => {
        console.log("User connected:", socket.user?.username);



        socket.on("myEvent", (payload) => {
            console.log("Received from client:", payload);

            // send back a response
            socket.emit("myEventResponse", { status: "ok",payload});
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.user?.username);
        });
    });


    return httpServer;
};


module.exports = createSocketServer