// Discount Amount = Original Price × (Discount % / 100)

let originalPrice = 100000;
const discount = 10;

function Discount_calculater(originalPrice, discount) {
     const Your_DSprice = originalPrice * (discount / 100)
     return `Your discount price is ${Your_DSprice}`
}

console.log(Discount_calculater(originalPrice, discount))