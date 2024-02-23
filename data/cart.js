//CONTAINS THE VARIABLE IN THE FILE AND YOU CAN EXPORT
export const cart = [];


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
            quanity: 1
            });
    }
  }