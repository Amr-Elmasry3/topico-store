// Access To Used Elements
let pictureOfProduct= document.querySelector(".main-img");
let otherPictures= Array.from(document.querySelectorAll(".sub-img"));

otherPictures.forEach((img) => {
  img.addEventListener("click", (eve) => {
    pictureOfProduct.src= eve.currentTarget.src;
  })
})