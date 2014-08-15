/**
 * Module dependencies.
 */

var express = require('express');
var load = require('express-load');
var mongoose = require('mongoose');
var Sessions = require("sessions");
var acl = require('./library/permissoes');
var acl = acl.acl();
var app = express();
var md5 = require('MD5');

sessionHandler = new Sessions();

app.acl = acl;


mongoose.connect('mongodb://localhost/waibtec', function(err){
	if(err){
		console.log('Erro ao conectar o mongoDB:'+ err);
	}
});



// all environments

app.use(express.cookieParser());
app.use(express.session({secret: 'adfsdf'}));
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname+'/public'));

app.use(function(err, req, res, next) {
    // Move on if everything is alright
    if(!err) return next();
    // Something is wrong, inform user
    msg = err.errorMsg;
    if(err.errorCode == '401')
    	msg = 'Sem permissão para acessar a funcionalidade.';
    res.render('error/index' , {erro : err.errorCode , msg : msg});
});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(err){
  if(err){
  	console.log(err);
  }
  console.log('Rodando...');
});