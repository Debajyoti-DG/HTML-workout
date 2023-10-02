const express = require("express");

const app = express();
const port = 80; //by default port is 80 for sending and receiving unencrypted webpages

app.use('/static', express.static('static'));  // used for serving static files 

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
