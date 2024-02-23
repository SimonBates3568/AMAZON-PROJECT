//MAIN IDEA OF JAVASCRIPT
//1) SAVE THE DATA
//2) GENERATE THE HTML
//3) MAKE IT INTERACTIVE


//USE THE INSPECT TO FIND THE CODE FOR THE PRODUCT YOU WANT
//USE CMD F IN THE HTML TO FIND DATA FOR PRODUCTS
//JS TO SAVE THE DATA FROM THE AMAZON PAGE USING AN OBJECT(CALCUATE IN CENTS NOT DOLLARS JAVASCRIPT HAS PROBLEMS WITH IT)



//PRODUCT DATA STRUCTURE LINK THAT ADDS ALL THE PRODUCT INFORMATION IS IN THE HTML
//DATA STRUCTURE USING ARRAY 0F OBJECTS OF ALL THE PRODUCT INFO FROM THE PAGE
/* const products = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: ' Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      stars: 4.5, 
      count: 87  
    },
    priceCents: 1090
}, {

    image: 'images/products/intermediate-composite-basketball.jpg',
    name: ' Intermediate Size Basketball',
    rating: {
      stars: 4, 
      count: 127  
}, 
priceCents: 2095
}, {

    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5, 
      count: 56  
}, 
priceCents: 799
}, {
image: 'images/products/black-2-slot-toaster.jpg',
name: '2 slot Toaster - Black',
rating: {
stars: 5,
count: 2197
},
priceCents: 1899
}]; */
//ADD MORE DATA TO THE ARRAY ABOVE TO GENERATE NEW PRODUCTDATA COLUMNS ON THE PAGE



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOCATE AND IMPORTS THE VARIABLE CART  
import {cart} from '../data/cart.js';



//2) GENERATE THE HTML
//COMBINES ALL THE HTML IN TO ONE STRING
let productsHTML = '';


//.FOREACH() METHOD FUNCTION TO LOOP THROUGH EACH PRODUCT IN THE ARRAY OF DATA
//INTERPOLATE THE INFORMATION USING ${} FOR EACH PRODUCT CREATING THE 3 DATA OBJECTS IN THE ARRAY
//BELOW REPRESENTS 3 DIFFERENT PRODUCTS
products.forEach((product) => {

//BELOW ADDS EACH STRING TOGETHER
productsHTML += `

        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;

});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3) MAKES IT INTERACTIVE
//DOM, PUTS THE GENERATED HTML INFO INTO THE GRID
document.querySelector('.js-products-grid').innerHTML = productsHTML;


//ADD EVENT LISTENER TO THE BUTTON ADD TO CART
document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
button.addEventListener('click', () => {

//GETS THE PRODUCTS NAME
const productId = button.dataset.productId;



let matchingItem;

//CHECKS IF THE PRODUCT IS ALREADY IN THE CART
cart.forEach((item) => {
if (productId === item.productId) {
matchingItem = item;
}
});

//IF IT IS IN THE CART INCREASE THE QUANITY
if (matchingItem) {
    matchingItem.quanity += 1;
}
//IF ITS NOT IN THE CART ADD IT TO THE CART
 else {
    // ADDS PRODUCT TO THE CART
    cart.push({
        productId: productId,
        quanity: 1
        });
}

//CALCUATE CART QUANTITY
let cartQuantity = 0;


cart.forEach((item) => {
    cartQuantity += item.quanity;
});



//PUT THE QUANITY ON THE PAGE
document.querySelector('.js-cart-quantity')
.innerHTML = cartQuantity;

});

});












