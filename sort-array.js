// primitive type
// string , numbers , boolean
const numbers = [2, 4, 1, 3];
const sort = numbers.sort(); // [1,2,3,4]

console.log(numbers);
console.log(sort);

const reversed = numbers.reverse(); // [4,3,2,1]
console.log(sort);
console.log(reversed);
// reference type

const courses = [
  { id: 1, name: "javascript" },
  { id: 2, name: "HTML" },
  { id: 3, name: "CSS" },
];
console.log(courses);

courses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
