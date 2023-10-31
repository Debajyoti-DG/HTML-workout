// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/details', {useNewUrlParsee: true, useUnifiedTopology : true});
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/details', {useNewUrlParsee: true, useUnifiedTopology : true});

// getting-started.js
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/details'); //details is the name of our database
  console.log("Connected to MONGO.....");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));


// In schema we define which field or parameter in a database 

const doggySchema = new mongoose.Schema({
  name: String
});

doggySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Doggy name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

const doggy = mongoose.model('doggy', doggySchema); // schema getting converted into a fixed model


// Object creation using the schema
var german_shepherd = new doggy({name:"Tom the german shepherd"});
var wiener = new doggy({name:"Winnie the wiener"});
console.log(german_shepherd.name);
console.log(wiener.name);

german_shepherd.save();
//german_shepherd.speak();
wiener.save();
//wiener.speak();

doggy.find({name: "Winnie the wiener"});