/*
mongoimport --db test --collection ambulances --type json --file ambulance.json --jsonArray

mongoimport --db test --collection users --type json --file user.json --jsonArray
*/
//import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://172.16.100.139:27017/test';
var fs = require('fs');


// Use connect method to connect to the Server

//Insert Some Users
MongoClient.connect(url, function (err, db) {
	if (err) 
	{
		console.log('Unable to connect to the mongoDB server. Error:', err);
	}
	else 
	{
	    //HURRAY!! Connected :)
	    console.log('Connection established to', url);
	    // Get the documents collection
	    var collection = db.collection('users');
	    fs.readFile('user.json', 'utf8', function (err, data) {
			if (err) throw err;
			console.log(data);
			var json = JSON.parse(data);
			collection.insert(json, function(err, doc) 
			{
			    console.log(data);
			    db.close();
				if(err) throw err;
			});
		});
	}
});