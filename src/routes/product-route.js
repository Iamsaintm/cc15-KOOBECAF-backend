const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const productController = require("../controllers/product-controller");

const router = express.Router();

router.get("/allproduct", authenticateMiddleware, productController.allProduct);
router.get("/:productId", authenticateMiddleware, productController.getProduct);
router.get("/search", authenticateMiddleware, productController.search);
router.delete("/:productId", authenticateMiddleware, productController.deleteProduct);

module.exports = router;
