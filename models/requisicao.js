module.exports = function(){
	var mongoose = require('mongoose');
	var Schema   = mongoose.Schema;

	var requisicao = new Schema({
		s_nome: String,
		s_cod: String,
		t_data_criacao: {type: Date, default: Date.now}
	});

	return mongoose.model('Requisicao', requisicao);
}