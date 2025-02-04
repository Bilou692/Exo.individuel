let nb_allumettes = 50
let nb_a_enlever
let joueur = 1
let nb_joueur

const header = document.querySelector('h1');
const input = document.querySelector('#nb_allumettes_a_enlever');
const input_joueur = document.querySelector('#nb_joueur');
const label = document.querySelector('#allumettes');
const button = document.querySelector('#valider');       // tous les elements HTML importés
const nb_joueur_button = document.querySelector('#nb_joueur_button');
const reset_button = document.querySelector('#reset');
const nb_restant = document.querySelector('#nb_restant');

nb_joueur_button.addEventListener('click', () => { // création de l'événement du bouton nombre de joueur
	header.innerText = "" // avoir un titre en fonction du joueur qui gagne
	nb_joueur = input_joueur.value // recuperer le nombre de joueur dans l'input
    if (nb_joueur > 0){ // condition de jeu
	button.style.display = "inline-block" // affichage du bouton valider
	input.style.display = "inline-block" // affichage de l'input
	nb_joueur_button.style.display = "none" // bouton du nb de joueurs caché
	input_joueur.style.display = "none" // l'input du nombre de joueur caché
	input_joueur.value = "" // remettre a zéro le nombre de joueur
	label.innerText = `Joueur ${joueur}, à vous de jouer` // creation de texte pr savoir quel joueur joue
    }
})

button.addEventListener('click', () => { // création de l'évenement du bouton valider
	nb_a_enlever = input.value // recuperer le nombre d'allumettes a enlever dans l'input
	input.value = "" // réinitialise le nombre d'allumettes a enlever
	if (nb_a_enlever < 7 && nb_a_enlever > 0) { // condition au nombre d'alluemtte a enlever
		nb_allumettes = enleve_Allumettes(nb_a_enlever) 
		if (nb_allumettes > 0) // si il reste des allumettes
		{
			update(nb_joueur) // on change de joueur
		}
		else // sinon
		{ // la partie est terminé
			header.innerText = `Bravo joueur ${joueur}! Vous avez gagné` // création de texte
			label.innerText = "" // réinitialise le texte du label
			nb_restant.innerText = "" // réinitialise le texte du nombre d'allumettes restant
			input.style.display = "none" // input caché
			button.style.display = "none" // bouton validé caché
			reset_button.style.display = "inline-block" // apparation du bouton rejouer
		}
	}
})

reset_button.addEventListener('click', () => { // création de l'évenement du bouton rejouer
	nb_allumettes = 50 // variable du nombre d'allumette
	joueur = 1 // variable du nombre de joueur
	reset_button.style.display = "none" // bouton rejouer caché
	input_joueur.style.display = "inline-block" // réapparition de l'input
	nb_joueur_button.style.display = "inline-block" // réappariton du bouton nombre de joueur
	header.innerText = ""
	label.innerText = ""
})

function enleve_Allumettes(nb_a_enlever)
{                                          // fonction qui permet de mettre a jour le nombre d'allumettes apres chaque action d'en enlever
	return (nb_allumettes - nb_a_enlever)
}

function update(nb_joueur) // fonction pr la création du mode multijoueur
{
	nb_restant.innerText = `Il reste ${nb_allumettes} allumettes` // Met à jour le nombre d’allumettes restantes
	if (joueur == nb_joueur)  // Alterne les joueurs,
		joueur = 1           // revenant au joueur 1 après le dernier joueur
	else
		joueur++
	label.innerText = `Joueur ${joueur}, à vous de jouer` // met a jour le tour du joueur qui doir jouer
}






