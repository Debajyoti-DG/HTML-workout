const express = require("express");
const path =  require("path");
const app = express();
// const fs = require("fs");
const port = 80;


// DataBase mongodb related stuff (mongoose)
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactDance'); //details is the name of our database
  console.log("Connected to MONGO.....");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));


// Define mongoose schema


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // used for serving static files 
app.use(express.urlencoded({extended : true})); //used for bringing html form data to the backend in express


// PUG SPECIFIC STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('views', path.join(__dirname, 'templates1')) //set the view directory


// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "Hello boysss, This is Pug Dance site ;) ";
    const params = {'title' : "Pug Dance", 'content' : con}; //This is an object that we will pass or render
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req,res)=>{
    const con = "Hello boysss, This is Pug Dance site ;) ";
    const params = {'title' : "Pug Dance", 'content' : con}; //This is an object that we will pass or render
    res.status(200).render('contact.pug', params);
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`Application running succesfully at port : ${port}`);
});