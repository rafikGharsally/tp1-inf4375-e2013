var builder = require('xmlbuilder');
var fs = require('fs');

exports.enregistrer = function(req, res){
		
	var xml = builder.create('root');
  		xml.ele('etudiant', {'code-permanent': req.body['code_permanent-etudiant']});
  		xml.ele('prenom', req.body['prenom-etudiant']);
    	xml.ele('nom', req.body['nom-etudiant']);
    	xml.ele('code-prog', req.body['code_prog']);
    var liste_cours = xml.ele('liste-cours');
    	for(var i = 1; i <= 5; i++)
		{
		  if (req.body['cours'+i].length > 0) {
		  	var item = liste_cours.ele('cours');
		  	item.att('sigle', req.body['cours'+i]);
		  }
		}


  		xml.end({ pretty: true});

  		fs.writeFile("etudiant.xml", xml, function(err) {
	    	if(err) {
	        	res.render('erreur-inscription');
		    } else {
		        res.render('inscription');
		    }
		}); 
};