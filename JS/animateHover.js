import anime from "../node_modules/animejs/lib/anime.es.js";
import { overlayHovers } from "./DOMElements.js";

const getHoverIndex = (e) => {
  const text = e.target.innerText;
  if (text == "HOME") return 0;
  if (text == "ABOUT") return 1;
  if (text == "WORK") return 2;
  if (text == "CONTACT") return 3;
};

const animateHoverIn = (e) => {
  if (window.innerWidth > 1024) {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 125,
    });
    tl.add({
      targets: overlayHovers[getHoverIndex(e)],
      width: e.target.offsetWidth + 20,
    }).add({
      targets: overlayHovers[getHoverIndex(e)].children[0],
      opacity: 1,
    });
  }
};

const animateHoverOut = (e) => {
  if (window.innerWidth > 1024) {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 125,
    });
    tl.add({
      targets: overlayHovers[getHoverIndex(e)].children[0],
      opacity: 0,
    }).add({
      targets: overlayHovers[getHoverIndex(e)],
      width: 0,
    });
  }
};

export { animateHoverIn, animateHoverOut, getHoverIndex };
