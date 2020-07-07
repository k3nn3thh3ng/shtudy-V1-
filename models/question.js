const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({ 
	title: String,
	content: String,
	subject: String,
	topic: String,
	verified: Boolean
});

module.exports = mongoose.model('Question', questionSchema);