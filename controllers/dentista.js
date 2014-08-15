module.exports = function(app){

	var Dentista = app.models.dentista;

	var DentistaControllers = {
		index : function(req,res){
			Dentista.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('dentista/index',{lista: data});
				}
			});
		},
		create : function(req,res){
			res.render('dentista/create');
		},
		insert : function(req,res){
			var model = new Dentista(req.body);
			model.save(function(err){
				if(err){
					console.log(err)
				}else{
					res.redirect('/dentista')
				}
			});
		},
		edit : function(req,res){
			Dentista.findById(req.params.id , function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('dentista/edit', {value: data});
				}
			});
		},
		update : function(req,res){
			Dentista.findById(req.params.id , function(err,data){
				if(err){
					console.log(err)
				}else{
					var model = data;
					model.s_nome = req.body.s_nome;
					model.s_cpf = req.body.s_cpf;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/dentista');
						}
					});
				}
			});
		},
		show : function(req,res){
			Dentista.findById(req.params.id , function(err,data){
				if(err){
					console.log(err);
				}else{
					res.render('dentista/show', {value: data});
				}
			});
		},
		remove : function(req,res){
			Dentista.remove({_id: req.params.id},function(err){
				if(err){
					console.log(err)
				}else{
					res.redirect('/dentista');
				}
			});
		}
	}

	return DentistaControllers;

}