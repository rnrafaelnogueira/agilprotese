module.exports = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var GrupoMenu = new Schema({
         grupo_id : {type : Schema.ObjectId  , ref : 'Grupo' },
         menu_id : {type : Schema.ObjectId  , ref : 'Menu' }
	});

	return mongoose.model('GrupoMenu', GrupoMenu);
}