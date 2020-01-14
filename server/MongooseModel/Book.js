const mongoose = require('mongoose');

// Mongoose Model
const bookSchema = new mongoose.Schema({
	title  : String,
	author : String
});

// Export the Mongoose "Book" model
module.exports = mongoose.model('Book', bookSchema);
