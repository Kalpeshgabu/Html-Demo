
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
  element.classList.remove("activeclass");
}


/*Fetch Api Calling */

console.log('This is my tutorial')

const myBtn = document.getElementById('my-btn');

const content = document.getElementById('content');

function getData() {
  url = "Interview.txt";
  console.log("Started getData");
  fetch(url).then((response)=> {
    return response.text();
  }).then((data)=>{
    console.log(data);
  })
}
console.log("Before runnig getData");
getData();
console.log("After runnig getData");
 