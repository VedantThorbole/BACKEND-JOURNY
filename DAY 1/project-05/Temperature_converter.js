// C to F

let Celsius = 36;

function to_fahrenheit(Celsius) {
     const fahrenheit = (Celsius * (9 / 5) + 32);
     return `Your current ${Celsius} is ${fahrenheit}F`
}

console.log(to_fahrenheit(Celsius));