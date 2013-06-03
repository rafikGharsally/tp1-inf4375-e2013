
var jsdom  = require('jsdom');
var request = require('request');

exports.cours = function(req, res){
// GET /user/tj
request({
	  method: 'GET',
	  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
     },
	}, function(error, response, body) {
	  	res.send(req.params.name);
	});
};