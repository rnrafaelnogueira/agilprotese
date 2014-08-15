module.exports = function(app){

	var Usuario = app.models.usuarios;
	var Grupo  = app.models.grupo;
	var Recurso  = app.models.recurso;
	var UsuarioGrupo = app.models.usuariogrupo;
	var GrupoRecurso = app.models.gruporecurso;
	var acl  = app.acl;

	var LoginControllers = {
		index: function(req,res){
			res.render('login/index' , {msg: ''});
			Grupo.find(function(err,data){
	 	 		if(err){
	 	 			console.log(err);
	 	 		}else{
	 	 			for(var i in data){
		 	 			acl.removeRole( data[i].s_nome, function(err) {
		 	 				if(err){
		 	 					console.log(err);
		 	 				}
		 	 			});
	 	 			}
	 	 		}
			});
		},
		authentic: function(req,res){
			Usuario.findOne({login : req.body.s_login}, function(err,data){

				var md5 = require('MD5');

				if(!data){
					res.render('login/index' , {msg: 'Usuário não existe!'});
				}else{

					console.log(data.senha);
					console.log(md5(req.body.s_pwd));

					if(md5(req.body.s_pwd) != data.senha){
						res.render('login/index' , {msg: 'Senha Incorreta!'});
					}else{
					 	if(err){
					 		console.log(err);
					 	}else{
					 		var model  = data;
					 		req.session.userId = model._id;
					 		req.session.nome  = model.nome;
					 		req.session.save();

							UsuarioGrupo.find({user_id:req.session.userId}).populate(['user_id','grupo_id']).exec(function(err,data){
								if (err){
									console.log(err);
								}else{
									var usuariogrupo = data;
									var usuario = '';
									var grupos = [];
									var permissions = [];
									var resources = [];
									for (var count in usuariogrupo){
										usuario = usuariogrupo[count].user_id._id.toString();
										grupos[count] = usuariogrupo[count].grupo_id.s_nome;

										GrupoRecurso.find({grupo_id:usuariogrupo[count].grupo_id._id}).populate(['grupo_id','recurso_id']).exec(function(err,data){
								 			if(err){
								 				console.log(err);
								 			}else{
								 				var gruporecurso = data;
								 				for (var i in gruporecurso) {

													val = gruporecurso[i];

													console.log(val);

													acl.allow([{
														    roles: val.grupo_id.s_nome,
													        allows:[
													            {resources: "/"+val.recurso_id.s_controller, permissions: val.recurso_id.s_action}
													        ]
													    }
												    ]);
												}
								 			}
								 		});
									}
									acl.addUserRoles(usuario, grupos);
								}
							});

							res.render('home');
					 	}
					}
				}
			});
		}
	};

	return LoginControllers;
}
