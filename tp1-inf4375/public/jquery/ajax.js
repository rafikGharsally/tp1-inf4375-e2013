$(document).ready(function(){
	//cours1 ajax
	$("#cours1").blur(function(){
		$('#cours1').css("border-color", "black");
		$("#enTraitement").show();
		$.ajax({
			url: "http://localhost:3000/info/"+$("#cours1").val()
		}).done(function ( data ) {
			$("#enTraitement").hide();
			var cmpt = 0
			$.each(data[1], function(key,resultat){
				if(data[0].valide == "oui"){
					$('#cours1').css("border-color", "green");
					if(parseInt(resultat[cmpt].place_restantes) > 0){
						$('#cours1').val($('#cours1').val()+"-"+resultat[cmpt].groupe);
					}
					cmpt++;
				}
			});	
		});
	});

	//cours1 ajax
	$("#cours2").blur(function(){
		$("#enTraitement").show();
		$.ajax({
			url: "http://localhost:3000/info/"+$("#cours2").val()
		}).done(function ( data ) {
			$("#enTraitement").hide();
			var cmpt = 0
			$.each(data[1], function(key,resultat){
				if(data[0].valide == "oui"){
					$('#cours2').css("border-color", "green");
					if(parseInt(resultat[cmpt].place_restantes) > 0){
						$('#cours2').val($('#cours2').val()+"-"+resultat[cmpt].groupe);
					}
					cmpt++;
				}
			});	
		});
	});

	//cours3 ajax
	$("#cours3").blur(function(){
		$("#enTraitement").show();
		$.ajax({
			url: "http://localhost:3000/info/"+$("#cours3").val()
		}).done(function ( data ) {
			$("#enTraitement").hide();
			var cmpt = 0
			$.each(data[1], function(key,resultat){
				if(data[0].valide == "oui"){
					$('#cours3').css("border-color", "green");
					if(parseInt(resultat[cmpt].place_restantes) > 0){
						$('#cours3').val($('#cours3').val()+"-"+resultat[cmpt].groupe);
					}
					cmpt++;
				}
			});	
		});
	});

	//cours4 ajax
	$("#cours4").blur(function(){
		$("#enTraitement").show();
		$.ajax({
			url: "http://localhost:3000/info/"+$("#cours4").val()
		}).done(function ( data ) {
			$("#enTraitement").hide();
			var cmpt = 0
			$.each(data[1], function(key,resultat){
				if(data[0].valide == "oui"){
					$('#cours4').css("border-color", "green");
					if(parseInt(resultat[cmpt].place_restantes) > 0){
						$('#cours4').val($('#cours4').val()+"-"+resultat[cmpt].groupe);
					}
					cmpt++;
				}
			});	
		});
	});

	//cours5 ajax
	$("#cours5").blur(function(){
		$("#enTraitement").show();
		$.ajax({
			url: "http://localhost:3000/info/"+$("#cours5").val()
		}).done(function ( data ) {
			$("#enTraitement").hide();
			var cmpt = 0
			$.each(data[1], function(key,resultat){
				if(data[0].valide == "oui"){
					$('#cours5').css("border-color", "green");
					if(parseInt(resultat[cmpt].place_restantes) > 0){
						$('#cours5').val($('#cours5').val()+"-"+resultat[cmpt].groupe);
					}
					cmpt++;
				}
			});		
		});
	});

	//Traitement du bouton enregistrer
	$("#boutonEnregistrer").click(function(){
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/inscription",
			data: {
				code_permanent: $("#code_permanent-etudiant").val(),
				prenom: $("#prenom-etudiant").val(),
				nom: $("#nom-etudiant").val()
			},
			success: function(msg){
	        	
	    	}
		});	
	});
});