module.exports = function(app){

	var Recurso = app.models.recurso;

	var RecursoController = {
		index: function(req,res){
			Recurso.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('recurso' , {lista: data});
				}
			});
		},
		create : function(req,res){
			res.render('recurso/create');
		},
		insert : function(req, res){
			var model = new Recurso(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/recurso');
				}
			});
		},
		edit : function(req,res){
			Recurso.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('recurso/edit' , {value: data});
				}
			});
		},
		update : function(req,res){
			Recurso.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.s_nome = req.body.s_nome;
					model.s_controller = req.body.s_controller;
					model.s_action = req.body.s_action;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/recurso');
						}
					});
				}
			});
		},
		show : function(req,res){
			Recurso.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('recurso/show' , {value : data});
				}
			});
		},
		remove : function(req,res){
			Recurso.remove({_id : req.params.id}, function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/recurso');
				}
			});
		}
	};

	return RecursoController;
}