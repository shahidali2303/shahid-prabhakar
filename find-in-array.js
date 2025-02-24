const num = [1, 2, 3, 1, 4];

// finding elements
console.log(num.indexOf(1)); // 0
console.log(num.indexOf(1, 2)); // 3
console.log(num.lastIndexOf(1, 1)); // 0
console.log(num.indexOf(5)); // -1
console.log(num.includes(2)); // true

// search operation in reference type data structure

const courses = [
  {
    id: 1,
    name: "course1",
  },
  {
    id: 2,
    name: "course2",
  },
];

const findCourse = courses.find(function (key) {
  return key.id === 2;
});
console.log(findCourse); // return the full object if available

// finding the wrong element
const wrongElement = courses.find(function (key) {
  return key.id === 6;
});
console.log(wrongElement); // return undefined
