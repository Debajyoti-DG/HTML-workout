// Inserting data in mongo db

/*
1. use details (creates a database named details)

2. db.items.insertOne({"name":"Ddg","job":"programmer", "location":"kolkata", "rating":4.95})   (Thus inserts data into the database)

3. db.items.insertMany([{"name":"Rik","job":"biomed", "location":"kolkata", "rating":4.95},{"name":"Sag","job":"hecking", "location":"kolkata", "rating":4.95},{"name":"ScTm","job":"hecking", "location":"kolkata", "rating":4.95}])   (Thus inserts data into the database)

4. show dbs (shows all the present databases)

5. db (shows the present database)

6. show collections (shows the table present in the database, in mongo table is referred to as collection)

For example, db.items.insertOne({}) . Here, db is database, items is collection

*/

// Finding or searching data 

/*

1. db.items.find() shows us all the data present in the collection 'items' of database db

eg, db.items.find({job: 'hecking'}) shows us the data that match the parameters present in the find parenthesis

eg, db.items.find({rating: {$gte : 4.90}}) will return all data whose rating is >= 4.90

eg, db.items.find({job: 'hecking', rating : {$lt:5}}) will do multiple searching and return matching data

eg, db.items.find({ $or:[{job: 'hecking'}, {rating : {$gt:4.9}}]})

eg, db.items.find({job: 'hecking'}, {rating : 1}) means it will return the rating only of the data whose job is hecking. No other associated data will be shown

*/


// Deleting data from database

/*

show dbs
use details  -->  database name
show collections  -->  collection name

1. db.items.deleteOne({name:'Ddg'}) will delete the entire object data whose name is Ddg.

2. db.items.deleteMany({name:'Rik'})

# deleteOne() will delete first entry match in case of multiple or duplicate documents

# deleteMany() will delete all the matching occurances of the documents

*/

// Updating data from database

/*

show dbs
use details  -->  database name
show collections  -->  collection name

1. db.items.updateOne({"name":"ScTm"},{$set: {"job":"Hecking pro max"}})

2. db.items.updateOne({"rating":4.95},{$set: {"rating":4.955}})

3. db.items.updateMany({"rating":4.95},{$set: {"rating":4.955}})

4. db.items.updateMany({"job":"hecking"},{$set: {"rating":4.95555,"job":"oye heckingg"}})

We use $set to set the value to the required attribute.

*/