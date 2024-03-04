'use strict';

/** Preload
 * loading will be end after document is loaded
*/

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})


/**
 * add event listener on multiple elements
*/

const addEventListener = function (elements, eventType, callBack) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callBack);
    }
}


/** Navbar */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {}