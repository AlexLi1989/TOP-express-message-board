const { Router } = require("express");
const indexRouter = Router();
const messages = require("../db/messages");

indexRouter.get("/", (req, res) =>
  res.render("index", { TITLE: "Mini Messageboard", messages: messages }),
);
indexRouter.get("/message/:messageId", (req, res, next) => {
  const { messageId } = req.params;
  const message = messages.find((m) => m.id === Number(messageId));
  if (!message) {
    return next();
  }
  res.render("message", {
    TITLE: "Message",
    USER: message.user,
    TEXT: message.text,
    DATE: message.added,
  });
});

module.exports = indexRouter;
