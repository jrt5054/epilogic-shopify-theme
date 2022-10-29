const cursor = document.querySelector('.epi-cursor-js');
const cursorinner = document.querySelector('.epi-cursorinner-js');

const textClickMe = document.querySelector('.epi-cursor-text_clickme');
const textLearnMore = document.querySelector('.epi-cursor-text_learnmore');
const textReadMore = document.querySelector('.epi-cursor-text_readmore');
const textShopNow = document.querySelector('.epi-cursor-text_shopnow');

const hoverClickMe = document.querySelectorAll('.epi-cursor-hover_clickme');
const hoverLearnMore = document.querySelectorAll('.epi-cursor-hover_learnmore');
const hoverReadMore = document.querySelectorAll('.epi-cursor-hover_readmore');
const hoverShopNow = document.querySelectorAll('.epi-cursor-hover_shopnow');

document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';

  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';

  textClickMe.style.left = x + 'px';
  textClickMe.style.top = y + 'px';

  textLearnMore.style.left = x + 'px';
  textLearnMore.style.top = y + 'px';

  textReadMore.style.left = x + 'px';
  textReadMore.style.top = y + 'px';

  textShopNow.style.left = x + 'px';
  textShopNow.style.top = y + 'px';
});

// Click functions

document.addEventListener('mousedown', function(){
  cursorinner.classList.add('epi-cursorinner-click-js');
});

document.addEventListener('mouseup', function(){
  cursorinner.classList.remove('epi-cursorinner-click-js');
});

// Hover functions

hoverClickMe.forEach(item => {
  item.addEventListener('mouseover', () => {
    textClickMe.classList.add('epi-cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    textClickMe.classList.remove('epi-cursor-hover');
  });
})

hoverLearnMore.forEach(item => {
  item.addEventListener('mouseover', () => {
    textLearnMore.classList.add('epi-cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    textLearnMore.classList.remove('epi-cursor-hover');
  });
})

hoverReadMore.forEach(item => {
  item.addEventListener('mouseover', () => {
    textReadMore.classList.add('epi-cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    textReadMore.classList.remove('epi-cursor-hover');
  });
})

hoverShopNow.forEach(item => {
  item.addEventListener('mouseover', () => {
    textShopNow.classList.add('epi-cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    textShopNow.classList.remove('epi-cursor-hover');
  });
})