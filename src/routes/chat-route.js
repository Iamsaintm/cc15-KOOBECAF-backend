const express = require("express");
const authenticateMiddleware = require("../middlewares/authenticate");
const chatController = require("../controllers/chat-controller");

const router = express.Router();
router.post("/chat", authenticateMiddleware, chatController.addMessage);
router.get("/getinbox", authenticateMiddleware, chatController.getInboxMessage);

module.exports = router;
