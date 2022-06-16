const express = require("express");
const router = express.Router();
const blogs = require("../data/life");

router.get("/", (req, res) => {
  res.render("bloghome", { blogs, life: true });
});

router.get("/:slug", (req, res) => {
  myblog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  res.render("blogpage", {
    title: myblog[0].title,
    description: myblog[0].description,
  });
});

module.exports = router;
