/*

option 1 - alt (tan first) desktop, checker (tan first) mobile

option 2 - checker (grey first) desktop, checker (tan first) mobile

option 3 - checker (grey first) desktop, alt (grey first) mobile

*/

let pattern_option_1 = document.querySelectorAll(".color-pattern-opt-1");
let pattern_option_2 = document.querySelectorAll(".color-pattern-opt-2");
let pattern_option_3 = document.querySelectorAll(".color-pattern-opt-3");

function gridColors(numberToSwap, elementArray, tan_first, desktop) {
  elementArray.forEach((element, index) => {
    let swapNumber = index % numberToSwap;
    let images = element.querySelectorAll("img");
    let evenRow = index % 4;

    if (desktop == false || !element.classList.contains("color-pattern-opt-3")) {
      if (tan_first) {
        images.forEach(element => element.classList.toggle("hidden"));
      }
      if (swapNumber == 0) {
        images.forEach((element) => {
          element.classList.toggle("hidden");
        });
      };
    } else {
      if (evenRow >= 2) {
        if (evenRow == 3) {
          images.forEach(element => element.classList.toggle("hidden"));
        }
        
      } else {
        if (evenRow == 0) {
          images.forEach(element => element.classList.toggle("hidden"));
        }
      }
    }
  });
}


// use numberToSwap = 2 for everyother and numberToSwap = 3 for checkerboard
window.addEventListener("load", () => {
  if (window.innerWidth < 750) {
    gridColors(3, pattern_option_1, true, false);
    gridColors(3, pattern_option_2, true, false);
    gridColors(2, pattern_option_3, false, false);
  } else {
    gridColors(2, pattern_option_1, true, true);
    gridColors(3, pattern_option_2, false, true);
    gridColors(3, pattern_option_3, false, true);
  }
});