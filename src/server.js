const server = require("./app");
const { Server } = require("socket.io");

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
    },
});
const onlineUser = {};

io.use((socket, next) => {
    const userId = socket.handshake.auth.id;
    console.log(socket.id);
    console.log(userId);
    if (!userId) {
        return next(new Error("invalid username"));
    }
    socket.userId = userId;
    onlineUser[userId] = socket.id;
    // console.log(onlineUser);
    next();
});

io.on("connection", (socket) => {
    // console.log(`${socket.id} user connected`);
    // const seller = input?.receiverId;

    socket.on("sendMessage", async (input) => {
        console.log(input?.receiverId);
        io.to(onlineUser[input?.receiverId]).emit("receiveMessage", input);
        // if(socket.id == seller )
        // console.log(input.receiverId);
    });

    // socket.on("sendMessageReceiver", async (input) => {
    //     io.to(onlineUser[input?.senderId]).emit("getReceiveMessage", input);
    //     // console.log(input.receiverId);
    // });
    //แก้ไข เป็น io.to(socketId).emit เพื่อส่งแบบprivate

    socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

    socket.on("disconnect", () => {
        delete onlineUser[socket.userId];
        console.log(`User ${socket.id} disconnect`);
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
