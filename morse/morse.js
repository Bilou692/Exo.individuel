const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

function getLatinCharacterList(text){    // Fonction qui transforme un texte en liste de caractères
    return Array.from(text)    // Retourne un tableau avec chaque caractère du texte
}
//const result = getLatinCharacterList("Hello, world")
//console.log(result)


function translateLatinCharacter(translate){    // Fonction qui traduit une lettre en morse
    return latinToMorse[translate]
}
//console.log(translateLatinCharacter("A"))


function encode(){       // Fonction qui traduit un mot en morse
const morseInput = document.getElementById('valueinputmorse')
const text = morseInput.value.toUpperCase()  // toUpperCase pour écrire en minuscule
    let traduction = ''
    const characters = getLatinCharacterList(text)
    for(let i = 0; i < characters.length; i++){
        const morseTrad = translateLatinCharacter(characters[i])
        if(morseTrad){
            traduction += morseTrad + ''
            document.getElementById('resultinputmorse').value = traduction
        }
    }  
    console.log(traduction) 
    return traduction
}   
//console.log(encode("BONJOUR"))


function decode() {    // Fonction qui traduit du morse en mot latin
const latinInput = document.getElementById('valueinputlatin')
const textMorse = latinInput.value
    let translate = '';
    const separationEntreLettres = ' ';
    const separationEntreMots = '/';
    const motsMorse = textMorse.split(separationEntreMots);

    for (let i = 0; i < motsMorse.length; i++) {
        const mot = motsMorse[i];
        const lettres = mot.split(separationEntreLettres); 

        for (let j = 0; j < lettres.length; j++) {
            const morse = lettres[j];
            const latinMorse = morseToLatin[morse];

            if (latinMorse) {
                translate += latinMorse;
                document.getElementById('resultinputlatin').value = translate
            } 
        }
         if (i < motsMorse.length - 1) {
            translate += ' ';
        }
    }
    console.log(translate)
    return translate;
}
//console.log(decode("-... --- -. .--- --- ..- .-." + '/' + "-... .. .-.. .- .-.."));


const morseButton = document.getElementById('morse')
morseButton.addEventListener('click', encode)


const latinButton = document.getElementById('latin')
latinButton.addEventListener('click', decode)