
/* Prealoder */

window.addEventListener('load', () => {
  const preload = document.querySelector('#preloader');
  setTimeout( function() {
      preload.classList.add('preloader-finish');
  }, 2000 );
});



/**
   * Initiate Pure Counter 
   */
 new PureCounter();


var element = document.getElementById("abcd");

function openMenu() {
  element.classList.add("activeclass");
}
function closeMenu() {
  element.classList.remove("activeclass")
}