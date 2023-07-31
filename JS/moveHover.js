import { overlayHovers, links } from "./DOMElements.js";

const moveHover = () => {
  let count = 0;
  overlayHovers.forEach((hover) => {
    hover.style.left = `${links[count].offsetLeft - 10}px`;
    hover.style.top = `${links[count].offsetTop - 10}px`;
    hover.style.height = `${links[count].offsetHeight + 20}px`;
    count++;
  });
};

export { moveHover };
