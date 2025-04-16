function didWin(giveNumber, findNumber) {
    if (giveNumber === findNumber) {
        return "correct"; 
    } else if (giveNumber < findNumber) {
        return "trop petit";
    } else {
        return "trop grand";
    }
}

function gameplayTwoPlayers() {
    
    const playerNames = [
        prompt("Entrez le nom du Joueur 1:") || "Joueur 1",
        prompt("Entrez le nom du Joueur 2:") || "Joueur 2"
    ];
    
    const numberToFind = 22
    let currentPlayerIndex = 0; 
    let attempts = [0, 0]; 
    let gameWon = false;
    let winner = null;
    
    while (!gameWon) {
    
        const currentPlayer = playerNames[currentPlayerIndex];
        attempts[currentPlayerIndex]++;
        const userNumber = parseInt(prompt(`${currentPlayer}, c'est votre tour (tentative ${attempts[currentPlayerIndex]})\nDevinez le nombre entre 1 et 50:`)); 
        
        if (isNaN(userNumber)) {
            alert("Veuillez entrer un nombre valide");
            attempts[currentPlayerIndex]--; 
            continue;
        }
        
        const result =didWin (userNumber, numberToFind);

        if (result === "correct") {
            gameWon = true;
            winner = currentPlayerIndex;
            break;
        } else {
            alert(`${currentPlayer}, votre nombre est ${result}. Au tour du joueur suivant.`);
            currentPlayerIndex = 1 - currentPlayerIndex;
        }
    }
    
    const winnerName = playerNames[winner];
    const loserName = playerNames[1 - winner];
    const winnerAttempts = attempts[winner];
    const loserAttempts = attempts[1 - winner];
    
    alert(`🎉 Félicitations ${winnerName}! Vous avez trouvé le nombre ${numberToFind} en ${winnerAttempts} tentatives!\n\n${loserName} a fait ${loserAttempts} tentatives.`);
}


gameplayTwoPlayers();



