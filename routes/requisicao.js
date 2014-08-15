module.exports = function(app){
	var requisicao = app.controllers.requisicao;
	var acl = app.acl;

	app.get('/requisicao',acl.middleware(), requisicao.index);
	app.get('/requisicao/create',acl.middleware(), requisicao.create);
	app.post('/requisicao',acl.middleware(), requisicao.insert);
	app.get('/requisicao/edit/:id',acl.middleware(), requisicao.edit);
	app.put('/requisicao/edit/:id',acl.middleware(), requisicao.update);
	app.get('/requisicao/show/:id',acl.middleware(), requisicao.show);
	app.delete('/requisicao/delete/:id',acl.middleware(), requisicao.remove);

}