module.exports = function(app){
	var grupomenu = app.controllers.grupomenu;

	app.get('/grupomenu' , grupomenu.index);
	app.get('/grupomenu/create' , grupomenu.create);
	app.post('/grupomenu' , grupomenu.insert);
	app.get('/grupomenu/edit/:id&:grupo_id&:recurso_id' , grupomenu.edit);
	app.put('/grupomenu/edit/:id' , grupomenu.update);
	app.get('/grupomenu/show/:id', grupomenu.show);
	app.delete('/grupomenu/delete/:id', grupomenu.remove);
}