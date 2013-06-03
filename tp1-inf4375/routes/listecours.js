
/*
 * GET users listing.
 */
var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./jquery-1.10.1.js").toString();
var request = require('request'),
    sys = require('sys');
var sessionAParser = 'Automne 2013';



exports.maliste = function(req, res){
	request({
	  uri: 'http://www.websysinfo.uqam.ca/regis/rwe_horaire_cours',
	  method: 'POST',
	  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
     },
	 form: {
    	sigle: req.body.sigle,
    	code_prog: req.body.code_prog,
    	an_ses2: sessionAParser,
    	Iframe: '0'
  	}
	}, function(error, response, body) {
	  	res.send(body);
	});
};

//************* http://stackoverflow.com/questions/6158933/http-post-request-in-node-js