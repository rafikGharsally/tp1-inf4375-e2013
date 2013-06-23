
var jsdom  = require('jsdom');
var request = require('request');
var sys = require('sys');
var uqamParser = require('./UqamResponseParser/UqamResponseParser.js')

exports.cours = function(req, res){
// GET /user/tj
	request({
	  uri: 'http://www.websysinfo.uqam.ca/regis/rwe_horaire_cours',
	  method: 'POST',
	  headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
     },
	 form: {
    	sigle: req.params[0].split('/')[0],
    	code_prog: '4626',
    	an_ses2: 'Automne 2013',
    	Iframe: '0'
  	}
	}, function(error, response, body) {
		var retour = body.split();
		var debut = retour[0].indexOf("<TD ALIGN=\"CENTER\" CLASS=\"paragraphe\">");
		var contenuParser = retour[0].substring(debut);
		var arrayDataComplet = new Array();

		var arrayDataComplet = contenuParser.match(/<TD ALIGN="CENTER" CLASS="paragraphe">.*\n<TD ALIGN="CENTER" CLASS="paragraphe">/g);

		var arrayCoursGroupe = contenuParser.match(/<TD ALIGN="CENTER" CLASS="paragraphe">([0-9]{3,}).*\n<TD ALIGN="CENTER" CLASS="paragraphe">([0-9]{1,3})/g);
		var arrayFinal = new Array();
		var dataCours = new Array();

		console.log(arrayDataComplet); // à garder pour compléter les séances horaires dans le parsing

		if(arrayCoursGroupe != null) {
			arrayFinal.push({'valide': 'oui'});
			for(var i = 0 ; i < arrayCoursGroupe.length ; i++){
				arrayCoursGroupe[i] = arrayCoursGroupe[i].replace("<TD ALIGN=\"CENTER\" CLASS=\"paragraphe\">", "");
				arrayCoursGroupe[i] = arrayCoursGroupe[i].replace("</TD>", "");
				arrayCoursGroupe[i] = arrayCoursGroupe[i].replace("<TD ALIGN=\"CENTER\" CLASS=\"paragraphe\">", "");
				dataCours.push(
					{ 
						'groupe' : arrayCoursGroupe[i].split("\n")[0],
						'place_restantes' : arrayCoursGroupe[i].split("\n")[1]
				});
			}
		arrayFinal.push({'cours':dataCours});
		res.send(arrayFinal);

		} else {
			res.send([{'valide': 'non'}])
		}
	});
};