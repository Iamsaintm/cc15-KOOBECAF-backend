const prisma = require("../models/prisma");
const createError = require("../utils/create-error");

exports.addMessage = async (req, res, next) => {
    try {
        const data = req.body;
        await prisma.chat.create({
            data: {
                message: data.text,
                requesterId: data.senderId,
                receiverId: data.receiverId,
                productId: data.productId,
            },
        });
    } catch (err) {
        next(err);
    }
};

// exports.getChatMessage = async (req, res, next) => {
//     try {
//         await prisma.chat.findMany({
//             where: {
//                 req,
//             },
//         });
//     } catch (err) {
//         next(err);
//     }
// };

exports.getAllChatByUserId = async (req, res, next) => {
    try {
        const id = req.user.id;
        const { otherId } = req.body;
        const userChat = await prisma.chat.findMany({
            where: {
                OR: [
                    { receiverId: id, requesterId: otherId },
                    { receiverId: otherId, requesterId: id },
                ],
            },
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: user,
                    attributes: { exclude: "password" },
                    as: "myreceiverId",
                },
                {
                    model: User,

                    attributes: { exclude: "password" },
                    as: "myrequestId",
                },
            ],
        });
        res.status(200).json({ userChat });
    } catch (err) {
        console.log(err);
        next(err);
    }
};

exports.getInboxMessage = async (req, res, next) => {
    try {
        const allProduct = await prisma.product.findMany({
            where: {
                userId: req.user.id,
            },
        });
        const objProducts = {};
        allProduct.forEach((el) => {
            objProducts[el.id] = el;
        });

        const mess = await prisma.chat.findMany({
            where: {
                OR: [{ receiverId: req.user.id }, { requesterId: req.user.id }],
            },
        });
        const uniqueObj = {};
        const requesterArr = mess
            .filter((item, index) => item.requesterId !== req.user.id)
            .map((el) => ({ userId: el.requesterId, productId: el.productId }));
        const receiverArr = mess
            .filter((item, index) => item.receiverId !== req.user.id)
            .map((el) => ({ userId: el.receiverId, productId: el.productId }));

        [...requesterArr, ...receiverArr].forEach((item, index) => {
            if (!uniqueObj[item.userId]) uniqueObj[item.userId] = {};
            uniqueObj[item.userId][item.productId] = objProducts[item.productId];
        });
        const allUser = await Promise.all(
            Object.keys(uniqueObj).map((el) =>
                prisma.user.findFirst({
                    where: { id: +el },
                }),
            ),
        );

        const objUsers = {};
        allUser.forEach((el) => {
            objUsers[el.id] = el;
        });
        const responseObj = [];

        for (let [key, value] of Object.entries(uniqueObj)) {
            for (let product of Object.values(value)) {
                responseObj.push({ product, user: objUsers[key] });
            }
        }
        res.status(200).json(responseObj);
    } catch (err) {
        next(err);
    }
};

exports.createRoom = async (req, res, next) => {
    try {
        const data = req.body;

        // await prisma.chatroom.findMany({
        //     where
        // })
        await prisma.chat.create({
            data: {
                message: data.text,
                requesterId: data.senderId,
                receiverId: data.receiverId,
                productId: data.productId,
            },
        });
    } catch (err) {
        next(err);
    }
};
