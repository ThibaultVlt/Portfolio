"use strict";

// Menu
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () =>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Effet machine à écrire
const text = document.querySelector(".bvn");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Bienvenue !"
    }, 0);
    setTimeout(() => {
        text.textContent = "Welcome !"
    }, 4050);
}
