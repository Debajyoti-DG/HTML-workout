//TO CREATE A SERVER FOR GYMSITE AND RUN IT

//Always mention the folder name first ... eg ... node .\JS\Server.js otheriwse we end up with module not found

const http = require("http");
const fs = require("fs");

const local_host = '127.0.0.1';
const port = 3000;

//Our peronalised Home and about pages

// const home = fs.readFileSync("Gymsite/Home.html");
// const about = fs.readFileSync("Gymsite/AboutUs.html");
// const fitness = fs.readFileSync("Gymsite/Fitness.html");
// const contact = fs.readFileSync("Gymsite/Contact.html");
const home = fs.readFileSync("./Home.html");
const about = fs.readFileSync("./AboutUs.html");
const fitness = fs.readFileSync("./Fitness.html");
const contact = fs.readFileSync("./Contact.html");

const server = http.createServer((req, res) => {
    console.log(req.url);

    url=req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end(home);

    if (url == '/'){
        res.end(home);
    }

    // else if
    else if (url == '/about'){
        res.end(about);
    }
    else if (url == '/fitness'){
        res.end(fitness);
    }
    else if (url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode=404;
        res.end("<h1> Error 404 not found. </h1>");
        // res.end(home);
    }
});

server.listen(port, local_host, () => {
    console.log(`Server is runnning at : http://${local_host}:${port}/`);
});

// console.log("kfhsiffdruighdiguhrfiogdkjgsedrifjofihdrfejgjkdrfslknkf");