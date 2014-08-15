module.exports = function(app){
	var Requisicao = app.models.requisicao;

	var RequisicaoControllers = {
		index: function(req,res){
			Requisicao.find(function(err,data){
				if(err){
					console.log(err)
				}else{
					res.render('requisicao/index', {lista: data})
				}
			})
		},
		create: function(req,res){
			res.render('requisicao/create');
		},
		insert: function(req,res){
			var model = new Requisicao(req.body);
			model.save(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.redirect('/requisicao');
				}
			});
		},
		edit: function(req,res){
			Requisicao.findById(req.params.id , function(err,data){
				if(err){
					console.lor(err);
				}else{
					res.render('requisicao/edit', {value: data})
				}
			});
		},
		update: function(req,res){
			Requisicao.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.s_nome = req.s_nome;
					model.save(function(err){
						if(err){
							console.log(err)
						}else{
							res.redirect('/requisicao');
						}
					});
				}
			});
		},
		show: function(req,res){
			Requisicao.findById(req.params.id, function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('requisicao/show', {value: data});
				}
			});
		},
		remove: function(req,res){
			Requisicao.remove({_id: req.params.id}, function(err){
				if(err){
					console.log(err);
				}else{
					res.redirect('/requisicao');
				}
			});
		}
	};

	return RequisicaoControllers;
}