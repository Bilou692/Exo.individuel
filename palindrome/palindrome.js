// Je déclare une fonction
function sayHello(name)
{
	console.log("Bonjour à toi", name)
}

let myName = "Ada Lovelace"
let yourName = "Bilal futur devéloppeur insha ALLAH"

sayHello(myName)
sayHello(yourName)

function multiply(number1, number2)
{
   return(number1 * number2)
}

function printResult(result)
{
    console.log("le resultat est", result)
}

let ten = 10;
let two = 2;
let resultOperation = multiply(ten, two)

printResult(resultOperation)


function addition3numbers()
{
    console.log("Le resultat de la somme est 6")
}

addition3numbers()


function addition3NumbersWithArg(num, num2, num3)
{
    console.log("La somme X =", num + num2 + num3)
    console.log("La somme Y =", num + num3)
    console.log("La somme Z =", num + num2)
}

// let one = 1
// let two = 2 
// let three = 3

// addition3NumbersWithArg(one, two, three)


// function carre(nombre)
// {
//     return(nombre * nombre)
// }

// console.log(carre(4))

// function multipliépardix(nombre)
// {
//     return(nombre * 10)
// }


// let resultatcarre = carre(4)
// let resultatfinal = multipliépardix(resultatcarre)

// console.log(resultatfinal)


// function sendMessage(message, fromName, toName)
// {
// 	console.log(fromName + " " + toName + " " + message)
// }

// let toName = "Ada"
// let fromName = "Jean"
// let message = "Je t'apprends à coder tes premières fonctions"
// sendMessage(message, fromName, toName)



// // on passe en paramètre la `route` correspondant à la page du site :
// async function logAdaPage(route) {
// 	const res = await fetch(`https://adatechschool.fr/${route}`);
	
// 	// on récupère le html de la page en texte :
// 	const pageContent = await res.text();
	
// 	// puis on l'affiche
// 	console.log(pageContent);
// }
// logAdaPage('ecole');

// var d = new Date();
// var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
// var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// var fullDate = date+' '+hours;
// console.log(fullDate);


// function displayTime() {
    // const now = new Date(); // Crée une instance de la date actuelle
    // const hours = String(now.getHours()).padStart(2, "0"); // Récupère les heures et les formate sur 2 chiffres
    // const minutes = String(now.getMinutes()).padStart(2, "0"); // Récupère les minutes et les formate sur 2 chiffres
    // const seconds = String(now.getSeconds()).padStart(2, "0"); // Récupère les secondes et les formate sur 2 chiffres
  
//     console.log(`${hours}:${minutes}:${seconds}`); // Affiche l'heure dans la console
//   }
  
//   // Appelle la fonction `displayTime` toutes les secondes
//   setInterval(displayTime, 1000);


// // Heure de départ
// let hours = 14; // Par exemple : 14 heures
// let minutes = 30; // Par exemple : 30 minutes
// let seconds = 0; // Par exemple : 0 seconde

function updateTime() {
  // Incrémenter les secondes
  seconds++;

  // Gérer le dépassement des secondes (60 secondes = 1 minute)
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Gérer le dépassement des minutes (60 minutes = 1 heure)
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Gérer le dépassement des heures (24 heures = 1 jour)
  if (hours === 24) {
    hours = 0;
  }

  // Formater les heures, minutes et secondes pour avoir 2 chiffres
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  
  console.log(formattedTime); // Afficher l'heure mise à jour
}

// Met à jour l'heure toutes les secondes
setInterval(updateTime, 1000);

  

// l'heure actuelle
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

function incrementSeconds() {
  
  seconds++;

  // Depassement des secondes (60 secondes = 1 minute)
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // Depassement des minutes (60 minutes = 1 heure)
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Dépassement des heures (24 heures = 1 jour)
  if (hours === 24) {
    hours = 0;
  }

  // Formater les heures, minutes et secondes pour avoir 2 chiffres
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  
  console.log(formattedTime); // Afficher l'heure mise à jour
}

setInterval(incrementSeconds, 1000) 



