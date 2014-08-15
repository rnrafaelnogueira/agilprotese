module.exports = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var UsuarioGrupo = new Schema({
         user_id : {type : Schema.ObjectId  , ref : 'Usuarios' },
         grupo_id : {type : Schema.ObjectId  , ref : 'Grupo' }
	});

	return mongoose.model('UsuarioGrupo', UsuarioGrupo);
}