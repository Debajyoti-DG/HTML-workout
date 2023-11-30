require('dotenv').config();
const express = require("express");
const path =  require("path");
const app = express();
const bodyparser = require('body-parser');
// const fs = require("fs");
const port = process.env.PORT || 3000;
// const port = process.env.PORT;


// DataBase mongodb related stuff (mongoose)
const mongoose = require('mongoose');
mongoose.set('strictQuery',false); // otherwise we get a lot of warnings inside the console which is not ideal

// Some changes for MongoDB

/*
async function main() {
  //await mongoose.connect('mongodb://127.0.0.1:27017/contactDance'); //details is the name of our database
  //await mongoose.connect('mongodb://51.20.176.207:27017/contactDance'); //trial but not successfull as ip address is not static in cyclic.sh

  console.log("Connected to MONGO.....");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));

*/

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log("\n\n The error is : \n\n" + error);
      process.exit(1);
    }
  }

// Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String
});

const Contact = mongoose.model('Contact', contactSchema);


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

app.post('/contact', (req,res)=>{
    
    const con = "Hello boysss, This is Pug Dance site ;) ";
    const params = {'title' : "Pug Dance", 'content' : con}; //This is an object that we will pass or render
    var mydata = new Contact(req.body);
    mydata.save().then(()=>{
        // res.send("These items have been saved to the database !!!");
        res.status(200).render('contact.pug',params);
    }).catch(()=>{
        res.status(400).send("Item could not to be sent to the database");
    }); 

    // .then() is used to handle the promise because the .save(); function returns a promise. 
    // In Node, everything is asynchronous 
    // .catch() is shown only when there is an error while sending the data to the database

});

// START THE SERVER --> Minor changes done - earlier it was only app.listen()
connectDB().then(() => {
    app.listen(port, ()=>{
    console.log(`Application running succesfully at port : ${port}`);
    })
});