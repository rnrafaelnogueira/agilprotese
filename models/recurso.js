module.exports = function (){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var recurso = new Schema({
		recurso_id : Schema.ObjectId,
		s_nome : String,
		s_controller : String,
		s_action : String
	});

	return mongoose.model('Recurso', recurso);
}
