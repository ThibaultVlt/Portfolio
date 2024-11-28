"use strict";

// Menu
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('active');
    menu.classList.toggle('active');
    burger.setAttribute('aria-expanded', isActive); // Mettez à jour l'attribut pour les lecteurs d'écran
});

// Effet machine à écrire

const text = document.querySelector(".bvn");
const messages = ["Bienvenue !", "Welcome !"];
let currentMessageIndex = 0;

const textLoad = () => {
    text.textContent = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Passer au message suivant
};


// Activer et Désactiver la feuille de style bootstrap

document.addEventListener("DOMContentLoaded", () => {
    const cssBootstrap = document.querySelector('#bootstrap-stylesheet');
    const cvSection = document.querySelector('#cv');
    const header = document.querySelector('header');

    // Fonction pour activer la feuille de style Bootstrap pour la section #cv
    const activerBootstrapSurCV = () => {
        cssBootstrap.disabled = false; // Active la feuille de style
        console.log("Bootstrap activé pour #cv");
    };

    // Fonction pour que le header n'ai pas l'activation de bootstrap.
    //TODO Faire la fonction

    // Fonction pour désactiver la feuille de style Bootstrap pour les autres sections
    const desactiverBootstrapSurLesAutre = () => {
        cssBootstrap.disabled = true; // Désactive la feuille de style
        console.log("Bootstrap désactivé pour les autres sections");
    };

    // Vérifier la section visible au chargement de la page
    if (cvSection && cvSection.getBoundingClientRect().top <= window.innerHeight) {
        activerBootstrapSurCV();  // Si la section #cv est visible, activez la feuille de style
    } else {
        desactiverBootstrapSurLesAutre();  // Sinon, désactivez-la
    }

    // Écouter le défilement pour activer/désactiver la feuille de style lorsque #cv est visible
    window.addEventListener('scroll', () => {
        if (cvSection && cvSection.getBoundingClientRect().top <= window.innerHeight && cvSection.getBoundingClientRect().bottom >= 0) {
            activerBootstrapSurCV();  // Si #cv est visible, activez Bootstrap
        } else {
            desactiverBootstrapSurLesAutre();  // Sinon, désactivez Bootstrap
        }
    });
});
