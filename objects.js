// object are containers for properties and methods

// this keyword => always reference to the current object

const person = {
  firstName: "Shahid", //1
  lastName: "Ali", //2
  age: 30, //3
  fullname: function () {
    //-<4 ->1
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullname());

//primitive-> immutable they are hardcoded and cannot be changed
// object ->  reference type

//they are addressed by their reference
const person1 = {
  firstName: "Shahid",
  lastName: "Ali",
  age: 30,
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

const x = person1; //
x.age = 10;
console.log(x);
console.log(person1);

// primitive type
let a = 10;
let b = a; // b=10  a=10
b = 12;
console.log(b); // 12
console.log(a); // 10

const person2 = {
  firstName: "Shahid", // string
  lastName: "Ali",
  age: 30,
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
  cars: {
    car1: "x",
    car2: "y",
    car3: "z",
    car4: {
      name: "BMW",
    },
  },
};
console.log(person2.age);
console.log(person2);

const cars = person2.cars;
console.log(cars);
