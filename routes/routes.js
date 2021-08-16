const express = require("express");

const Post = require("../models/post");

const router = express.Router();

const postController = require('../controllers/post')

// index page
router.get("/", postController.getPosts );

//create post
router.get("/blogs/create", postController.showCreatePost);

router.post("/blogs/add-post", postController.createPost);

// view a single post

router.get("/posts/:id", postController.showPost);

//update a single post
router.get("/posts/:id/edit", postController.showEditPost);

router.post("/posts/:id/update", postController.updatePost);

//delete a single post
router.post("/posts/:id/delete", postController.deletePost);

// about and 404 page
router.get("/about", (req, res) => {
  res.render("../views/about.ejs", { title: "About" });
});

router.use((req, res) => {
  res.status("404").render("../views/404.ejs", { title: "404" });
});

module.exports = router;
