//++++++++++++++++++++++++++++++++++++++++++++++++++This is array literals++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// const fish = ["Lion", , "Angel"];
// const myList = ["home", "school",];//this will igonore last comma


// console.log(fish)
// console.log(myList)


//++++++++++++++++++++++++++++++++++++++++++++++++++this is object literals++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const sales = "Toyota";

// function carTypes(name) {
//      return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
// }

// const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

// console.log(car.myCar); // Saturn
// console.log(car.getCar); // Honda
// console.log(car.special); // Toyota

// const myCar = { myCar: "honda", getcar: { a: "lambo", b: "porsche" }, special: "rolls royce" }

// console.log(myCar);
// console.log(myCar.mycar)
// console.log(myCar.getcar)
// console.log(myCar.getcar.a)
// console.log(myCar.getcar.c)//undifined
// console.log(myCar.myCar)//it does not give error


// const unusualPropertyNames = {
//      "": "An empty string",
//      "!": "Bang!",
// };
// // console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
// // console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

// console.log(unusualPropertyNames[""]);
// console.log(unusualPropertyNames["!"]);