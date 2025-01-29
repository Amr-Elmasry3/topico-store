// Access To Used Elements
let allProductCard= Array.from(document.querySelectorAll(".product-card"));
let cartIcons= Array.from(document.querySelectorAll(".product-card .fa-cart-shopping"));
let countElements= Array.from(document.querySelectorAll(".count-in-cart"));
let cartSectionContent= document.querySelector(".cart-section .content");
let subtotalElements= Array.from(document.querySelectorAll(".subtotal-of-cart"));

// Part Of Variables
let countProductsInCart=0, productId=0, subtotalInCart= 0;
let arrayOfProductsDetails= [], arrayOfAnotherData= [], allDeleteIcons= [];

// Part Of Main Code

if (window.localStorage.getItem("productData")) {
  arrayOfProductsDetails= JSON.parse(window.localStorage.getItem("productData"));
  arrayOfAnotherData= JSON.parse(window.localStorage.getItem("subtotalOfProducts"));

  getDataFromLocalStorage();
  addClassAddedAfterReload();
}

cartIcons.forEach((cart) => {
  cart.addEventListener("click", (eve) => {

    if (eve.currentTarget.classList.contains("added")) {
      eve.currentTarget.classList.remove("added");
      countProductsInCart -= 1;
      setCountOfProductsInCart(countProductsInCart);

      let productCard= eve.currentTarget.parentElement.parentElement;
      removeClassAddedToSameId(productCard);

      removeProductFromCart(productId);
    }
    else {
      eve.currentTarget.classList.add("added");
      countProductsInCart += 1;
      setCountOfProductsInCart(countProductsInCart);

      let productCard= eve.currentTarget.parentElement.parentElement;
      addClassAddedToSameId(productCard);

      addProductToCart(productCard, productId);
    }
    
  });
});

removeProductFromCartByDeleteIcon();

// Part Of Functions

function setCountOfProductsInCart(count) {
  countElements.forEach((ele) => {
    ele.innerHTML= count;
  });
};

function addClassAddedToSameId(product) {
  productId= product.getAttribute("id");

  allProductCard.forEach((ele) => {
    if (ele.getAttribute("id") === productId) {
      let cartIcon= ele.children[1].firstElementChild;
      cartIcon.classList.add("added");
    }
  })
};

function removeClassAddedToSameId(product) {
  productId= product.getAttribute("id");

  allProductCard.forEach((ele) => {
    if (ele.getAttribute("id") === productId) {
      let cartIcon= ele.children[1].firstElementChild;
      cartIcon.classList.remove("added");
    }
  });
};

function addProductToCart(product, productId) {
  let imgProduct= product.children[2].src;
  let titleproduct= product.children[3].innerHTML;
  let priceProduct= product.children[5].firstElementChild.innerHTML;

  let card= `
    <div class="product-box" id="${productId}">
      
      <div class="picture">
        <img src="${imgProduct}">
      </div>

      <div class="info">
        <p class="product-name">${titleproduct}</p>
        <span class="product-price">${priceProduct}</span>
      </div>

      <div class="delete">
        <i class="fa-solid fa-trash-can"></i>
      </div>

    </div>
  `;

  cartSectionContent.innerHTML+= card;

  removeProductFromCartByDeleteIcon();

  increaseInSubtotal(priceProduct);

  setDataInLocalStorage(productId, imgProduct, titleproduct, priceProduct, subtotalInCart, countProductsInCart)
};

function removeProductFromCart(deletePoductId) {
  for (let x=0; x<cartSectionContent.children.length; x++) {
    let id= cartSectionContent.children[x].getAttribute("id");
    if (id === deletePoductId) {
      let priceProduct= cartSectionContent.children[x].children[1].children[1].innerHTML;
      decreaseInSubtotal(priceProduct);
      deleteFromLocalStorage(productId, subtotalInCart, countProductsInCart);

      cartSectionContent.children[x].remove();
      break;
    }
  }
};

function removeProductFromCartByDeleteIcon() {
  let deleteIcons= Array.from(document.querySelectorAll(".cart-section .delete"));

  deleteIcons.forEach((icon) => {
    icon.addEventListener("click", (eve) => {
      let product= eve.currentTarget.parentElement;
      let id= eve.currentTarget.parentElement.getAttribute("id");

      countProductsInCart -= 1;
      setCountOfProductsInCart(countProductsInCart);

      removeClassAddedToSameId(product);
      removeProductFromCart(id);
    });
  });
};

function increaseInSubtotal(price) {
  subtotalInCart += parseInt(price.substr(1));
  
  subtotalElements.forEach((ele) => {
    ele.innerHTML= `$${subtotalInCart}`;
  });
};

function decreaseInSubtotal(price) {
  subtotalInCart -= parseInt(price.substr(1));
  
  subtotalElements.forEach((ele) => {
    ele.innerHTML= `$${subtotalInCart}`;
  });
};

function setDataInLocalStorage (id, imgSrc, title, price, total, count) {
  let productDetails= {
    productId: id,
    productImg: imgSrc,
    productTitle: title,
    productPrice: price
  };

  let anotherDate= {
    subtotal: total,
    countProducts: count
  };

  arrayOfProductsDetails.push(productDetails);

  arrayOfAnotherData= [];
  arrayOfAnotherData.push(anotherDate);

  window.localStorage.setItem("productData", JSON.stringify(arrayOfProductsDetails));
  window.localStorage.setItem("subtotalOfProducts", JSON.stringify(arrayOfAnotherData));
};

function deleteFromLocalStorage(id, total, count) {
  for (let x=0; x<arrayOfProductsDetails.length; x++) {
    if (arrayOfProductsDetails[x].productId === id) {
      arrayOfProductsDetails.splice(x,1);
      window.localStorage.setItem("productData", JSON.stringify(arrayOfProductsDetails));
      break;
    }
  }

  let anotherDate= {
    subtotal: total,
    countProducts: count
  };

  arrayOfAnotherData= [];
  arrayOfAnotherData.push(anotherDate);

  window.localStorage.setItem("subtotalOfProducts", JSON.stringify(arrayOfAnotherData));
};

function getDataFromLocalStorage() {
  for (let x=0; x<arrayOfProductsDetails.length; x++) {
    let card= `
      <div class="product-box" id="${arrayOfProductsDetails[x].productId}">
        
        <div class="picture">
          <img src="${arrayOfProductsDetails[x].productImg}">
        </div>

        <div class="info">
          <p class="product-name">${arrayOfProductsDetails[x].productTitle}</p>
          <span class="product-price">${arrayOfProductsDetails[x].productPrice}</span>
        </div>

        <div class="delete">
          <i class="fa-solid fa-trash-can"></i>
        </div>

      </div>
  `;

  cartSectionContent.innerHTML+= card;
  }

  countElements.forEach((ele) => {
    ele.innerHTML= arrayOfAnotherData[0].countProducts;
  })
  countProductsInCart= arrayOfAnotherData[0].countProducts;

  subtotalElements.forEach((ele) => {
    ele.innerHTML= "$" + arrayOfAnotherData[0].subtotal;
  })
  subtotalInCart= arrayOfAnotherData[0].subtotal;
};

function addClassAddedAfterReload() {
  for (let x=0; x<allProductCard.length; x++) {
    for (let y=0; y<arrayOfProductsDetails.length; y++) {
      if (allProductCard[x].getAttribute("id") === arrayOfProductsDetails[y].productId) {
        let icon= allProductCard[x].children[1].firstElementChild;

        icon.classList.add("added");
      }
    }
  }
};

// window.localStorage.clear();
