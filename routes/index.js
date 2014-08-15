
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('/login/index', { title: 'Agil Protese' });
};

exports.teste = function(req,res){
  res.render('teste');
};