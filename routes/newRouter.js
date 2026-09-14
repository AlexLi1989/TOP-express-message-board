const { Router } = require("express");
const newRouter = Router();
const messages = require("../db/messages");

newRouter.get("/", (req, res) => res.render("form", { TITLE: "New Message" }));

newRouter.post("/", (req, res) => {
  const { name, message } = req.body; //destructure form data
  messages.push({
    id: messages.length,
    text: message,
    user: name,
    added: new Date(),
  });
  res.redirect("/"); //send user back to index
});

module.exports = newRouter;
