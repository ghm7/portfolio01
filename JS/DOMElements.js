const menu = document.querySelector(".nav-menu");
const bigTitle = document.querySelector(".big-title").querySelectorAll("p");
const links = Array.from(document.querySelectorAll(".menu-link"));
const overlayHovers = document.querySelectorAll(".overlay-hover");
const btnBurger = document.querySelector("#btn-burger");
const workBoxes = Array.from(document.querySelectorAll(".work-box"));

export { menu, bigTitle, links, btnBurger, overlayHovers, workBoxes };
