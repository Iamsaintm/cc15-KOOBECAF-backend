const fs = require("fs/promises");
const { checkProductIdSchema } = require("../validators/product-validator");
const upload = require("../utils/cloudinary-service");
const deleteImage = require("../utils/cloudinary-service");
const prisma = require("../models/prisma");
const createError = require("../utils/create-error");

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

        const updateProduct = await prisma.product.update({
            data: data,
            where: {
                id: existProduct.id,
            },
        });

        if (req.files.productImage) {
            const image = [];
            for (const file of req.files.productImage) {
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

        res.status(200).json({ message: "edited product", updateProduct });
    } catch (err) {
        next(err);
    } finally {
        for (const file of req.files.productImage) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    return next(createError("Can't delete file", 400));
                }
            });
        }
    }
};
