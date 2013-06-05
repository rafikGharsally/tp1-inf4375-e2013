
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
    	sigle: 'inf1120'/*req.params[1]*/,
    	code_prog: '4626',
    	an_ses2: 'Automne 2013',
    	Iframe: '0'
  	}
	}, function(error, response, body) {
		var retour = body.split();
		var debut = retour[0].indexOf("<TD ALIGN=\"CENTER\" CLASS=\"paragraphe\">");
		var contenuParser = retour[0].substring(debut);

		var arrayTemp = contenuParser.match(/<TD ALIGN="CENTER" CLASS="paragraphe">([0-9]{3,}).*\n<TD ALIGN="CENTER" CLASS="paragraphe">([0-9]{1,3})/g);
		var arrayFinal = new Array();
		for(var i = 0 ; i < arrayTemp.length ; i++){
			arrayTemp[i] = arrayTemp[i].replace("<TD ALIGN=\"CENTER\" CLASS=\"paragraphe\">", "");
			arrayTemp[i] = arrayTemp[i].replace("</TD>", "");
			arrayTemp[i] = arrayTemp[i].replace("<TD ALIGN=\"CENTER\" CLASS=\"paragraphe\">", "");
			arrayFinal[i] = arrayTemp[i];
		}
	  	res.send(arrayFinal);
	  	//res.send(retour);
	});
};