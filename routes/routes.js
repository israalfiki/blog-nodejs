const express = require('express');

const Post = require('../models/posts')


const router = express.Router();

router.get('/', (req,res)=>{
    Post.find()
    .then((blogs)=>{
        res.render('../views/index.ejs',{title: 'My Great Fucking Blog', blogs:blogs})
    })
    .catch(err=>{
        console.log(err)
    })
   
})

//create post
router.get('/blogs/create', (req,res)=>{
    res.render('../views/create-post.ejs',{title: 'Create New Post'})
})

router.post('/blogs/add-post',(req,res)=>{
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        snippet:req.body.snippet,
        body:req.body.body

    })
    post.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch(err=>{
        console.log(err)
    })
    

})

// view a single post

router.get('/posts/:id', (req,res)=>{
    const id = req.params.id;
    Post.findById(id)
    .then((post)=>{
        res.render('../views/show-post.ejs',{title: post.title, post:post})
    })
    .catch(err=>{
        console.log(err)
    })

})

//delete a single post 
router.post('/posts/:id/delete',(req,res)=>{
    const id = req.params.id;
    Post.findByIdAndDelete(id)
    .then((result)=>{
        console.log('record deleted!')
        res.redirect('/')

    })
    .catch(err=>{
        console.log(err)
    })
})


// about and 404 page
router.get('/about', (req,res)=>{
 
    res.render('../views/about.ejs',{title: 'About'})
})

router.use((req,res)=>{
    res.status('404').render('../views/404.ejs',{title: '404'})
})

module.exports  = router