module.exports = function(app){

	var UsuarioGrupo = app.models.usuariogrupo;
	var Usuarios = app.models.usuarios;
	var Grupo = app.models.grupo;

	var UsuarioGrupoController = {
		index : function(req,res){
			UsuarioGrupo.find().populate(['user_id','grupo_id']).exec(function(err, data) {
				if(err){
					console.log(err);
				}else{
					res.render('usuariogrupo/index', {lista: data});
				}
	  		});

		},
		create : function(req,res){
			Usuarios.find(function(err, data){
				if(err){
					console.log(err);
				}
				var usuarios = data;

				Grupo.find(function(err, data){
					if(err){
						console.log(err);
					}
					var grupos = data;

					res.render('usuariogrupo/create' , {usuarios: usuarios , grupos: grupos});
				});
			});
		},
		insert : function(req,res){
			var model = new UsuarioGrupo(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/usuariogrupo');
				}
			});
		},
		edit : function(req,res){

			Usuarios.find(function(err, data){

				if(err){
					console.log(err);
				}
				var usuarios = data;
				var user_id = req.params.usuario_id;

				Grupo.find(function(err, data){
					if(err){
						console.log(err);
					}

					var grupos = data;
					var grupo_id = req.params.grupo_id;

					UsuarioGrupo.findById(req.params.id, function(err,data){
						var usuariogrupo_id = data._id;
						res.render('usuariogrupo/edit' , {usuarios: usuarios , grupos: grupos , user_id : user_id, grupo_id : grupo_id , usuariogrupo_id: usuariogrupo_id});
					});

				});
			});

		},
		update : function(req,res){
			UsuarioGrupo.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.user_id = req.body.user_id;
					model.grupo_id = req.body.grupo_id;
					model.save(function(err){
						if(err)	{
							console.log(err);
						}else{
							res.redirect('/usuariogrupo')
						}
					});
				}
			});
		},show : function(req,res){
			UsuarioGrupo.findById(req.params.id).populate(['user_id','grupo_id']).exec(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('usuariogrupo/show',{value: data});
				}
			});
		},remove : function(req,res){
			UsuarioGrupo.remove({_id: req.params.id} , function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/usuariogrupo');
				}
			});
		}

	}

	return UsuarioGrupoController;

}