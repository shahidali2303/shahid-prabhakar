// variable

var firstName = "Shahid";
console.log(typeof firstName);

//After ES6

// variable decleration
// 1. let

let num = 10;
// 2. const
const hello = "goodmorning";

// difference between let and const

let interestRate = 8;
interestRate = 10;

console.log(interestRate);

// Data Types

// 1. Primitive
let name = "Shahid"; //string;
let Number = 10; //Number;
let loggedIn = true; //boolean;
let fistname; //undefined;
let color = null; // null

// 2. Reference
Object;
Function;
Array;

// object -> collection of related data or functionality.
// objects are key value pairs
let username = "Prabhakar";
let age = 30;
let country = "USA";
console.log(username);

let person = {
  name: "Shahid",
  age: 30,
  country: "USA",
};

// 2 ways to access an object
// dot operator
console.log(person.age);

person.name = "John";
// bracket operator
person["age"] = "Mikes";
console.log(person.name);

// Arrays= data structure used to store a list of items .
let colors = ["red", "blue", "pink"];
console.log(colors[0]);
colors[0] = "black";
console.log(colors[0]);

// function
function greet() {
  let sum = 10;
  console.log("Good morning");
  return sum; // 10
}

console.log(greet());
