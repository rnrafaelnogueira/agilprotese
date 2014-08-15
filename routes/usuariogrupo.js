module.exports = function(app){

	var usuariogrupo = app.controllers.usuariogrupo;

	app.get('/usuariogrupo', usuariogrupo.index);
	app.get('/usuariogrupo/create', usuariogrupo.create);
	app.post('/usuariogrupo', usuariogrupo.insert);
	app.get('/usuariogrupo/edit/:id&:usuario_id&:grupo_id', usuariogrupo.edit);
	app.put('/usuariogrupo/edit/:id', usuariogrupo.update);
	app.get('/usuariogrupo/show/:id', usuariogrupo.show);
	app.delete('/usuariogrupo/delete/:id', usuariogrupo.remove);

}