const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// end
console.log(numbers.pop());

// begining
numbers.shift();

// anywhere
//[2, 3, 4, 5, 6, 7, 8]
numbers.splice(1, 2);

console.log(numbers);
