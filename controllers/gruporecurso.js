module.exports = function(app){
	var GrupoRecurso = app.models.gruporecurso;
    var Grupo = app.models.grupo;
    var Recurso = app.models.recurso;

	var GrupoRecursoController = {
		index: function(req,res){
			GrupoRecurso.find().populate(['grupo_id' , 'recurso_id']).exec(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('gruporecurso' , {lista: data});
				}
			});
		},
		create: function(req,res){
			Grupo.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					var grupo = data;

					Recurso.find(function(err,data){
						if(err){
							console.log(err);
						}else{
							var recurso = data;
							res.render('gruporecurso/create' , {grupos : grupo , recursos : recurso});
						}
					});
				}
			});
		},
		insert: function(req,res){
			var model = new GrupoRecurso(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/gruporecurso');
				}
			});
		},
		edit: function(req,res){
			Grupo.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					var grupo = data;
					var grupo_id = req.params.grupo_id;

					Recurso.find(function(err,data){
						if(err){
							console.log(err);
						}else{
							var recurso = data;
							var recurso_id = req.params.recurso_id;

							GrupoRecurso.findById(req.params.id, function(err,data){
								if(err){
									console.log(err);
								}else{
									res.render('gruporecurso/edit' , {grupos : grupo , recursos : recurso , grupo_id: grupo_id , recurso_id: recurso_id , gruporecurso_id : req.params.id});
								}
							});
						}
					});
				}
			});
		},
		update : function(req,res){
			GrupoRecurso.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.grupo_id = req.body.grupo_id;
					model.recurso_id = req.body.recurso_id;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/gruporecurso');
						}
					});
				}
			});
		},show : function(req,res){
			GrupoRecurso.findById(req.params.id).populate(['grupo_id','recurso_id']).exec(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('gruporecurso/show',{value: data});
				}
			});
		},remove : function(req,res){
			GrupoRecurso.remove({_id: req.params.id} , function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/gruporecurso');
				}
			});
		}
	};

	return GrupoRecursoController;
}