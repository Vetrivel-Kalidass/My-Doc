import bestpractices from './data/angular';

let d = bestpractices;
console.log(d);


const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});
