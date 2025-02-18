// alert("Coucou, je teste mon script JS");
// Pour le hover des card
document.addEventListener("DOMContentLoaded", function () {
  let card = document.querySelector(".carte");

  card.addEventListener("mouseenter", function () {
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", function () {
    card.classList.remove("hovered");
  });
});

// **********************************
  // Validation du formulaire
// **************************************

// On récupére notre formulaire
let formulaire = document.querySelector("form");

// On récupére notre champ prenom
let inputPrenom = document.getElementById("prenom");
// Pour la taille de la valeur  du champ pseudo
let taillePrenom = valuePrenom.length;

// On récupére notre champ nom 
let inputNom = document.querySelector("#nom");

// on récupére notre champ email 
let inputEmail = document.querySelector("#email");

// on ajout l'écouteur d'événement
formulaire.addEventListener("submit", function(event){
event.preventDefault();
//un trim() pour éviter les espaces
let valeurP = inputPrenom.value.trim();
let valeurN = inputNom.value.trim();
let valeurE = inputEmail.value.trim();

// On créer un regex pour notre champ email
let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}a$/;

// ***************************** PRENOM ***********************
if (taillePrenomPrenom < 2 || taillePrenomPrenom > 10) {
  inputPrenom.classList.add("valid");
} else {
  inputPrenom.classList.add("invalid");
}




})

