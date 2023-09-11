//refer to Node.js documentaion for more insights on built in modules
//Modules 3 types --> built in modules, self made modules, third party modules

const { log } = require("console");
const st = require("fs"); //storing contents (importing) of File System (fs) module in st
let text = st.readFileSync("hello.txt","utf-8"); //it reads the contents of the file , UTF-8 is the encoding
//Above sync refers to synchronous...We have instructed NodeJs to first read the contents of the file fully and then only go ahead with the execution of the rest of the statements


console.log("The content of the file is  : \n" + text);

text = text.replace("abracadabra","Deb"); //we replace the contents of the file
console.log("The content of the file is  : \n" + text);

console.log("\n\nCreating a new file...")
st.writeFileSync("Backend with js",text);




/* Types of code -->

   Synchronous and blocking --> Line by line execution

   Asynchronous and non-blocking  --> Line by line execution not guaranteed
                                  --> Callbacks will fire

*/


const st1=require("fs");


//Refer to google
/*.readFile() requires another arguement compared to .readFileSync() which refers to error in the data provided (if any) which is called the callback function. 

The CALLBACK FUNCTON does not affect the sequence of execution of the the entire js code, which is executecd line by line. It only executes itself after the contents are read fully*/


//Below is an asynchronous and non-blocking code
st1.readFile("Backend with js","utf-8",(err,data) => {
    // console.log(err + " is the error , the data is ----->> ", data);
    console.log("The data is ----->> ", data);
});

// The .readfile function is asynchronous , so it is executed later as it does not stop the flow of instructions that are after it. It is only executed after the file is read. 



console.log("This is a message");
