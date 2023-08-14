//Single Function Export

/*


// const mod = require('./mod');
// console.log(mod);
const avg1 = require('./mod');
console.log(avg1);

console.log("\nMessage of index.js");
// console.log(mod([20,5,5]));
console.log(avg1([20,5,5]));


*/



//Multiple Function Export 

const mod=require("./mod"); //All things exported from mod.js will be stored in mod variable here
console.log(mod);
console.log("\nMessage of index.js");

//As mod holds an imported object, we can use it as follows
console.log(mod.avg([20,5,5]));
console.log(mod.name);
console.log(mod.dept);