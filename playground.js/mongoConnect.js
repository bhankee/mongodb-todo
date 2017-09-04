// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB');

	// db.collection('Todos').insertOne({
	// 	text: 'Do it Brad',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo');
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('Users').insertOne({
	// 	_id: 123,
	// 	name: 'B-rad',
	// 	age: 36,
	// 	location: 'Virginia'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Error was made opps!');
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.close();
});
