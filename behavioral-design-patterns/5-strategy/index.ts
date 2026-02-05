import { ShoppingCart } from "./shopping-cart";
import { PaypalStrategy } from "./paypal-strategy";
import { CreditCardStrategy } from "./credit-card-strategy";

const cart = new ShoppingCart(new PaypalStrategy());
cart.addToCart(100);
cart.addToCart(50);
cart.checkout();

cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(100);
cart.checkout();