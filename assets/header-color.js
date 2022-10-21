const newProductDetails = document.querySelector("details.detail-new-products");
const colorDiv = document.querySelector(".header-wrapper");
const newProductDiv = document.querySelector(".header-new-products"); 
let wasWhite = false;

// when new is clicked check to see if the color scheme is white
// if so change to black
// change back to white when modal is closed
// if black do nothing

newProductDetails.addEventListener("click", function() {
  if (colorDiv.classList.contains("color-header-white") && wasWhite == false) {
    colorDiv.classList.remove("color-header-white");
    colorDiv.classList.add("color-header-black");
    wasWhite = true;
  }

  if (newProductDetails.open == true && wasWhite == true) {
    colorDiv.classList.remove("color-header-black");
    colorDiv.classList.add("color-header-white");
    wasWhite = false;
  }
 })

 newProductDetails.addEventListener("focusout", function() {
  if (newProductDetails.open == true && wasWhite == true) {
    colorDiv.classList.remove("color-header-black");
    colorDiv.classList.add("color-header-white");
    wasWhite = false;
  }
})