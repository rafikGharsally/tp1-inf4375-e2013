
/*
 * GET users listing.
 */

var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./jquery-1.10.1.js").toString();
var request = require('request'),
    sys = require('sys');


exports.maliste = function(req, res){
	// jsdom.env({
 //    html: 'http://news.ycombinator.com/',
 //  	src: [
 //    	jquery
 //  	],
 //  	done: function(errors, window) {
 //    	var $ = window.$;
 //    	var data;
 //    	$('a').each(function(){
 //      	data += $(this).attr('href');
 //    	});
 //    res.send(data);
 //  	}
	// });
	request({
	  uri: "www.websysinfo.uqam.ca/regis/rwe_horaire_cours",
	  method: "POST",
	  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
     },
	 form: {
    	sigle: "inf1120",
    	code_prog: 7316,
    	an_ses2: "Automne 2013",
    	Iframe: 0
  	}
	}, function(error, response, body) {
	  console.log(body);
	});
};

************* http://stackoverflow.com/questions/6158933/http-post-request-in-node-js