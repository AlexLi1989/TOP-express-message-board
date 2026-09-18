const { Router } = require("express");
const newMessageRouter = Router();
const newMessageController = require("../controllers/newMessageController");

newMessageRouter.get("/", newMessageController.messageCreateGet);

newMessageRouter.post("/", newMessageController.messageCreatePost);

module.exports = newMessageRouter;
