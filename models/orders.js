var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

//Schema
var orderSchema = new Schema({
	userId		: { type: String, unique: false, required: true},
	pedido		: { type: Array, unique: false, require: true },
	precioFinal	: { type: Number, unique: false, require: false },
	datosPago	: { type: Object, unique: false, require: false },
}, { collection: 'orders' });

module.exports = mongoose.model('Order', orderSchema);