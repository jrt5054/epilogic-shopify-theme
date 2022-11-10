const menuElements = document.querySelectorAll("summary span.epi-cursor-hover_shopnow");
let clicked = false;
menuElements.forEach(element => {
  if (element.innerHTML == "New") {
    element.addEventListener('mouseenter', (event) => {
      if (clicked == false) {
        element.click();
      clicked = true;
      }
    });
  } //else {
  //   element.addEventListener('mouseleave', (event) => {
  //     if (clicked == true) {
  //       element.click();
  //     clicked = true;
  //     }
  //   });
  // }
})