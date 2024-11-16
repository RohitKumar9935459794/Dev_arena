export const toggleClass = (el,className) => {
    let el= document.querySelector(el);
    el.classList.toggle(className);
}

export const removeClass = (el,className) => {
  let elem = document.querySelector(el);
  elem.classList.remove(className);
};
