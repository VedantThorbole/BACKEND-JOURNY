// Hoisting of var,let,const
// console.log(a); ReferenceError:  Cannot access 'a' before initialization
// console.log(c); ReferenceError: c is not defined
// console.log(v); ReferenceError: Cannot access 'v' before initialization
// console.log(b); undifined
let a = 4;

var b = 6;

/*const v;
v = 20000;
SyntaxError: Missing initializer in const declaration
*/
const v = 10000;
// v=1000 TypeError: Assignment to constant variable.

function add(x, y) {
     return x + y;
}

console.log("This is " + a);
console.log(a + " this is also");
console.log("7" + 7);
console.log(7 + "7");
console.log("7" + 7 + 7);
console.log(7 + 7 + "7");
console.log(7 + "7" + 7);

console.log("7" - 7);

console.log(7 + 7 - "4");
console.log("7" + 7 - 4);


Number("123") === 123;

console.log(add(a, b));