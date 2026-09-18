const db = require("../db/queries");

async function index(req, res, next) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", {
      TITLE: "Message Board",
      messages: messages,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  index,
};
