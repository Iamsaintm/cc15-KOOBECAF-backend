const prisma = require("../models/prisma");
const createError = require("../utils/create-error");
const { checkProductIdSchema } = require("../validators/product-validator");

exports.search = async (req, res, next) => {
    try {
        const { input } = req.body;

        const data = await prisma.product.findMany({});

        const found = data.filter((el) => (el.productName.toLowerCase().includes(input.toLowerCase()) ? el : null));
        res.status(200).json({ message: "found", found });
    } catch (err) {
        next(err);
    }
};

exports.allProduct = async (req, res, next) => {
    try {
        const allpro = await prisma.product.findMany({
            include: { image: { select: { image: true } } },
        });
        res.status(200).json({ allpro });
    } catch (err) {
        next(err);
    }
};

exports.getProduct = async (req, res, next) => {
    try {
        const { value, error } = checkProductIdSchema.validate(req.params);
        if (error) {
            return next(error);
        }
        const getProduct = await prisma.product.findFirst({
            where: {
                id: value.productId,
            },
            include: {
                usersId: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true,
                    },
                },
                image: {
                    select: {
                        image: true,
                    },
                },
            },
        });
        if (!getProduct) {
            return next(createError("invalid productId", 400));
        }
        const data = { userId: req.user.id };

        const wishList = await prisma.wishlist.findFirst({
            where: {
                productId: value.productId,
                userId: data.userId,
            },
        });
        let isWishList = false;
        if (wishList) {
            isWishList = true;
        }

        res.status(200).json({ getProduct, isWishList });
    } catch (err) {
        next(err);
    }
};
exports.deleteProduct = async (req, res, next) => {
    try {
        const { value, error } = checkProductIdSchema.validate(req.params);

        if (error) {
            return next(error);
        }

        const existProduct = await prisma.product.findFirst({
            where: {
                id: value.productId,
                userId: req.user.id,
            },
        });

        if (!existProduct) {
            return next(createError("cannot delete this product", 400));
        }
        await prisma.product.delete({
            where: {
                id: existProduct.id,
            },
        });
        res.status(200).json({ message: "deleted" });
    } catch (err) {
        next(err);
    }
};

exports.wishListProduct = async (req, res, next) => {
    try {
        const { value, error } = checkProductIdSchema.validate(req.params);
        if (error) {
            return next(error);
        }
        const data = { userId: req.user.id };

        const alreadyWishList = await prisma.wishlist.findFirst({
            where: {
                productId: value.productId,
                userId: data.userId,
            },
        });

        if (alreadyWishList) {
            await prisma.wishlist.delete({
                where: {
                    id: alreadyWishList.id,
                    userId: data.userId,
                    productId: value.productId,
                },
            });
            res.status(201).json({ message: "deleted" });
            return;
        }
        if (!alreadyWishList) {
            await prisma.wishlist.create({
                data: {
                    userId: data.userId,
                    productId: value.productId,
                },
            });
            res.status(201).json({ message: "success" });
            return;
        }
    } catch (err) {
        next(err);
    }
};
