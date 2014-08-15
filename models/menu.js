module.exports = function(app){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var menu = new Schema({
			menu_id : Schema.ObjectId,
			s_nome : String
		});

	return mongoose.model('Menu' , menu);

}