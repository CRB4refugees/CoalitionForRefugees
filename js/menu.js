'use strict';

//Declare variable that for elements in use.
const navIcon = document.getElementById('nav-menu-link');
const exitNav = document.getElementById('exit-mobile-nav-btn');
const overlayMenu = document.getElementById('mobileContainer');
const bodyEl = document.querySelector('body');
const mobileTopBar = document.getElementById('responsive-sticky-nav');


//function to add visibility (-> display: flex) to mobile menu
const showNav = function(e) {
  e.preventDefault();
  overlayMenu.style.display = "flex";
  // console.log('show nav engaged');
  // console.log(e);
};

//function to remove visibility (-> display: none) from mobile menu
const removeNav = function(e) {
  e.preventDefault();
  overlayMenu.style.display = "none";
  // console.log('remove nav engaged');
  // console.log(e);
};


// add event listeners to menu and exit icons
navIcon.addEventListener("click", showNav);
exitNav.addEventListener("click", removeNav);
