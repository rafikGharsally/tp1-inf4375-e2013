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
		  //validation si la chaine n'est pas vide et si le format du cours (sigle-groupe) est correct
		  if (req.body['cours'+i]) {
		  	if (req.body['cours'+i].length > 0 && /\w{3,}[0-9]\-[0-9]{2,}/g.test(req.body['cours'+i])) {
			  	var item = liste_cours.ele('cours');
			  	var indexGroupe = req.body['cours'+i].indexOf('-');
			  	item.att('sigle', req.body['cours'+i].substring(0, indexGroupe));
			  	item.att('groupe', req.body['cours'+i].substring(indexGroupe+1));
		  	}
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