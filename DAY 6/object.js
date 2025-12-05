const specification = "color"
const anotherCar =
{
     car: "BMW",
     Type: "M4",
     color: "Black Tint",
}

const myCar = {
     make: "Ford",
     model: "Mustang",
     year: 1969,
};


console.log(myCar);
// console.log(myCar.make);
// console.log(Object.keys(myCar));
// console.log(Object.values(myCar));
// const key = Object.keys(myCar); // It returns the array of keys
// const value = Object.values(myCar); // It returns the array of values
const entrie = Object.entries(myCar);
// console.log(key);
// console.log(value);
// console.log(entrie);
// console.log(myCar["make"]); this is block type representation
myCar[specification] = 'black';// using this you can assign variable as key
// console.log(myCar);
// DreamCar = "DreamCar"
// console.log(anotherCar);
// myCar[DreamCar] = anotherCar;
console.log(myCar)

const marged = Object.assign({}, myCar, anotherCar);

console.log(marged);
// console.log(myCar);
// console.log(anotherCar);
const copy = { ...myCar };
console.log(copy);
// const { make, model, year, color } = myCar;
// console.log(myCar);
// console.log(make);


// This is important because browser cant understand objects we need to convert it into sting so stringify does this
// const str = JSON.stringify(myCar);
// console.log(str);
// const obj = JSON.parse(str); this convert string into object this is also imp
// console.log(obj);