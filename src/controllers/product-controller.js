const fs = require("fs/promises");
const prisma = require("../models/prisma");
const createError = require("../utils/create-error");
const { upload } = require("../utils/cloudinary-service");
const { checkProductIdSchema } = require("../validators/product-validator");

exports.getProductById = async (req, res, next) => {
    try {
        const { value, error } = checkProductIdSchema.validate(req.params);

        if (error) {
            return next(error);
        }
        const product = await prisma.product.findFirst({
            where: {
                id: +value.productId,
            },
            include: {
                usersId: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true,
                        coverImage: true,
                    },
                },
                image: {
                    select: {
                        image: true,
                    },
                },
            },
        });
        if (!product) {
            return next(createError("Product is not found", 404));
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

        res.status(200).json({ product, isWishList });
    } catch (err) {
        next(err);
    }
};

exports.getProductByCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;

        const product = await prisma.product.findMany({
            where: {
                categoryId: +categoryId,
            },
            include: {
                usersId: {
                    select: {
                        firstName: true,
                        lastName: true,
                        profileImage: true,
                        coverImage: true,
                    },
                },
                image: {
                    select: {
                        image: true,
                    },
                },
            },
        });

        if (!product) {
            return next(createError("Product is not found", 404));
        }

        res.status(200).json({ product });
    } catch (err) {
        next(err);
    }
};

exports.getProductByUserId = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const product = await prisma.product.findMany({
            where: {
                userId: +userId,
            },
            include: {
                image: {
                    select: { image: true },
                },
            },
        });

        res.status(200).json({ product });
    } catch (err) {
        next(err);
    }
};

exports.getAllProduct = async (req, res, next) => {
    try {
        const allProduct = await prisma.product.findMany({
            include: { image: { select: { image: true } } },
        });

        if (!allProduct) {
            return next(createError("Product is not found", 404));
        }

        res.status(200).json({ allProduct });
    } catch (err) {
        next(err);
    }
};

exports.searchProduct = async (req, res, next) => {
    try {
        const { searchName } = req.body;

        if (!searchName) {
            return next(createError("Product is require", 400));
        }

        const data = await prisma.product.findMany({});

        if (!data) {
            return next(createError("Product is not found", 404));
        }

        const product = data.filter((el) =>
            el.productName.toLowerCase().includes(searchName.toLowerCase()) ? el : null,
        );
        res.status(200).json({ product });
    } catch (err) {
        next(err);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        if (!data) {
            return next(createError("Product is required", 400));
        }

        if (!req.files.productImage) {
            return next(createError("Product image is required", 400));
        }

        const uploadedImages = [];
        for (const file of req.files.productImage) {
            const productImage = await upload(file.path);
            uploadedImages.push(productImage);
        }

        const product = await prisma.product.create({
            data: {
                productName: data.productName,
                productPrice: data.productPrice,
                description: data.description,
                latitude: +data.latitude,
                longitude: +data.longitude,
                userId: req.user.id,
                categoryId: +data.categoryId,
                vehicleType: data.vehicleType,
                vehicleBrand: data.vehicleBrand,
                vehicleModel: data.vehicleModel,
                vehicleYears: +data.vehicleYears,
                homeProperty: data.homeProperty,
                homeType: data.homeType,
                bedroomQuantity: +data.bedroomQuantity,
                bathroomQuantity: +data.bathroomQuantity,
                homeAddress: data.homeAddress,
            },
        });

        const imageData = uploadedImages.map((file) => {
            return {
                image: file,
                productId: product.id,
            };
        });

        const images = await prisma.image.createMany({
            data: imageData,
        });

        res.status(200).json({ product, images });
    } catch (err) {
        next(err);
    } finally {
        for (const file of req.files?.productImage) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    return next(createError("Can't delete file", 400));
                }
            });
        }
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
            return next(createError("Product is not found", 404));
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

exports.editProduct = async (req, res, next) => {
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
            return next(createError("Product is not found", 400));
        }

        const data = req.body;

        if (data.idsToDelete) {
            idsToDelete = JSON.parse(data.idsToDelete);
            delete data.idsToDelete;

            await prisma.image.deleteMany({
                where: {
                    id: {
                        in: idsToDelete,
                    },
                },
            });
        }

        const product = await prisma.product.update({
            data: data,
            where: {
                id: existProduct.id,
            },
        });

        if (req.files.productImage) {
            const image = [];
            for (const file of req.files?.productImage) {
                const productImage = await upload(file.path);
                image.push(productImage);
            }

            const imageObj = image.map((file) => {
                return {
                    image: file,
                    productId: product.id,
                };
            });

            await prisma.image.createMany({
                data: imageObj,
            });
        }

        res.status(200).json({ message: "edited product" });
    } catch (err) {
        next(err);
    } finally {
        for (const file of req.files?.productImage) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    return next(createError("Can't delete file", 400));
                }
            });
        }
    }
};

exports.getWishlistByUserId = async (req, res, next) => {
    try {
        const wishlistProduct = await prisma.wishlist.findMany({
            where: {
                userId: req.user.id,
            },
            include: {
                productsId: {
                    include: {
                        image: {
                            select: {
                                image: true,
                            },
                        },
                    },
                },
            },
        });

        res.status(200).json({ message: "founded wishlist product", wishlistProduct });
    } catch (err) {
        next(err);
    }
};
