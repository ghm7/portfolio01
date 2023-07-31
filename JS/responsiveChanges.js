import { changeLinks } from "./changeLinks.js";
import { createWorkSection } from "./createWorkSection.js";

const responsiveChanges = (e) => {
  let width = "";
  if (e.type == "DOMContentLoaded")
    width = e.target.documentElement.offsetWidth;

  if (e.type == "resize") width = e.target.innerWidth;

  changeLinks(width);

  if (!document.querySelector(".wrapper")) {
    createWorkSection(width);
  } else {
    console.log("Remove");
  }
};

export { responsiveChanges };

// THIS IS NOT IN USE
