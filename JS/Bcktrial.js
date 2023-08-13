const http = require("http");
const fs =  require("fs");

const file_content = fs.readFileSync("Practice HTML/Solar system.html");

const server = http.createServer((req,res)=>{

    res.writeHead(200, {"content-type":"text/html"});
    res.end(file_content)
});

server.listen(80, '127.0.0.1', () => {
    console.log("Listening on port 80"); // If port 80 we do not need to explicitly mention the port after : in IP address else we do mention explicitly (eg, if 8000, then --> 127.0.0.1:8000)
});