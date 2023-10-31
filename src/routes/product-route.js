const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const productController = require("../controllers/product-controller");
const uploadMiddleware = require("../middlewares/upload");

const router = express.Router();

router.get("/allproduct", authenticateMiddleware, productController.allProduct);
router.get("/search", authenticateMiddleware, productController.search);
router.patch(
    "/edit/:productId",
    authenticateMiddleware,
    uploadMiddleware.fields([{ name: "productImage", maxCount: 5 }]),
    productController.editProduct,
);
router.delete("/:productId", authenticateMiddleware, productController.deleteProduct);

module.exports = router;
