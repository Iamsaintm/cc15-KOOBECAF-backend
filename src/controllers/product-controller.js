const prisma = require("../models/prisma");
const createError = require("../utils/create-error");

exports.categories = async (req, res, next) => {
    try {
        const { catId } = req.params;
        const categories = await prisma.product.findMany({
            where: {
                categoryId: +catId,
            },
            include: {
                image: {
                    select: {
                        image: true,
                    },
                },
            },
        });
        res.status(200).json({ categories });
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

exports.allCategories = async (req, res, next) => {
    try {
        const allcat = await prisma.category.findMany({});
        res.status(200).json({ allcat });
    } catch (err) {
        next(err);
    }
};
