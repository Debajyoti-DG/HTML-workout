console.log("This is a message");

let average = (arr) =>{
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return (sum/arr.length);
}

// let b = average([20,5,5]);
// console.log(b);

// module.exports = average;  //to export the function, to be used in other files

// Object created to export 
module.exports = {
    avg: average, // average function exported
    name: "Deb",
    song :"Choo lo"
};

module.exports.dept = "CSE"; // module.exports in itself is an object. So here, we give key as 'dept' and put value as "CSE"