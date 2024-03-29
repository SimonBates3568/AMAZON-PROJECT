//CONTAINS THE VARIABLE IN THE FILE AND YOU CAN EXPORT
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quanity: 2,
    deliveryOptionId: '1'
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quanity: 1,
    deliveryOptionId: '2'
}];
}

//LOCAL STORAGE
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

//CLICK ADD TO CART BUTTON
//EXPORT FUNCTION
export function addToCart(productId) {
    let matchingItem;
  
    //CHECKS IF THE PRODUCT IS ALREADY IN THE CART
    cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
    matchingItem = cartItem;
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
            quanity: 1,
            deliveryOptionId: '1'
            });
    }
  }

saveToStorage();

//FUNCTION FOR REMOVING PRODUCT FROM THE CART
export function removeFromCart(productId){
const newCart = [];


cart.forEach((cartItem) => {
if (cartItem.productId !== productId){
newCart.push(cartItem);
}
});

cart = newCart;


saveToStorage();




};








