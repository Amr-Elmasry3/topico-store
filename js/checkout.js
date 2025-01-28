let orderSummary= document.querySelector(".order-summary .products");
let totalElement= document.querySelector(".order-summary .total-value");

let arrayOfProductsDetails= [], arrayOfAnotherData= [];

if (window.localStorage.getItem("productData")) {
  arrayOfProductsDetails= JSON.parse(window.localStorage.getItem("productData"));
  arrayOfAnotherData= JSON.parse(window.localStorage.getItem("subtotalOfProducts"));

  addProductsInOrderSummary();
}

function addProductsInOrderSummary() {
  for (let x=0; x<arrayOfAnotherData[0].countProducts; x++) {
    let product= `
      <div class="product">
        <img src="${arrayOfProductsDetails[x].productImg}">
                  
        <div class="details">
      
          <p class="name">${arrayOfProductsDetails[x].productTitle}</p>
      
          <span class="price">Price: <span class="value">${arrayOfProductsDetails[x].productPrice}</span></span>
      
        </div>
      
      </div>`;
    orderSummary.innerHTML += product;
  }
  
  totalElement.innerHTML= "$" + arrayOfAnotherData[0].subtotal;
}