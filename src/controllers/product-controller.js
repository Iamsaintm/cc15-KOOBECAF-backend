const prisma = require("../models/prisma");

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
