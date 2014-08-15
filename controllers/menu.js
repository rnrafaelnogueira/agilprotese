module.exports = function(app){
	var Menu = app.models.menu;

	var MenuController = {
		index : function(req,res){
			Menu.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('menu' , {lista: data});
				}
			});
		},
		create : function(req,res){
			res.render('menu/create');
		},
		insert : function(req,res){
			var model = new Menu(req.body);
			model.save(function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/menu');
				}
			})
		},
		edit : function(req,res){
			Menu.findById(req.params.id , function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('menu/edit' , {value : data});
				}
			});
		},
		update : function(req,res){
			Menu.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.s_nome = req.body.s_nome;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/menu');
						}
					});
				}
			});
		},
		show : function(req,res){
			Menu.findById(req.params.id , function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('menu/show', {value : data});
				}
			});
		},
		remove : function(req, res){
			Menu.remove({_id : req.params.id } , function(err){
				if(err){
					console.log(err);
				}else{
				    res.redirect('/menu');
				}
			})
		}
	};

	return MenuController;
}