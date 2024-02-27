//LOCATE AND IMPORTS THE VARIABLE CART AND ARRAY AND ADD TO CART
import {cart, removeFromCart} from '../data/cart.js';
//LOCATE AND IMPORTS THE VARIABLE PRODUCTS AND PRODUCTS ARRAY
import {products} from '../data/products.js';
//LOCATE AND IMPORT FORMAT CURRENCY FUNCTION
import { formatCurrency } from './utils/money.js';
//(ESM VERSION)CREATED A FUNCTION DAYJS EXTERNAL LIBRARY(CHECK THE DOCUMENTATION)(DEFAULT EXPORT)
import dayjs  from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
//IMPORTS DELIVERY OPTIONS
import {deliveryOptions} from '../data/delivery options.js';

//EXTERNAL LIBRARY
//DAYJS FUNCTION ADDS DAYS TO THE CURRENT DATE
const today = dayjs();
const deliveryDate = today.add(7, 'days');
//CONVERTS TO STRING(DAY,MONTH, DAY NUMBER)
console.log(deliveryDate.format('dddd, MMMM D'));

//2) GENERATE THE HTML
//COMBINES ALL THE HTML IN TO ONE STRING
let cartSummaryHTML = '';

//FOREACH() METHOD FUNCTION TO LOOP THROUGH EACH PRODUCT IN THE ARRAY OF DATA
//INTERPOLATE THE INFORMATION USING ${} FOR EACH PRODUCT CREATING THE 3 DATA OBJECTS IN THE ARRAY
cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId){
            matchingProduct = product;
        }
    });

    //BELOW ADDS EACH STRING TOGETHER
    cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <!-- Other HTML content omitted for brevity -->

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                <!-- Other delivery options HTML omitted for brevity -->
                ${deliveryOptionsHTML(matchingProduct)} <!-- Corrected function name -->
            </div>
        </div>
    </div>
    `;

    //FUNCTION TO ADD DAYS TO THE RADIO BUTTONS IN CHECKOUT
    function deliveryOptionsHTML(matchingProduct) {
        let html = '';

        deliveryOptions.forEach((deliveryOption) => {
            const today = dayjs();
            const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
            const dateString = deliveryDate.format('dddd, MMMM D');

            // TERNARY OPERATOR
            const priceString = deliveryOption.priceCents === 0
                ? 'FREE'
                : `$${formatCurrency(deliveryOption.priceCents)} -`;

            html += `
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString} Shipping
                    </div>
                </div>
            </div>`;
        });

        return html;
    }
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

//DELETE BUTTON
document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
    });
});
