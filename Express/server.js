const express = require("express");
const path =  require("path");
const app = express();
const fs = require("fs");
const port = 80; //by default port is 80 for sending and receiving unencrypted webpages


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // used for serving static files 
app.use(express.urlencoded({extended : true})); //used for bringing html form data to the backend in express


// PUG SPECIFIC STUFF
app.set('view engine','pug')  //set the template engine as pug
app.set('views', path.join(__dirname, 'templates')) //set the view directory


// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "Hello boysss, This is Pug ;) ";
    const params = {'title' : "This is Pug title", 'content' : con}; //This is an object that we will pass or render
    res.status(200).render('index.pug', params);
});

app.post('/', (req,res)=>{
    console.log(req.body); //sends us the data entered through post request in html form in the form of a javascript object
    const form = req.body; // full object
    console.log(req.body.name);
    
    //the name,age,gender,etc. mentioned in req.body.age .... are the name="age" set in the form in HTML and NOT the id="age". Hence we access them with the help of name and not id over here.

    const name = req.body.name; 
    const age = req.body.age;
    const address = req.body.address;
    const gender = req.body.gender;
    const more = req.body.more;

    let outputToWrite = `The name is ${name}, ${gender} of ${age} years old, residing at ${address}. More info : ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);

    const params = {'message' : "Your form has been submitted successfully !!! "};
    res.status(200).render('index.pug', params);
});

app.get('/demo', (req,res) =>{
    res.status(200).render('demo', {title : 'This is programming !!!', message : 'This is pug demo. I am still learning how to use pug in development !' });
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`Application running succesfully at port : ${port}`);
});
