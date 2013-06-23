$(document).ready(function(){
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
});