let prenom = prompt("Saisir un prénom")
function sayHello(firstname, hour)
{
let message = "Bonjour !"
// console.log(message)

// let firstname = "Beyonce !"
// message = "Bonjour " + firstname 
// console.log(message)

let msg = "Bonjour"
if(hour >= 18)
{
    msg = "Bonsoir"
}
message = msg + " " + firstname
document.querySelector('h1').innerText = message;
}
sayHello(prenom + "!" ,14)
// sayHello("Beyoncé !", 22)
// sayHello("Beyoncé !", 18)
