module.exports = function(app){
	var gruporecurso = app.controllers.gruporecurso;

	app.get('/gruporecurso' , gruporecurso.index);
	app.get('/gruporecurso/create' , gruporecurso.create);
	app.post('/gruporecurso' , gruporecurso.insert);
	app.get('/gruporecurso/edit/:id&:grupo_id&:recurso_id' , gruporecurso.edit);
	app.put('/gruporecurso/edit/:id' , gruporecurso.update);
	app.get('/gruporecurso/show/:id', gruporecurso.show);
	app.delete('/gruporecurso/delete/:id', gruporecurso.remove);
}