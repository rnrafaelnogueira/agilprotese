module.exports = function(app){
	var menu = app.controllers.menu;

	app.get('/menu' , menu.index);
	app.get('/menu/create' , menu.create);
	app.post('/menu' , menu.insert);
	app.get('/menu/edit/:id' , menu.edit);
	app.put('/menu/edit/:id' , menu.update);
	app.get('/menu/show/:id' , menu.show);
	app.delete('/menu/delete/:id' , menu.remove);
}