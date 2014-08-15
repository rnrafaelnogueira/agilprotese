module.exports = function(app){

	var ClientesControllers = {
		index: function(req,res){
			res.render('clientes/index');
		}
	}

	return ClientesControllers;

}