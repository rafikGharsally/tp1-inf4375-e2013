
var jsdom  = require('jsdom');
var request = require('request');
var sys = require('sys');

exports.cours = function(req, res){
// GET /user/tj
	request({
	  uri: 'http://www.websysinfo.uqam.ca/regis/rwe_horaire_cours',
	  method: 'POST',
	  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
     },
	 form: {
    	sigle: 'inf4375'/*req.params[1]*/,
    	code_prog: '4626' ,
    	an_ses2: 'Automne 2013',
    	Iframe: '0'
  	}
	}, function(error, response, body) {
		var retour = body.split();
		var debut = retour[0].indexOf("<h3>Lieu *<BR></h3>");
		var contenuParser = retour[0].substring(debut);
	  	res.send(contenuParser);
	  	//res.send(retour);
	});
};