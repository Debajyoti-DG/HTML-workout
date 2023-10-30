// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParsee: true, useUnifiedTopology : true});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/details');
  console.log("Connected to MONGO.....");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}