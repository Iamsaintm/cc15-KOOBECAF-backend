const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const productController = require("../controllers/product-controller");
const uploadMiddleware = require("../middlewares/upload");

const router = express.Router();

router.get("/allProduct", authenticateMiddleware, productController.allProduct);
router.get("/search", authenticateMiddleware, productController.searchProduct);
router.delete("/:productId", authenticateMiddleware, productController.deleteProduct);
router.post(
    "/create",
    authenticateMiddleware,
    uploadMiddleware.fields([{ name: "productImage", maxCount: 5 }]),
    productController.createProduct,
);

module.exports = router;
