const numbers = [3, 4];

// end
console.log(numbers.push(5, 6)); // [3,4,5,6]

// beginning
numbers.unshift(1, 2); // [1,2,3,4,5,6]

//anywhere
numbers.splice(2, 0, "a", "b");

console.log(numbers);
