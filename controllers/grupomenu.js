module.exports = function(app){
	var GrupoMenu = app.models.grupomenu;
    var Grupo = app.models.grupo;
    var Menu = app.models.menu;

	var GrupoMenuController = {
		index: function(req,res){
			GrupoMenu.find().populate(['grupo_id' , 'menu_id']).exec(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('grupomenu' , {lista: data});
				}
			});
		},
		create: function(req,res){
			Grupo.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					var grupo = data;

					Menu.find(function(err,data){
						if(err){
							console.log(err);
						}else{
							var menu = data;
							res.render('grupomenu/create' , {grupos : grupo , menus : menu});
						}
					});
				}
			});
		},
		insert: function(req,res){
			var model = new GrupoMenu(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/grupomenu');
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

					Menu.find(function(err,data){
						if(err){
							console.log(err);
						}else{
							var menu = data;
							var menu_id = req.params.menu_id;

							GrupoMenu.findById(req.params.id, function(err,data){
								if(err){
									console.log(err);
								}else{
									res.render('grupomenu/edit' , {grupos : grupo , menus : menu , grupo_id: grupo_id , menu_id: menu_id , grupomenu_id : req.params.id});
								}
							});
						}
					});
				}
			});
		},
		update : function(req,res){
			GrupoMenu.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.grupo_id = req.body.grupo_id;
					model.menu_id = req.body.menu_id;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/grupomenu');
						}
					});
				}
			});
		},
		show : function(req,res){
			GrupoMenu.findById(req.params.id).populate(['grupo_id','menu_id']).exec(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('grupomenu/show',{value: data});
				}
			});
		},
		remove : function(req,res){
			GrupoMenu.remove({_id: req.params.id} , function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/grupomenu');
				}
			});
		}
	};

	return GrupoMenuController;
}