// find all numbers in between the range

const range = arrayFromNumbers(-10, 5);
console.log(range);

function arrayFromNumbers(min, max) {
  // code here
  // we need loops
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

// search element in array that works same as include() methods.
// Supply an array and the searched element

const numbers = [1, 2, 3, 4];

function checkNum(array, searchedElement) {
  //
  for (let key of array) {
    if (key === searchedElement) {
      return true;
    }
  }
  return false;
}

const result = checkNum(numbers, 5); // true
console.log(result);

// we have 2 arrays , first array which we pass and second array is the array
// which we want to exclude from the first array

const first = [1, 2, 3, 4, 5];

const ot = except(first, [1, 2]);
console.log(ot);

function except(arr, excluded) {
  const output = [];
  for (let element of arr) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}
//

const movies = [
  {
    title: "a",
    year: 2018,
    rating: 4.7,
  },
  {
    title: "b",
    year: 2018,
    rating: 4.5,
  },
  {
    title: "c",
    year: 2018,
    rating: 3,
  },
  {
    title: "d",
    year: 2017,
    rating: 4.5,
  },
];

// give me the output according to the conditions
// 1 -> all movies in 2018 with rating > 4
// 2 -> sort them by rating
// 3 -> descending order
// 4 -> pick the title

const title = movies
  .filter((m) => m.year === 2018 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => {
    return m.title;
  });

console.log(title);
