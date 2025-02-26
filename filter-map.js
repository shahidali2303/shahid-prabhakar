const num = [1, 2, -1, 4];

// filter => need only required values and remove not necessary values

const filtered = num.filter(function (number) {
  return number > 0;
});
console.log(filtered); // [1,2,4]

// map
const items = filtered.map(function (n) {
  return `<li>${n}</li>`;
});

console.log(items);
