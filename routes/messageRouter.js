const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");

messageRouter.get("/:messageId", messageController.userMessageGet);
messageRouter.post("/:messageId", messageController.userMessageDelete);

module.exports = messageRouter;
