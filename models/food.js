var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

//Schema
var foodSchema = new Schema({
	name		: { type: String, unique: false, require: true },
	description	: { type: String, unique: false, require: true },
	price		: { type: Number, unique: false, require: true },
	imgURL		: { type: String, unique: true, require: false }
}, { collection: 'foods' });

module.exports = mongoose.model('Food', foodSchema);