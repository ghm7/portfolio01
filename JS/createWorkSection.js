import { workSection } from "./DOMElements.js";
const createWorkSection = (width) => {
  const container = workSection.children[0]; // select the main container
  const div = document.createElement("div"); // create the new container
  div.classList = "wrapper"; // add class to the new container
  container.appendChild(div); // append the new container with the old container
  const works = Array.prototype.slice.call(
    document.querySelectorAll(".work-box")
  ); // get every work
  works.forEach((work) => {
    work.className = "work-box";
    div.appendChild(work);
  }); // put each work-box inside the new container

  const dots = document.createElement("div");
  dots.classList = "dots";
  container.appendChild(dots);
};

export { createWorkSection };

// I need to change this, Instead of creating elements a better way is
// to change css properties or classlist
