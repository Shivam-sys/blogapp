const express = require("express");
const path = require("path");
var { engine } = require("express-handlebars");

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "static")));
// app.use("/", require(path.join(__dirname, "routes/blog.js")));
//! Instead of using above way of writing path, use below otherwise it will become platform dependent.
//! '/' works in windows, in mac '\' is there.
// app.use("/", require(path.join(__dirname, "routes", "tech.js")));

app.get("/", (req, res) => {
  res.render("home");
});

const techRouter = require("./routes/tech");
app.use("/tech", techRouter);

const lifeRouter = require("./routes/life");
app.use("/life", lifeRouter);

app.listen(PORT);
