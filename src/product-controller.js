const prisma = require("./models/prisma");

exports.search = async (req, res, next) => {
    try {
        const { input } = req.body;
        const data = await prisma.product.findMany({
            where: {
                productName,
            },
        });

        const found = data.map((el) => (el.productName.includes(input) ? el : null));
        res.status(200).json({ message: "found", found });
    } catch (err) {
        next(err);
    }
};
