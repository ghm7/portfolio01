import { menu, links } from "./DOMElements.js";

const dropMenu = () => {
  if (window.innerWidth <= 1024) {
    menu.classList.toggle("expanded");
    links.forEach((link) => link.classList.toggle("visible"));
  }
};

export { dropMenu };
