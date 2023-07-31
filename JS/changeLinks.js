import { links } from "./DOMElements.js";
import { bigTitle } from "./DOMElements.js";

const pages = ["index.html", "about-me.html", "work.html", "contact.html"];
const sections = ["#", "#about", "#work", "#contact"];

// this changeLinks onLoad
var changeLinks = (e) => {
  let width = "";
  if (e.type == "DOMContentLoaded")
    width = e.target.documentElement.offsetWidth;

  if (e.type == "resize") width = e.target.outerWidth;

  // 425 is the maximum width for phones
  if (width <= 425) {
    // for (let i = 0; i < sections.length; i++) {
    //   links[i].href = sections[i];
    // }
    bigTitle[1].innerText = "Web Dev/";
  } else {
    // for (let i = 0; i < pages.length; i++) {
    //   links[i].href = pages[i];
    // }
    bigTitle[1].innerText = "Web Developer";
  }
};

export { changeLinks };
