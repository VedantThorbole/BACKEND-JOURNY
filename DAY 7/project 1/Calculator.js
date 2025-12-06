function add(x, y) {
     return x + y;
}
function sub(x, y) {
     return x - y;
}
function mul(x, y) {
     return x * y;
}
function div(x, y) {
     return x / y;
}
function mod(x, y) {
     return x % y;
}


function calculator(arg, a, b) {
     return arg(a, b);
}

console.log(calculator(add, 5, 5));
console.log(calculator(sub, 5, 5));
console.log(calculator(mul, 5, 5));
console.log(calculator(div, 5, 5));
console.log(calculator(mod, 5, 5));