const mongoose = require('mongoose')

const schema = mongoose.Schema;

const postSchema = new schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;