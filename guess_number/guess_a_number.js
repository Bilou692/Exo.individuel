// Fonction qui vérifie le résultat du joueur
function didWin(giveNumber, findNumber) {
    if (giveNumber === findNumber) {
        return "correct"; 
    } else if (giveNumber < findNumber) {
        return "petit";
    } else {
        return "grand";
    }
}

// FONction qui limite a donner un nombre seulement entre 0 et 50
function isValidNumber(number) {
    return !isNaN(number) && number >= 0 && number <= 50;
}

// Fonction qui gère la partie avec 2 joueurs
function gameplayTwoPlayers() {
    
    const playerNames = [
        prompt("Entrez le nom du Joueur 1:") || "Joueur 1",      // je demande le nom pour chaque joueur, si pas de nom on garde par défaut joueur 1 joueur 2
        prompt("Entrez le nom du Joueur 2:") || "Joueur 2"
    ];
    
    const numberToFind = 22
    let currentPlayerIndex = 0;   // le joueur 1 commence a l'index 0
    let attempts = [0, 0];        // Tableau qui stocke le nombre de tentatives par joueur 
    let gameWon = false;          // variable qui sert a savoir si le jeu est fini
    let winner = null;            // variable qui sotckera l'index du joueur gagnant
    
    // Boucle du jeu
    while (!gameWon) {            // Boucle qui s'exécutera tant que le jeu n'est pas gagné, le jeu continue
    
        const currentPlayer = playerNames[currentPlayerIndex];    // JE récupère le nom du joueur actuel
        attempts[currentPlayerIndex]++;      // J'incrémente son nombre de tentatives

        let userNumber;
        let validInput = false;   // VARIable qui sert a savoir si le nombre est bien entre 0 et 50

        while(!validInput){       // boucle qui s'exécutera tant le nombre écris n'est pas entre 0 et 50 
            userNumber = parseInt(prompt(`${currentPlayer}, c'est votre tour (tentative ${attempts[currentPlayerIndex]})\nDevinez le nombre entre 1 et 50:`));   // Je demande au joueur d'écrire un nombre, parseint le convertit en nombre entier. ET J'affiche son nombre de tentatives
            if(!isValidNumber(userNumber)){       // Appel de la fonction isValidNumber si le nombre est entre 0 et 50
                alert("Vueillez entrer un nombre valide entre 0 et 50");
            } else {
                validInput = true;   // LE NOMbre est bien entre 0 et 50, au joueur suivant, le jeu continu
            }
        }
       
        const result = didWin(userNumber, numberToFind);   // J'appelle la fonction didwin pour savoir si la réponse est correcte

        if (result === "correct") {
            gameWon = true;                 // le jeu est gagné
            winner = currentPlayerIndex;   // je garde l'index gagnant du joueur
            break;
        } else {
            alert(`${currentPlayer}, votre nombre est ${result}. Au tour du joueur suivant.`);
            currentPlayerIndex = 1 - currentPlayerIndex;    // je passe au joueur suivant, ce qui permet de switcher entre les joueurs
        }
    }
    
    // fin de partie 
    const winnerName = playerNames[winner];        // Je recupère le nom du gagnant a partir du tableau palyernames 
    const loserName = playerNames[1 - winner];     // Je reucpere le nom du perdant en  inversant l'index du gagnant (si winner = 0, 1-0=1 : joueur 2 perdant) (si winner = 1, 1-1=0 : joueur 1 perdant)
    const winnerAttempts = attempts[winner];       // JE récupere le nombre de tentatives du gagnant depuis le tableau attempts
    const loserAttempts = attempts[1 - winner];    // JE Récupere le nombre de tentatives du perdant en inversant l'index du gagnant
    
    alert(`🎉 Félicitations ${winnerName}! Vous avez trouvé le nombre ${numberToFind} en ${winnerAttempts} tentatives!\n\n${loserName} a fait ${loserAttempts} tentatives.`);
}
gameplayTwoPlayers();



