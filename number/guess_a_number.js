function didWin(giveNumber, findNumber){
    findNumber = didWin 
    if (giveNumber === 22) {alert("Bravo! Vous avez devinez le nombre");}

    else if (giveNumber < 22) 
        {alert("Plus grand")
        gameplay();}

    else if (giveNumber > 22) 
        {alert("Plus petit") 
        gameplay();}}

function gameplay() {
    const userNumber = parseInt(prompt("Saisissez un nombre 0 et 50 "));

    didWin(userNumber);}

gameplay();

function player1(findNumber){
    while(findNumber < 0 || findNumber > 50){
        return gameplay
}}
 





