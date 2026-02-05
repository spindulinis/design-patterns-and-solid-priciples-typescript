import { PremiumCustomer } from "./premium-customer";
import { Discount } from "./discount";
import { RegularCustomer } from "./regular-customer";

const discount: Discount = new Discount();

const premiumCustomer: PremiumCustomer = new PremiumCustomer();
const premiumCustomerDiscount = discount.giveDiscount(premiumCustomer);
console.log(`Premium customer discount: ${premiumCustomerDiscount}%`);

const regularCustomer: RegularCustomer = new RegularCustomer();
const regularCustomerDiscount = discount.giveDiscount(regularCustomer);
console.log(`Regular customer discount: ${regularCustomerDiscount}%`);