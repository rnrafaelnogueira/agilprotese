module.exports = function(app){

	var error = app.controllers.error;

	app.get('/error',error.index);

}




