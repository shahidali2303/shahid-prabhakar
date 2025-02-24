const first = [1, 2, 3];
const Second = [4, 5, 6];

// concatination
const combine = first.concat(Second); // not in place
console.log(combine);

// spread operator
const join = [...first, ...Second]; // not in place
console.log(join);

// combine = [1,2,3,4,5,6]
const split = combine.slice(2, 4);
console.log(split);

// better way
first.push.apply(first, Second); // in place
console.log(first);
