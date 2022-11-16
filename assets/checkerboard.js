// use numberToSwap = 2 for everyother and numberToSwap = 3 for checkerboard
function checkerboardOrSwap(numberToSwap) {
  let cards = document.querySelectorAll(".checkerboard-product");
  cards.forEach((element, index) => {
    let swapNumber = index % numberToSwap;
    if (swapNumber == 0) {
      let images = element.querySelectorAll("img");
      images.forEach(element => element.classList.toggle("hidden"))
    }
  });
}

window.addEventListener("load", () => {
  if (window.innerWidth < 750) {
    checkerboardOrSwap(3);
  } else {
    checkerboardOrSwap(2);
  }
});