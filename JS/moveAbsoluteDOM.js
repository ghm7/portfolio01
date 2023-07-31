const moveAbsoluteDOM = (...domElements) => {
  domElements.forEach((domEl) => {
    const e = document.getElementById(`${domEl}`);
    const absoluteEl = document.querySelector(`.absolute-${domEl}`);
    if (window.innerWidth >= 1600) {
      absoluteEl.style.top = `${e.offsetTop - 120}px`;
    } else if (window.innerWidth >= 640) {
      absoluteEl.style.top = `${e.offsetTop}px`;
    } else {
      absoluteEl.style.top = `${e.offsetTop}px`;
    }
  });
};

export { moveAbsoluteDOM };
