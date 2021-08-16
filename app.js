const express = require('express');
const mongoose = require('mongoose');


const app = express();


const routes = require('./routes/routes')

app.use(express.urlencoded({ extended: true }));



//connection to mongoDB
const mongodbURI = 'mongodb+srv://nodejs-blog-user-0:nodejs-blog-user-0@cluster0.eywim.mongodb.net/nodejs-blog?retryWrites=true&w=majority'
mongoose.connect(mongodbURI,{ useNewUrlParser: true, useUnifiedTopology:true })
.then((result)=>{
        console.log('connected to the database!')   
})
.then((res)=>{
    app.listen(3000)
 
})
.catch(err=>{
    console.log(err)
})



app.set('view engine','ejs')

app.use(express.static('public'))

app.use(routes)









