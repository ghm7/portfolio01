import { workBoxes } from "./DOMElements.js";
import anime from "../node_modules/animejs/lib/anime.es.js";

const moveButtons = (e) => {
  workBoxes.forEach((box) => {
    const button = box.children[0];
    button.style.top = `${box.offsetTop + 300}px`;
    button.style.left = `${box.offsetLeft + 200}px`;
  });
};

const animateWorkBoxIn = (e) => {
  const button = e.target.children[0];
  const text = button.children[0];
  if (window.innerWidth >= 1024) {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 250,
    });
    tl.add({
      targets: button,
      scaleX: 1,
    }).add({
      targets: text,
      opacity: 1,
    });
  }
};

const animateWorkBoxOut = (e) => {
  const button = e.target.children[0];
  const text = button.children[0];
  if (window.innerWidth >= 1024) {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 125,
    });
    tl.add({
      targets: text,
      opacity: 0,
    }).add({
      targets: button,
      scaleX: 0,
    });
  }
};

export { animateWorkBoxIn, animateWorkBoxOut, moveButtons };
