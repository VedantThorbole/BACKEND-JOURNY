const cart = [
     { item: "Laptop", price: 55000, quantity: 1 },
     { item: "Mouse", price: 799, quantity: 2 },
     { item: "Keyboard", price: 1999, quantity: 1 },
     { item: "Headphones", price: 2499, quantity: 1 },
     { item: "USB Cable", price: 299, quantity: 3 }
];

const total = cart.reduce((accumulator, currentValue) => { return (currentValue.price * currentValue.quantity) + accumulator }, 0);

console.log(total);