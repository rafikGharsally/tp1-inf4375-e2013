$(document).ready(function(){

	$("#fieldset-cours").hide();

	/* On cache le fieldset des cours à choisir tant que les champs d'information
	/ de l'étudiant ne sont pas tous remplis. */
	$("#info-etudiant input").keyup(function() {
        var $emptyFields = $('#info-etudiant :input').filter(function() {
            return $.trim(this.value) === "";
        });

        if (!$emptyFields.length) {
            $("#fieldset-cours").show();
        }
    });

	$("#enTraitement").hide();
});