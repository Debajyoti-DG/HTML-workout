var a = 78;
var b = "Hello";
c = 34.55;
console.log(a);
console.log(b);
console.log(c + 48.76);

//operators in JS
//operand - entities on which operators operate
//unary (x = -x;), binary (a+b)

var num1 = 23;
var num2 = 5;

//Arithemetic opareators; 
console.log("Num1 + Num2 is : " + (num1 + num2));
console.log("Num1 - Num2 is : " + (num1 - num2));
console.log("Num1 * Num2 is : " + (num1 * num2));
console.log("Num1 / Num2 is : " + (num1 / num2));
console.log("Num1 ** Num2 is : " + (num1 ** num2)); // ** means exponent
console.log("Num1++ is : " + (num1++));
console.log("++Num1 is : " + (++num1));
console.log("++Num1 + --num2 is : " + (++num1 + --num2));

/* Strings in Js */

var str = "This is a string";
console.log(str);

//First occurence of a substring
var position = str.indexOf('r');
console.log(position);

//Last occurence of a substring
position = str.lastIndexOf('s');
console.log(position);


//Substring from a string
// 1 to (7-1)
var substr = str.slice(1, 7);
console.log(substr);

substr = str.substring(1, 7);
console.log(substr);

console.log("\n\n\nNew substr function \n");

// 7 characters starting from 1 index
var substr1 = str.substr(1, 7);
console.log(substr1);

//replace substring in string
var replaced = str.replace('This is', 'They are');
console.log(replaced);
console.log(replaced.toUpperCase());
console.log(replaced.toLowerCase());

//concatenation
var newstr = str.concat('new str');
console.log(newstr);

var whtspc = "    this containes       whitespaces    ";
console.log(whtspc);
console.log(whtspc.trim());
console.log(whtspc.trim().charAt(6));
console.log(whtspc.trim()[6]);


//scope and conditionals

//if we write var within a function then its scope stays within the function itself
var string1 = "This is a string apple";
console.log(string1);
var string2 = "This is a string mango";
console.log(string2);
console.log(string2.length);


//let function gives us block level scope. should use let preferrably if we are creating variables global, within fucntion, if else, etc.
let a1 = "u";
{
    let a1 = "u2";  // this a1 scope is only withuin the block mentioned in {}
    console.log(a1);
}
console.log(a1);

const a2 = "This cannot be changed";
console.log(a2);

// a2="I tried to change it";  //this generated error
// console.log(a2);

let age = 17;
if (age > 18) {
    console.log("U can drink wine");
}
else if (age > 16 && age <= 18) {
    console.log("U can drink cold drink");
}
else {
    console.log("U can drink water");
}


//switch case

switch (age) {

    case 18:
        console.log("U can drink wine");
        break;

    case 17:
        console.log("U can drink cold drink");
        break;

    default:
        console.log("U can drink water");
        break;
}

//primitive data types
let var1 = 34;
let var2 = 36.455;
let var3 = "This string";
let var4 = true;
let var5 = null;
let var6 = undefined;

//object --> Non-primitive data type in JavaScript
let employee = {

    //key = value (format)
    name: "Deb",
    salary: 10,
    channel1: "Music",
    channel2: "Program",
    "genre of song": "Hip hop"
}
console.log(employee);

//two ways to display a particular element
console.log("Salary is : " + employee.salary);
console.log("Salary is : " + employee['salary']);
console.log("Genre is : " + employee["genre of song"]);
// canot use employee.genre of songs  ---> ERROR


//Array
let names = [1, 2, true, "this is a string", null];
console.log(names);
console.log(names[2]);

names.push("hello");
console.log(names);

//another way to declare array 
let names1 = new Array(11, 2, 13, 4, true, "hello", null, undefined);
console.log(names1);
console.log(names1[4]);
console.log(names1.length);

//This will create a new array with 23 elements
let names2 = new Array(23);
console.log(names2);

names1 = names1.sort();
console.log(names1);

let arr1 = [7878, 3, 76, 44, 4545, 2];
arr1 = arr1.sort();
console.log(arr1);

//functions --> enhances code reusability

function greet(name) {
    console.log(name + " is a good person");
}
greet("Deb");
greet("Margot Robbie");
greet(11);


//greetings="This is greeting";
function greet(name, greetings = "Greetings from JavaScript.") {
    console.log("Good Morning " + name + ". " + greetings);
    console.log(name + " is a good person");
}

greet("Deb", "This is greeting.");
greet("RRR"); //As we do not mention any second parameter, the second one (greetings="Greetings from JavaScript") is executed as it is the DEFAULT VALUE mentioned in the function parameter

let storing = greet("Deb");
console.log(storing); //This will show undefined as the function greet does not return anything

//To make a functon return a value, we must write the program as this
function sum(a, b, c) {
    let d = a + b + c;
    return d;
    //anything written after the return statement will never be executed, as it takes control out of the block 
    //console.log(" In sooth I know not why I am so ecstatic ;) ");
}

let add = sum(1, 2, 3);
console.log(add);  //Proper function as it returns a value

/*
//ALERT, PROMPT, CONFIRM

//Alert does not return anything
alert("This is an alert message");  //uff ki darun jinish eta. Opens a modal...page is unreactive until user presses OK


//Prompt
let playername = prompt("This is a prompt\nWhat is your name ? ", "Guest");  //the 2nd arguement is the default arguement
console.log(playername + " is the name entered by the player.");


//Confirm
let deletePost = confirm("This is confirm\nDo you really want to delete this post ? "); //retruns TRUE if we press OK else returns FALSE
console.log(deletePost); 


if (deletePost){
    //condtion on succesfull deletion
    console.log("Your post has been deleted succesfully !");
}
else{
    //condition if no deletion
    console.log("Your post has not been deleted !!!");

}

let userage = prompt("What is your age ?", 16);
if(userage < 18){
    alert("You are Underage");

}
else{
    console.log("Welcome");
    alert("You are eligible");
}
*/


let i = 0;
// let j=0;
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         console.log(j);
//     }
//     console.log("\n");
// }
i = 0;
for (i = 1; i <= 5; i++) {
    console.log(i);
}
// i=0;
// j=0;
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

let friends = ["fsd", "fdxfg", "asfsdg", "xdzawraw", "aff"];
// for (let index = 0; index < friends.length; index++) {
//     const element = friends[index];
//     //console.log("Hello, " + friends[index]);
//     console.log("Hello, " + element);
// }

//Modern way to do things
friends.forEach(function f(element) {
    console.log("Hello There, " + element);
});

//Another modern way
for (element of friends) {
    console.log("This is done using another way. Hello There, " + element);
}

//This is an object --> Non-Primitive data type
let Miltan = {
    name: "Miltan",
    age: 40,
    passion: "Cooking and Song"
}

//use this loop to iterate over objects in JavaScripts
for (key in Miltan) {
    console.log(`The ${key} is ${Miltan[key]}`);
}

//while and do while loop

i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

console.log("\n\n\nusing do while");
i = 0;
do {
    console.log(`${i} is less than 4`);
    i++;
} while (i < 4);

let arr = ["Hello", "World", 1, null, true, 0, undefined];
for (k in arr) {
    console.log(arr[k]);
}

// let main=document.getElementById('main');
// console.log(main);

// let sel7=document.querySelector('#nav>li');
// console.log("The value that is returned is : ",sel7);



//Js Events

// Browser events :

// click
// contextMenu
// mouseover / mouseout
// mouseup / mousedown
// mousemove
// submit (form event)
// focus (form event)
// DOMContentLoaded
// transitionend (for CSS)

function toggleHide() {
    //let btn = document.getElementById('btn');
    let list = document.getElementById('list');

    //Even if we dont get element by ID, the element with the specific ID will be selected
    if (list.style.display != 'none') {
        list.style.display = 'none';
    }
    else {
        list.style.display = 'block';
    }
}
// function run(){
//     alert("hellooooooo");
// }
let para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    console.log('On the para')
});

para.addEventListener('mouseout', function run() {
    console.log('Outside para')
});














//JavaScript SetTimeOut and ClearTimeOut , SetInterval and clearInterval, Time

//If we want to repeat something to run after every set interval of time, then we set its time

// setTimeout --> Allows us to run the function once after the  interval of Time
// clearTimeout --> Allows us to run the function repeatedly after the  interval of Time

function greet(namezz, byetext) {
    console.log("Good morning " + namezz + ", " + byetext + ".");
}
greet();



// setTimeout(greet, 5000, "Deb", "Take care");  // no parenthesis of function, just function name
//setTimeout returns an unique timeout id which we can use in clear time out

let timeOut = setTimeout(greet, 5000, "Deb", "Take care");
console.log(timeOut);

clearTimeout(timeOut);





//setInterval(greet, 1000, "DEB", "Take care"); //To repeatedly run after an interval
//setInterval returns an unique Interval ID which can be used for other purposes

let interval = setInterval(greet, 1000, "DEB", "Take care");
console.log("hello " + interval);

clearInterval(interval);



//Can make clock websites Using this basic function
function displaytime() {
    time = new Date(); /* here time is a constructor and Date is an object */
    //console.log(time);
    document.getElementById('time').innerText = time;
}

setInterval(displaytime, 1000);


console.log("Lets see today's date and time");
let time =  new Date();
console.log(time);

let dt=new Date(1000); /* Returns the number of milliseconds passed after a referrence time  */
console.log(dt);
let NewDate = new Date("2029-09-30");
console.log(NewDate);

//let var = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let A_Date = new Date(2099, 11, 31, 23, 59, 55, 500);
console.log(A_Date);

let yr = A_Date.getFullYear();
console.log("The year is : " + yr);

let mn = A_Date.getMonth();
console.log("The month is : " + mn);

let dt1 = A_Date.getDate();
console.log("The date is : " + dt1);

let hr = A_Date.getHours();
console.log("The hour is : " + hr);

let day=A_Date.getDay();
console.log("The day is : " + day);

//setDate....setHours....setMinutes....etc.
A_Date.setDate(5); // we assign a new date = 5 to the previous Date
console.log(A_Date);

console.log(Date.now());   // Returns the current time stamp

setInterval(UpdateTime, 1000);

function UpdateTime(){
    timeNow.innerHTML = new Date();
}


//ARROW NOTATION FOR FUNCTIONS


//arrow notation for the same greet function

let greet1 = () => {
    console.log("We are inside the greet 1 function");
}
greet1();

//  ----- OR -----

let greet2 = () => console.log("We are inside the greet2 function");
greet2();

let sum1 = (a,b) => a+b;
console.log(sum1(12,43));

let obj1 = {
    array : ["deb","rohan","sagnik","suvam","sapta","shamba"],
    greeting : "Good Morning. ",
    
//     speak(){
//         this.array.forEach(function f(student){
//             console.log(this.greeting + "Hello, " + student); //this.greeting returns undefined as greeting is not present inside function
//         });
//     }
// }
    // We write it in this way instead EASIER APPROACH

    speak(){
        this.array.forEach((student) => {
            console.log(this.greeting + "Hello, " + student); //this.greting returns the expected value because it points to he greeting within obj1
        });
    }
}

obj1.speak();
console.log(obj1.array);


//IMPORTANT NOTE ABOUT ARROW NOTATION

/*

//Lexical 'this'

 If we use arrow notation, then the 'this' function as it will point to the instance within the object. Here, the 'this' points to the object outside and hence we get the required value.

 Arrow function nijer parent er 'this' ke nebe

 However, if we write a function normally, then it will search for that particular instance within the function itself and return undefined.

 Normal function nijer moddhe 'this' ke khujbe...pele bhalo na pele undefined

 */




 // Math object

 let m1 = Math;
console.log(m1);


// Some constants from math object

// Math.PI
// Math.E
// Math.LN10
// Math.LN2
// Math.LOG2E
// Math.LOG10E
// Math.SQRT1_2
// Math.SQRT2

//Math.sqrt() 
//Math.round()
//Math.pow(a,b)
//Math.ceil()
//Math.floor()
//Math.abs()

// Trigonometric values are to be given in Radians

//Math.sin()
//Math.sin(Math.PI/2)
//Math.cos(Math.PI/2)
//Math.tan(Math.PI/2)

//Math.min(a,b,c,...)
//Math.max(a,b,c,...)

console.log(Math.max(12,323,455,656,8889,232,22));

//Generating a Random number --> returns a random number between 0 and 1
// To generate a random number between a,b --> a + (b-a)*Math.random()

//Math.random()




// document.getElementById("hello").innerHTML="HOLAAAA !!!";
document.getElementById("hello").innerText="\nHOLAAAA !!!";




// JSON 

