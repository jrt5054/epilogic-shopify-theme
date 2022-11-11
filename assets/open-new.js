const menuElements = document.querySelectorAll("span.epi-header-items");
const newElement = document.querySelector(".new-element");
const newProductDetailsOpenNew = document.querySelector("details.detail-new-products");
const newProductDivOpenNew = document.querySelector(".header-new-products");


let clicked = false;

menuElements.forEach(element => {
  if (element.innerHTML == "New") {
    element.addEventListener('mouseenter', (event) => {
      if (clicked == false) {
        newElement.click();
        clicked = true;
      }
    });
  } else {
    element.addEventListener('mouseenter', (event) => {
      if (newProductDetailsOpenNew.open == true) {
        newElement.click();
      clicked = false;
      }
    });
  }
})

newProductDivOpenNew.addEventListener('mouseleave', (event) => {
  if (newProductDetailsOpenNew.open == true) {
    newElement.click();
  clicked = false;
  }
});