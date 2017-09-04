// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB');
	}
	console.log('Connected to MongoDB');

	// db
	// 	.collection('Todos')
	// 	.findOneAndUpdate(
	// 		{
	// 			_id: new ObjectID('59acc14a3a7047161a23d499')
	// 		},
	// 		{
	// 			$set: {
	// 				completed: true
	// 			}
	// 		},
	// 		{
	// 			returnOriginal: false
	// 		}
	// 	)
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	db
		.collection('Users')
		.findOneAndUpdate(
			{
				_id: new ObjectID('59ac6eeed583e903a381d4c2')
			},
			{
				$set: {
					name: 'Owen'
				}
			},
			{
				returnOriginal: false
			}
		)
		.then(result => {
			console.log(result);
		});

	// db.close();
});
