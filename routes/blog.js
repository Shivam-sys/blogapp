const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");
const router = express.Router();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../templates/index.html"));
  res.render("home");
});

router.get("/blog", (req, res) => {
  blogs.forEach((element) => {
    console.log(element.title);
  });
  // res.sendFile(path.join(__dirname, "../templates/bloghome.html"));
  res.render("bloghome", { blogs });
});

router.get("/blog/:slug", (req, res) => {
  myblog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  console.log(myblog);
  res.render("blogpage", {
    title: myblog[0].title,
    description: myblog[0].description,
  });
  // res.sendFile(path.join(__dirname, "../templates/blogpage.html"));
});

module.exports = router;
