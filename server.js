const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 8080;
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("view engine", "ejs");
//for static resources
app.use(express.static(path.join(__dirname, "public")));
//for parsing the form data
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.use((req, res) => res.status(404).render("404", { TITLE: "Error" }));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
