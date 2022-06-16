const express = require("express");
const blogs = require("../data/tech");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("bloghome", { blogs, tech: true });
});

router.get("/:slug", (req, res) => {
  myblog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  console.log(myblog[0]);
  res.render("blogpage", {
    title: myblog[0].title,
    description: myblog[0].description,
  });
});

module.exports = router;
