$(document).ready(function(){
	//cours1 ajax
	$("#cours1").keyup(function(){
		$("#enTraitement").show();
		$.ajax({
			url: "http://localhost:3000/info/"+$("#cours1").val()
		}).done(function ( data ) {
			$("#enTraitement").hide();
			$('#info-cours1').show();
			$.each(data, function(key,resultat){
				$('#info-cours1').html(resultat.valide);
			});	
		});
	});

	//Traitement du bouton enregistrer
	$("#boutonEnregistrer").click(function(){
		$.ajax({
			type: "POST",
			url: "http://localhost:3000/inscription"
		}).done(function ( data ) {
			alert("done");
			});	
	});
});