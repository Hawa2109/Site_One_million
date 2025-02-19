// alert("Coucou, je teste mon script JS");
// Pour le hover des card
// let card = document.querySelector(".carte");
// card.document.addEventListener("mouseover", function () {
//   card.addEventListener("mouseenter", function () {
//     card.classList.add("hovered");
//   });
//   card.addEventListener("mouseleave", function () {
//     card.classList.remove("hovered");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let card = document.querySelector(".carte");

  if (card) {
    card.addEventListener("mouseenter", function () {
      card.classList.add("hovered");
    });

    card.addEventListener("mouseleave", function () {
      card.classList.remove("hovered");
    });
  }
});

// **********************************
// Validation du formulaire
// **************************************

// // On récupére notre formulaire
// let formulaire = document.querySelector("form");

// // On récupére notre champ prenom
// let inputPrenom = document.getElementById("prenom");

// // On récupére notre champ nom
// let inputNom = document.querySelector("#nom");

// // on récupére notre champ email
// let inputEmail = document.querySelector("#email");

// // on ajout l'écouteur d'événement
// formulaire.addEventListener("submit", function(event){
// event.preventDefault();
// //un trim() pour éviter les espaces
// let valeurP = inputPrenom.value.trim();
// let valeurN = inputNom.value.trim();
// let valeurE = inputEmail.value.trim();

// // Pour la taille de la valeur  du champ pseudo
// let taillePrenom = valeurP.length;

// // On créer un regex pour notre champ email
// let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}a$/;

// // ***************************** PRENOM ***********************
// if (taillePrenom < 2 || taillePrenom > 10) {
//   // inputPrenom.classList.add("valid");
//   document.querySelector("#prenomError").classList.add("error");
//   document.querySelector("#prenomError").classList.remove("d-none");
// } else {
//   // inputPrenom.classList.add("invalid");
//   document.querySelector("#prenomError").classList.add("d-none");
// }
// })

document.addEventListener("DOMContentLoaded", function () {
  // // On récupére notre formulaire
  let form = document.querySelector("form");
  // // On récupére notre champ prenom
  let inputPrenom = document.getElementById("prenom");
  // // On récupére notre champ nom
  let inputNom = document.querySelector("#nom");
  // // On récupére notre champ select
  let inputSelect = document.querySelector("select");
  // // on récupére notre champ email
  let inputEmail = document.querySelector("#email");
  // // on récupére notre champ textarea
  let inputTextarea = document.querySelector("textarea");

  //  On ajoutr l'écouteur d'événement
  form.addEventListener("submit", function (e) {
    let isValid = true;

    //On vérifie le prénom (au moins 2 caractères)
    if (inputPrenom.value.trim().length < 2) {
      document.getElementById("prenomError").classList.remove("d-none");
      inputPrenom.classList.add("invalid");
    } else {
      prenomError.classList.add("d-none");
      inputPrenom.classList.add("valid");
    }

    // On vérifie le  nom (au moins 2 caractères)
    if (inputNom.value.trim().length < 2) {
      document.getElementById("nomError").classList.remove("d-none");
      inputNom.classList.add("invalid");
      isValid = false;
    } else {
      document.getElementById("nomError").classList.add("d-none");
      inputNom.classList.add("valid");
    }

    // On vérifie le select (option sélectionnée)
    if (inputSelect.value === "" || inputSelect.value === "0") {
      inputSelect.classList.add("invalid");
      isValid = false;
    } else {
      inputSelect.classList.add("valid");
    }

    // On vérifie l'email avec une regex
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailregex.test(inputEmail.value.trim())) {
      document.getElementById("emailError").classList.remove("d-none");
      inputEmail.classList.add("invalid");
      isValid = false;
    } else {
      inputEmail.classList.add("valid");
      emailError.classList.add("d-none");
    }

    // On vérifie le  message (au moins 10 caractères)
    if (inputTextarea.value.trim().length < 10) {
      inputTextarea.classList.add("invalid");
      document.getElementById("textareaError").classList.remove("d-none");
      isValid = false;
    } else {
      inputTextarea.classList.add("valid");
      textareaError.classList.add("d-none");
    }

    // On empêche l'envoi du formulaire s'il y'a une erreur
    if (!isValid) {
      e.preventDefault();
    } else {
      alert("Formulaire envoyé");
    }
  });
});
