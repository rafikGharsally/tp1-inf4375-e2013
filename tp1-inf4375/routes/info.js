
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
    	sigle: req.params[1],
    	code_prog: req.params[0],
    	an_ses2: 'Automne 2013',
    	Iframe: '0'
  	}
	}, function(error, response, body) {
	  	res.send(body);
	});
};