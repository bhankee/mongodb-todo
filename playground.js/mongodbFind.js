// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB');

	// db
	// 	.collection('Todos')
	// 	.find({
	// 		_id: new ObjectID('59ac6ccff31a4e0394c924bb')
	// 	})
	// 	.toArray()
	// 	.then(
	// 		docs => {
	// 			console.log('Todos');
	// 			console.log(JSON.stringify(docs, undefined, 2));
	// 		},
	// 		err => {
	// 			console.log('Unable to fetch todos');
	// 		}
	// 	);

	// db
	// 	.collection('Todos')
	// 	.find()
	// 	.count()
	// 	.then(
	// 		count => {
	// 			console.log(`Todos count: ${count}`);
	// 			console.log(JSON.stringify(docs, undefined, 2));
	// 		},
	// 		err => {
	// 			console.log('Unable to fetch todos');
	// 		}
	// 	);

	db
		.collection('Users')
		.find({ name: 'B-rad' })
		.toArray()
		.then(docs => {
			console.log(JSON.stringify(docs, undefined, 2));
		});

	// db.close();
});
