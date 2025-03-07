const num = [1, 2, 3, 4, 5];
console.log(num);

// for loops
for (let numbers of num) {
  console.log(numbers);
}

// callbacks - more efficient than loops
// forEach()
const numbers = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 3,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
];
// loops
// for loop
// for in
// while

num.forEach(function (i, numbers) {
  console.log(i, numbers);
});
const username = ["shahid", "ali"];

// join() => array converted to string
const joined = username.join(",");
console.log(typeof joined);

// split() => string to array
const message = "I want to make a website";
console.log(message);
const parts = message.split(" "); // array
console.log(parts);

const combined = parts.join("-");
console.log(combined);
