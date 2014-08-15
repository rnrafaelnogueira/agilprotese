module.exports = function(app){

	var ErrorControllers = {
		index : function(req,res){
			console.log(req);
				if(err){
					console.log(err);
				}else{
					res.render('error/index',{msg: req});
				}
		}
	}

	return ErrorControllers;

}