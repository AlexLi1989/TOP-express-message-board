const db = require("../db/queries");

async function userMessageDelete(req, res, next) {
  try {
    await db.deleteUserMessage(req.body.id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

async function userMessageGet(req, res, next) {
  try {
    const message = await db.getUserMessage(req.params.messageId);
    res.render("message", {
      TITLE: "Message",
      message: message,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  userMessageDelete,
  userMessageGet,
};
