module.exports = function(app){

	var grupo = app.controllers.grupo;

	app.get('/grupo', grupo.index);
	app.get('/grupo/create', grupo.create);
	app.post('/grupo', grupo.insert);
	app.get('/grupo/edit/:id', grupo.edit);
	app.put('/grupo/edit/:id', grupo.update);
	app.get('/grupo/show/:id', grupo.show);
	app.delete('/grupo/delete/:id', grupo.remove);

}