let num = [1, 2, 3, 4];
let another = num;

//solution 1
// num = [];
console.log(another);

// solution 2
// num.length = 0;

// solution 3
// num.splice(0, num.length);

// solution 4
while (num.length > 0) {
  num.pop();
}

console.log(num);
