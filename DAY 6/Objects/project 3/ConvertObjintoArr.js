const product = {
     id: 101,
     name: "Laptop",
     brand: "Lenovo",
     price: 55000,
     inStock: true,
     specs: {
          ram: "16GB",
          storage: "512GB SSD",
          processor: "i5 12th Gen"
     }
};

empty = [];


for (const property in product) {
     empty.push([property, product[property]])
}

console.log(empty);