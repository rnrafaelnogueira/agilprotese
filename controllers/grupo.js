module.exports = function(app){

	var Grupo = app.models.grupo;

	var GrupoController = {
		index : function(req,res){
			Grupo.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('grupo/index', {lista: data});
				}
			})
		},
		create : function(req,res){
			res.render('grupo/create');
		},
		insert : function(req,res){
			var model = new Grupo(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/grupo');
				}
			});
		},
		edit : function(req,res){
			Grupo.findById(req.params.id , function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('grupo/edit',{value: data});
				}
			});
		},
		update : function(req,res){
			Grupo.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.s_nome = req.body.s_nome;
					model.save(function(err){
						if(err)	{
							console.log(err);
						}else{
							res.redirect('/grupo')
						}
					});
				}
			});
		},show : function(req,res){
			Grupo.findById(req.params.id , function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('grupo/show',{value: data});
				}
			});
		},remove : function(req,res){
			Grupo.remove({_id: req.params.id} , function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/grupo');
				}
			});
		}

	}

	return GrupoController;

}