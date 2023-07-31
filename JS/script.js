var a=78;
var b="Hello";
c= 34.55;
console.log(a);
console.log(b);
console.log(c+48.76);

//operators in JS
//operand - entities on which operators operate
//unary (x = -x;), binary (a+b)

var num1=23;
var num2=5;

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

var str="This is a string";
console.log(str);

//First occurence of a substring
var position=str.indexOf('r');
console.log(position);

//Last occurence of a substring
position=str.lastIndexOf('s');
console.log(position);


//Substring from a string
// 1 to (7-1)
var substr = str.slice(1,7);
console.log(substr);

substr = str.substring(1,7);
console.log(substr);

console.log("\n\n\nNew substr function \n");

// 7 characters starting from 1 index
var substr1=str.substr(1,7);
console.log(substr1);
