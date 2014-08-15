module.exports = function(app){
	var usuarios = app.controllers.usuarios;
	var acl = app.acl;

	app.get('/usuarios', usuarios.index);
	app.get('/usuarios/create', usuarios.create);
	app.post('/usuarios', usuarios.insert);
	app.get('/usuarios/edit/:id', usuarios.edit);
	app.put('/usuarios/edit/:id', usuarios.update);
	app.get('/usuarios/show/:id', usuarios.show);
	app.delete('/usuarios/delete/:id', usuarios.remove);
}
