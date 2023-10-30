const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/allproduct", authenticateMiddleware, productController.allProduct);
router.get("/search", productController.search);
router.get("/:productId", authenticateMiddleware, productController.getProduct);

module.exports = router;
