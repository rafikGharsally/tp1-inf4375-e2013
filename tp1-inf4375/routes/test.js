
/*
 * GET home page.
 */

exports.test = function(req, res){
  res.render('test', { title: 'Page de test' });
};