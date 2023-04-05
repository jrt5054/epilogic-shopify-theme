const menuElements = document.querySelectorAll("nav.header__inline-menu details");

function epiLogicCloseMenuDetails() {

  detailElements.forEach((detailElement) => {
    if (detailElement.hasAttribute('open')) { 
      detailElement.removeAttribute('open')
    }
  });
}

menuElements.forEach(element => {
  element.addEventListener('mouseover', (event) => {
    element.setAttribute("open", true);
    element.addEventListener('mouseleave', (event) => {
      setTimeout(function(){
        if (!element.querySelector(':hover')) {
          element.removeAttribute("open");
        }
      }, 150);
    });
  });
  element.addEventListener('mouseleave', (event) => {
    setTimeout(function(){
      if (!element.querySelector(':hover')) {
        element.removeAttribute("open");
      }
    }, 150);
  });
})
