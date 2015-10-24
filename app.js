//import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://172.16.100.139:27017/test';

// Use connect method to connect to the Server

//Insert Some Users
MongoClient.connect(url, function (err, db) {
	if (err) {
	console.log('Unable to connect to the mongoDB server. Error:', err);
	}else {
    //HURRAY!! Connected :)
    console.log('Connection established to', url);
    // Get the documents collection
    var collection = db.collection('users');

    //Create some users
    var user1 = { _id: 1};
    var user2 = { _id: 2};
    var user3 = { _id: 3};
    // Insert some users
    collection.insert([user1, user2, user3], function (err, result) {
	if (err) {
	console.log(err);
	} else {
	console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
	}
	//Close connection
    db.close();
	});
	}
});

//Update or create users 1
MongoClient.connect(url, function (err, db) {
	if (err) {
	console.log('Unable to connect to the mongoDB server. Error:', err);
	}else {
    //HURRAY!! Connected :)
    console.log('Connection established to', url);
    // Get the documents collection
    var collection = db.collection('users');

    //Update or create users
    collection.update({_id: 1}, {$set: {lati:'25.08', longi:'12.08',contact: '7597512306'}}, {upsert: true}, function (err, numUpdated) {
	if (err) {
	console.log(err);
	} else if (numUpdated) {
	console.log('Updated Successfully %d document(s).', numUpdated);
	} else {
	console.log('No document found with defined "find" criteria!');
	}
	//Close connection
    db.close();
	});
	}
});

//Update or create users 2
MongoClient.connect(url, function (err, db) {
	if (err) {
	console.log('Unable to connect to the mongoDB server. Error:', err);
	}else {
    //HURRAY!! Connected :)
    console.log('Connection established to', url);
    // Get the documents collection
    var collection = db.collection('users');

    collection.update({_id: 2}, {$set: {lati:'26.08', longi:'13.08',contact: '7597512307'}}, {upsert: true}, function (err, numUpdated) {
    if (err) {
	console.log(err);
	} else if (numUpdated) {
	console.log('Updated Successfully %d document(s).', numUpdated);
	} else {
	console.log('No document found with defined "find" criteria!');
	}
	//Close connection
    db.close();
	});
	}
});

//Update or create users 3
MongoClient.connect(url, function (err, db) {
	if (err) {
	console.log('Unable to connect to the mongoDB server. Error:', err);
	}else {
    //HURRAY!! Connected :)
    console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('users');
    
    collection.update({_id: 3}, {$set: {lati:'27.08', longi:'14.08',contact: '7597512308'}}, {upsert: true}, function (err, numUpdated) {
    if (err) {
	console.log(err);
	} else if (numUpdated) {
	console.log('Updated Successfully %d document(s).', numUpdated);
	} else {
	console.log('No document found with defined "find" criteria!');
	}
	//Close connection
    db.close();
	});
	}
});

//read data from DB
MongoClient.connect(url, function (err, db) {
	if (err) {
	console.log('Unable to connect to the mongoDB server. Error:', err);
	}else {
    //HURRAY!! Connected :)
    console.log('Connection established to', url);
    // Get the documents collection
    var collection = db.collection('users');
    
	collection.find({_id: 4}).toArray(function (err, result) {
	if (err) {
	console.log(err);
	} else if (result.length) {
	console.log('\nFound:', result);
	} else {
	console.log('\nNo document(s) found with defined "find" criteria!');
	}
	//Close connection
    db.close();
	});
	}
});

//JSON Parsing

var test_str = '{ "lati" :"92.7", "longi": "92.8" }';
var test_json = JSON.parse(test_str);
console.log("Latitude is: ",test_json.lati);
console.log("Longitude is: ",test_json.longi);