module.exports = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var grupo = new Schema({
		grupo_id: Schema.ObjectId,
		s_nome : String
	});

	return mongoose.model('Grupo', grupo);

}