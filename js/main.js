// Access To Used Elements
let headrLinks= document.querySelector(".headr-links");
let cartIcon= document.querySelector(".headr .cart");
let menuIcon= document.querySelector(".menu-icon");
let closeIcon= document.querySelector(".headr-links .close");
let cartSection= document.querySelector(".cart-section");
let cartCloseIcon= document.querySelector(".cart-section .cart-close");

// Part Of Variables


// Part Of Main Code

// Control Of Sidebar
menuIcon.onclick= function () {
  headrLinks.style.cssText= "left: 0 ; transition: 1.2s";
}
closeIcon.onclick= function () {
  headrLinks.style.cssText= "left: -600px ; transition: 1.2s";
}

// Control Of Cart section
cartIcon.onclick= function () {
  cartSection.style.cssText= "right: 0 ; transition: 1.2s";
}
cartCloseIcon.onclick= function () {
  cartSection.style.cssText= "right: -400px ; transition: 1.2s";
}

// Part Of Funcations