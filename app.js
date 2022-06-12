const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
