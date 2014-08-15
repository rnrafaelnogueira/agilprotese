module.exports = function(){
	var mongoose = require('mongoose');
	var Schema   = mongoose.Schema;

	var dentista = new Schema({
		    s_nome: String,
		    s_cpf: String,
		    t_data: {type: Date, default: Date.now}
		});

	return mongoose.model('Dentista',dentista);

}