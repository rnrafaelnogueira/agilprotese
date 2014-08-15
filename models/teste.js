module.exports = function(){
	var mongoose = require('mongoose');
	var Schema   = mongoose.Schema;
	var ObjectId = mongoose.Types.ObjectId;

	var teste = new Schema({
		id : Schema.ObjectId,
		nome: String,
		login: String,
		senha: String,
		data_cad: {type: Date,default: Date.now}
	});

    //teste = { campaign_id : ObjectId };

	return mongoose.model('teste', teste);
}



