// DOM
const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.querySelector(".ecran");

document.addEventListener("keydown", (e) => {
    const valeur = e.keycode.toString();
    calculer(valeur);
});

touches.forEach((touche) => {
    touche.addEventListener("click", (e) => {
        const valeur = e.target.dataset.key;
        calculer(valeur);
    });
});

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "187":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.error.message);
});
