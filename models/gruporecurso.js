module.exports = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var GrupoRecurso = new Schema({
         grupo_id : {type : Schema.ObjectId  , ref : 'Grupo' },
         recurso_id : {type : Schema.ObjectId  , ref : 'Recurso' }
	});

	return mongoose.model('GrupoRecurso', GrupoRecurso);
}