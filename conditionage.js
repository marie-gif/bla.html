
// VARIABLE GLOBAL



// FONCTIONS
function estimation_statut(valeur_age){
	// cette fonction cree le message de reponse en fonction de l'age 
	// age < 18 ans : Programme reserve au personne majeur 
	// 18 < age < 26 : statut jeune
	// 27 < age < 65 : statut adulte 
	// age > 65 : reserve au personne non retraite 
	var texte_reponse;
	
	if(valeur_age<18){
		texte_reponse = "Programme reservé aux personnes majeures";

	} else {
		if(valeur_age<26) { // si on est dans le else cela signifie qu'il a forcement plus que 18 ans
			texte_reponse = "Statut jeune";
		} else {
			if (valeur_age<65){
				texte_reponse = "Statut adulte";
			} else {
				texte_reponse = "Programme reservé aux personnes non retraitées ";
			}
		}
	}
	return texte_reponse
};

// FONCTIONS AFFICHAGE
function remise_a_zero(){
	// remise_a_zero efface le contenu du text "reponse" et remet a 0 le input "number"
	document.getElementById('age').value = 0; 
	document.getElementById('reponse').innerHTML = ""; 
	
};

function affiche_text(){
	var age = document.getElementById('age').value; // recupere la valeur de l'age 
	var int_age = parseInt(age)
	var msg = estimation_statut(int_age)
	document.getElementById('reponse').innerHTML = msg; 	
//	document.getElementById('debug').innerHTML = age; 
}