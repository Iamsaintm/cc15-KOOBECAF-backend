const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const productController = require("../controllers/product-controller");

const router = express.Router();
router.get("/allproduct", authenticateMiddleware, productController.allProduct);
router.get("/allcat", authenticateMiddleware, productController.allCategories);
router.get("/:catId", authenticateMiddleware, productController.categories);

module.exports = router;
