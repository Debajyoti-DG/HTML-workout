const express = require("express");

const path =  require("path");

const app = express();
const port = 80; //by default port is 80 for sending and receiving unencrypted webpages






//=======================================================================================================================

app.use('/static', express.static('static'));  // used for serving static files 

//set the template engine as pug
app.set('view engine','pug')

//set the view directory
app.set('views', path.join(__dirname, 'templates'))

//Our pug demo endpoint
app.get('/demo', (req,res) =>{
    res.status(200).render('demo', {title : 'This is programming !!!', message : 'This is pug demo. I am still learning how to use pug in development !' });
});

//=========================================================================================================================




// app.get('/', (req,res) =>{
//     res.send("This is home page of app using Express");
// });

//To send status --> 200, 404,etc. (200 is default)
app.get('/', (req,res) =>{
    res.status(200).send("This is home page of app using Express");
});

//get request of about
app.get('/about', (req,res) =>{
    res.send("This is about page using Express");
}); 
//post request of about
app.post('/about', (req,res) =>{
    res.send("This is post request in about page using Express");
});
app.get('/contact', (req,res) =>{
    res.send("This is contact page using Express");
});
app.get('/this', (req,res) =>{
    res.status(404).send("This page is not available");
});

app.listen(port, ()=>{
    console.log(`Application running succesfully at port : ${port}`);
});
