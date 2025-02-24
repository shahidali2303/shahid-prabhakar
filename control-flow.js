// if else
//switch case
// for loop
// while loop
// do while loop
// ininite loops
// for in loop
// for of loop
// break & continue

// 1. If... else

let hour = 10;

if (hour >= 6 && hour < 10) {
  console.log("Good Morning!");
} else if (hour >= 5 && hour < 18) {
  console.log("Good Aternoon");
} else {
  console.log("Good Evening!");
}

// 2. Switch Case

let role = "moderator";

switch (role) {
  case "moderator":
    console.log("Moderator User");
    break;
  case "admin":
    console.log("Admin User");
    break;

  default:
    console.log("Guest User");
}

// loops => to repeat something
// 3. while loop
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop

let y = 1;
do {
  if (y % 2 === 0) {
    console.log(y);
  }
  y++;
} while (y <= 5);

// for loop
// for (initialization; condition; increment / decrement) {
//   // statements
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// program to print only odd numbers between 1 to 10
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
let colors = ["red", "blue", "pink"];
// After ES6
// for... in loop => iterate over objects
// for(varible in object){

// }
let person = {
  name: "Prabhakar",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

// iterate over array by for in loop
for (let index in colors) {
  console.log(index, colors[index]);
}

// for...of loop => iterate over arrays
// for(variable of array){

// }

for (let index of colors) {
  console.log(index);
}
