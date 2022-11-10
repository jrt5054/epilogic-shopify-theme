// use numberToSwap = 2 for everyother and numberToSwap = 3 for checkerboard
function checkerboardOrSwap(numberToSwap) {
  let cards = document.querySelectorAll(".checkerboard-product");
  cards.forEach((element, index) => {
    console.log(element.classList);
    console.log(index);
    let swapNumber = index % numberToSwap;
    if (swapNumber == 0) {
      let images = element.querySelectorAll("img");
      images.forEach(element => element.classList.toggle("hidden"))
    }
  });
}

if (window.innerWidth < 750) {
  checkerboardOrSwap(3);
} else {
  checkerboardOrSwap(2);
}