const prisma = require("../models/prisma");

exports.categories = async (req, res, next) => {
    try {
        const { value, error } = checkProductIdSchema.validate(req.params);

        if (error) {
            return next(error);
        }

        const categories = await prisma.product.findMany({
            where: {
                categoryId: +value,
            },
            include: {
                image: {
                    select: {
                        image: true,
                    },
                },
            },
        });

        if (!categories) {
            return next(createError("Category is not found", 404));
        }

        res.status(200).json({ categories });
    } catch (err) {
        next(err);
    }
};

exports.allCategories = async (req, res, next) => {
    try {
        const allCategory = await prisma.category.findMany({});

        if (!allCategory) {
            return next(createError("Category is not found", 404));
        }

        res.status(200).json({ allCategory });
    } catch (err) {
        next(err);
    }
};
