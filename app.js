
//* mobile ICon
let navIcon= document.getElementById('nav-icon');
let ul=document.querySelector('.ul');

navIcon.addEventListener('click', function(){
  if (ul.style.display==='none'){
    ul.style.display='block';
  }else{
    ul.style.display='none'
  }

})

//*slider in Prices section
let slider=document.querySelector('.price-card');
console.log(slider);
let left= document.querySelector('#icon-btm-left');
let right=document.getElementById('icon-btm-right');
right.addEventListener('click', function(){
  slider.style.transform='translate(-50%)';
  slider.style.overflow='hidden'
})