const inventory = {
     products: [
          { id: 1, name: "Laptop", price: 55000, stock: 12 },
          { id: 2, name: "Mouse", price: 799, stock: 50 },
          { id: 3, name: "Keyboard", price: 1999, stock: 30 },
          { id: 4, name: "Monitor", price: 12000, stock: 20 },
          { id: 5, name: "USB Cable", price: 299, stock: 100 }
     ]
};


inventory.products.push({ id: 6, name: "Headphones", price: 2499, stock: 40 });
console.log(inventory);



inventory.products[2].stock = 45;
console.log(inventory);



const totalValue = inventory.products.reduce((acc, item) => {
     return acc + item.price * item.stock;
}, 0);
console.log(totalValue);



inventory.products = inventory.products.filter(p => p.id !== 3);
console.log(inventory);



const laptop = inventory.products.find(p => p.name === "Laptop");
console.log(laptop);



inventory.products.forEach((value) => {
     value.price = (value.price) + (value.price * 0.10);
});
console.log(inventory);