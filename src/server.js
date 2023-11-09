const server = require("./app");
const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (Socket) => {
    console.log("user connected");

    Socket.on("chat:message", (msg) => {
        console.log("message: " + JSON.stringify(msg));
        io.emit("chat:message", msg);
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
