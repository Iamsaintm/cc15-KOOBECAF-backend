const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const categoryController = require("../controllers/category-controller");

const router = express.Router();
router.get("/allcat", authenticateMiddleware, categoryController.allCategories);
router.get("/:catId", authenticateMiddleware, categoryController.categories);

module.exports = router;
