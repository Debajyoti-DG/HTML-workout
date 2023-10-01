const express = require("express");
const path =  require("path");
const app = express();
const port = 80; //by default port is 80 for sending and receiving unencrypted webpages


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // used for serving static files 


// PUG SPECIFIC STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('views', path.join(__dirname, 'templates')) //set the view directory


// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "Hello boysss, This is Pug !!!";
    const params = {'title' : "This is Pug title", 'content' : con}; //This is an object that we will pass or render
    res.status(200).render('index.pug', params);
});

app.get('/demo', (req,res) =>{
    res.status(200).render('demo', {title : 'This is programming !!!', message : 'This is pug demo. I am still learning how to use pug in development !' });
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`Application running succesfully at port : ${port}`);
});
