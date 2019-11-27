const mongoose = require('mongoose');

const getConnection = () => {
	console.log('createConnection on DB');
	mongoose.connect('mongodb://localhost:27017/jobTest', { useNewUrlParser: true });
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
};
module.exports = getConnection();
