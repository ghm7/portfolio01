import { menu, links, btnBurger, workBoxes } from "./DOMElements.js";
import { changeLinks } from "./changeLinks.js";
import { dropMenu } from "./dropMenu.js";
import { animateHoverIn, animateHoverOut } from "./animateHover.js";
import { moveHover } from "./moveHover.js";
import { moveAbsoluteDOM } from "./moveAbsoluteDOM.js";
import {
  animateWorkBoxIn,
  animateWorkBoxOut,
  moveButtons,
} from "./animateWorkBox.js";

// DropMenu
links.forEach((a) => a.addEventListener("click", dropMenu));
btnBurger.addEventListener("click", dropMenu);
menu.addEventListener("click", dropMenu);

window.addEventListener("resize", (e) => {
  changeLinks(e);
  moveHover();
  moveAbsoluteDOM("about-title", "work-title");
  moveButtons(e);
});
document.addEventListener("DOMContentLoaded", (e) => {
  changeLinks(e);
  moveHover();
  moveAbsoluteDOM("about-title", "work-title");
  moveButtons(e);
});

links.forEach((link) =>
  link.addEventListener("mouseenter", (e) => {
    animateHoverIn(e);
  })
);

links.forEach((link) =>
  link.addEventListener("mouseleave", (e) => {
    animateHoverOut(e);
  })
);

workBoxes.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    animateWorkBoxIn(e);
  });
});

workBoxes.forEach((box) => {
  box.addEventListener("mouseleave", (e) => {
    animateWorkBoxOut(e);
  });
});

// for debugging purpose
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (el.offsetWidth > docWidth) {
    console.log(`${el.className} width: ${el.offsetWidth}`);
    console.log(`docWidth: ${docWidth}`);
  }
});

console.log("Hi");
