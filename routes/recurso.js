module.exports = function(app){
	var recurso = app.controllers.recurso;

	app.get('/recurso' , recurso.index);
	app.get('/recurso/create' , recurso.create);
	app.post('/recurso' , recurso.insert);
	app.get('/recurso/edit/:id' , recurso.edit);
	app.put('/recurso/edit/:id' , recurso.update);
	app.get('/recurso/show/:id' , recurso.show);
	app.delete('/recurso/delete/:id' , recurso.remove);
}