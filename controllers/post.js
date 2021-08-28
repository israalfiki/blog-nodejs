const Post = require('../models/post')

// get all posts
exports.getPosts = (req, res) => {
        Post.find()
          .then((blogs) => {
            res.render("../views/index.ejs", {
              title: "My Great Fucking Blog",
              blogs: blogs,
            });
          })
          .catch((err) => {
            console.log(err);
          });
}

//create post
exports.showCreatePost = (req, res) => {
    res.render("../views/posts/create-post.ejs", { title: "Create New Post" });
  }

exports.createPost = (req, res) => {
    console.log(req.body);
    const post = new Post({
      title: req.body.title,
      snippet: req.body.snippet,
      body: req.body.body,
    });
    post
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

//show a single post
exports.showPost = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
      .then((post) => {
        res.render("../views/posts/show-post.ejs", { title: post.title, post: post });
      })
      .catch((err) => {
        console.log(err);
      });
  }

//update a single post
exports.showEditPost = (req, res) => {
    console.log("edit mode");
    const id = req.params.id;
    Post.findById(id)
      .then((post) => {
        res.render("../views/posts/edit-post.ejs", {
          title: "Edit a post",
          post: post,
        });
      })
      .catch((err) => {
        console.log(err);
      });
}

exports.updatePost = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const snippet = req.body.snippet;
    const body = req.body.body;
    Post.findByIdAndUpdate(id, {
      title: title,
      snippet: snippet,
      body: body,
    }).then((result)=>{
        console.log('Updated Successfuly!')
        res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })
}

//delete a single post
exports.deletePost = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
      .then((result) => {
        console.log("record deleted!");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }