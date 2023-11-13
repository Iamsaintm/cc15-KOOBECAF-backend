const prisma = require("../models/prisma");
const createError = require("../utils/create-error");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const YOUR_DOMAIN = process.env.YOUR_DOMAIN;

exports.payment = async (req, res, next) => {
    try {
        const { lookup_key } = req.body;
        const prices = await stripe.prices.list({
            lookup_keys: [lookup_key],
            expand: ["data.product"],
        });

        const session = await stripe.checkout.sessions.create({
            billing_address_collection: "auto",
            line_items: [
                {
                    price: prices.data[0].id,
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        });

        res.status(200).json({ url: session.url });
    } catch (err) {
        next(err);
    }
};

exports.createSubscribe = async (req, res, next) => {
    try {
        const { transactionId } = req.params;

        const session = await stripe.checkout.sessions.retrieve(transactionId);

        if (!session) {
            return next(createError("Error"), 400);
        }

        let currentDate = new Date();
        let startSubscribe = currentDate;
        let endSubscribe = new Date(currentDate);
        endDate.setMonth(currentDate.getMonth() + 1);

        await prisma.user.update({
            where: {
                id: +req.user.id,
            },
            data: {
                isSubscribe: true,
                startSubscribe: startSubscribe,
                endSubscribe: endSubscribe,
            },
        });

        await prisma.product.update({
            where: {
                id: +req.user.id,
            },
            data: {
                point: 5,
            },
        });

        res.status(201).json({ session });
    } catch (error) {
        next(error);
    }
};
