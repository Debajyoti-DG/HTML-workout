//refer to Node.js documentaion for more insights on built in modules
//Modules 3 tyoes --> built in modules, self made modules, third party modules

const st = require("fs"); //storing contents (importing) of File System (fs) module in st
let text = st.readFileSync("hello.txt","utf-8"); //it reads the contents of the file , UTF-8 is the encoding

console.log("The content of the file is  : \n" + text);

text = text.replace("abracadabra","Deb"); //we replace the contents of the file
console.log("The content of the file is  : \n" + text);

console.log("Creating a new file...")
st.writeFileSync("Backend with js",text);
