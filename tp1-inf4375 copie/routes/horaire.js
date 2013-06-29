exports.consulter = function(req, res){

	xml2js = require('xml2js');
	fs = require('fs');

	var parser = new xml2js.Parser();
	fs.readFile("etudiant.xml", function(err, data) {
	    parser.parseString(data, function (err, result) {
	    	console.log(result);
	        res.render('horaire', { prenom: result.root.prenom,
	        						nom: result.root.nom,
	        						code_prog: result.root['code-prog'],
	        						liste_cours: result.root['liste-cours']
	        });
	        res.end();
	    });
	});
};