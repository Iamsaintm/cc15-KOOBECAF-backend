const { upload } = require("../utils/cloudinary-service");
const prisma = require("../models/prisma");
const fs = require("fs/promises");

exports.updateProfile = async (req, res, next) => {
    try {
        const data = req.body;

        const response = {};

        if (data) {
            await prisma.user.update({
                data: data,
                where: {
                    id: req.user.id,
                },
            });
        }

        if (req.files.profileImage) {
            const url = await upload(req.files.profileImage[0].path);
            response.profileImage = url;
            await prisma.user.update({
                data: {
                    profileImage: url,
                },
                where: {
                    id: req.user.id,
                },
            });
        }

        if (req.files.coverImage) {
            const url = await upload(req.files.coverImage[0].path);
            response.coverImage = url;
            await prisma.user.update({
                data: {
                    coverImage: url,
                },
                where: {
                    id: req.user.id,
                },
            });
        }

        res.status(200).json({ message: "Update success" });
    } catch (err) {
        next(err);
    } finally {
        if (req.files?.profileImage) {
            fs.unlink(req.files.profileImage[0].path);
        }
        if (req.files?.coverImage) {
            fs.unlink(req.files.coverImage[0].path);
        }
    }
};
