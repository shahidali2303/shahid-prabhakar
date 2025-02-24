// several types of operators
// Arithmetic operators
let x = 10;
let y = 5;

console.log(x + y); //15
console.log(x - y); //5
console.log(x * y); //50
console.log(x / y); //2
console.log(x % y); //0
console.log(x ** y); //100000

// post increment

console.log(x);
console.log(y++); // 5

// pre increment
console.log(++y); //7
console.log(y); // 7

// Assignment operators
let name = "Prabhakar"; // string
let a = 1;

a = a + 1; // 2

a += 1; // 3 = shorthand way
console.log(a);

// Comparison operators = true or false
let sum = 1;

console.log(sum > 1); // false
console.log(sum >= 1); // true
console.log(sum < 1); // false
console.log(sum <= 1); // true

// equality operator

// strictly equal operators ===
// checks typeof and value both
console.log(sum === "1"); // false
console.log(sum !== "1"); // true
// loosely equal operator ==
// checks only value not the type
console.log(sum == "1"); // true
console.log(sum != "1"); // fasle
console.log(sum !== 1); // false

// Logical operators = either true or false
// Logical AND = &&
console.log(true && true); // both should be true = true
console.log(true && false); // both should be true = false
// logical OR = ||
console.log(false || true); // either any operand is true = true

// Bitwise operators
// Conditional / Ternary operators

true && false ? "if true" : "if false";

let points = 110;

let type = points > 100 ? "gold membership" : "silver membership";
console.log(type);
