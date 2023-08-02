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

//object 
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
let names=[1, 2, true, "this is a string", null];
console.log(names);
console.log(names[2]);

names.push("hello");
console.log(names);

//another way to declare array 
let names1= new Array(11,2,13,4, true, "hello", null, undefined);
console.log(names1);
console.log(names1[4]);
console.log(names1.length);

//This will create a new array with 23 elements
let names2=new Array(23);
console.log(names2);

names1=names1.sort();
console.log(names1);

let arr1=[7878,3,76,44,4545,2];
arr1=arr1.sort();
console.log(arr1);