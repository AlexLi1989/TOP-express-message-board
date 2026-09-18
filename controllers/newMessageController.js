const { body, validationResult, matchedData } = require("express-validator");
const db = require("../db/queries");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 3 and 20 characters.";

const validateMessage = [
  body("name")
    .trim()
    .isAlpha()
    .withMessage(alphaErr)
    .isLength({ min: 3, max: 20 })
    .withMessage(lengthErr)
    .escape(),
  body("message").trim().escape(),
];

function messageCreateGet(req, res) {
  res.render("newMessage", {
    TITLE: "New Message",
    message: {},
  });
}

const messageCreatePost = [
  ...validateMessage,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render("newMessage", {
          TITLE: "New Message",
          message: req.body,
          errors: errors.array(),
        });
      }
      const { name, message } = matchedData(req);
      const added = new Date();
      await db.insertUserMessage(name, message, added);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  },
];

module.exports = {
  messageCreateGet,
  messageCreatePost,
};
