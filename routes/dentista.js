module.exports = function(app){

	var dentista = app.controllers.dentista;
    var acl = app.acl;



	app.get('/dentista',acl.middleware(),dentista.index);
	app.get( '/dentista/create',acl.middleware() , dentista.create);
	app.post( '/dentista',acl.middleware() , dentista.insert);
	app.get( '/dentista/edit/:id',acl.middleware(), dentista.edit);
	app.put( '/dentista/edit/:id',acl.middleware(), dentista.update);
	app.get( '/dentista/show/:id',acl.middleware(), dentista.show);
	app.delete( '/dentista/delete/:id',acl.middleware(), dentista.remove);

}




