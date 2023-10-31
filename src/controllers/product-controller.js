const fs = require("fs/promises");
const prisma = require("../models/prisma");
const createError = require("../utils/create-error");
const { upload } = require("../utils/cloudinary-service");
const { checkProductIdSchema } = require("../validators/product-validator");

exports.searchProduct = async (req, res, next) => {
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
        const allProduct = await prisma.product.findMany({
            include: { image: { select: { image: true } } },
        });
        res.status(200).json({ allProduct });
    } catch (err) {
        next(err);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const data = req.body;
        if (!data) {
            return next(createError("Room is required", 400));
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
                userId: +data.userId,
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
        for (const file of req.files.productImage) {
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
            return next(createError("cannot delete this product", 400));
        }
        console.log(existProduct);
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
