// Compound object
const objects = [
  {
    name: "Ali",
    lastName: "see"
  },
  {
    name: "Olga",
    lastName: "xs",
    printOut: function() {
      console.log("Hi");
    }
  },
  {
    name: "Nancy",
    lastName: "Aii"
  }
];
// dot.
objects[1].printOut();
// 2nd way to call bracket []
objects[1]["printOut"]();
// Clones vs. References

// Primitive  (Simple values are always clones)
//String, number and boolean are primitive/simple values – when you copy them, it’s called cloning
//Compound values (object, array, function) – you cannot clone with the same method
// String, Number, Boolean
let str = "How are you";
let newStr = str; // cloning

str = "something else";
console.log(newStr);
console.log(str);
let num = 222;
let newNum = num;
console.log(newNum);
// Compound
// Object, Array, Function
const names = ["Ali", "Olga", "Nancy", "Zain"];
let newArr = names; //
console.log(newArr);
newArr[1] = "New";
console.log(names);
const car = {
  name: "Ford",
  year: "2020",
  color: "Red"
};

const newObject = car;
newObject.name = "BMW";
console.log(car.name);
// Objects are references by default: Array and object literals

// Shallow copy using ... (spread operator) - cloning
let namesArr = ["Ali", "Hadi"];
let newNamesArr = [...namesArr];
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);

// Shallow copy using .slice() - cloning
let newNames3 = namesArr.slice(0);
console.log(newNames3);

// Shallow copy using .assign() - cloning
const newObject2 = Object.assign(car);
const newObject3 = { ...car }; //you can also using the spread operator to shallow copy a simple compound object

//infinity function call - NEVER DO THIS - it creates a never ending loop
function one() {
  two();
}

function two() {
  one();
}

//  Recursion function
// a function that calls itself and stops calling itself
const factorial = function(num) {
  // this function is anonymous but I can name it or use an arrow function
  console.log(num);
  //return num * factorial(num - 1); // this is would be an infinity loop --- RangeError: Maximum call stack size exceeded - DON'T DO THIS
  if (num == 1) {
    // we use this condition to break the infinity loop
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(5));

function countdown(n) {
  if (n <= 0) {
    console.log(0);
  } else {
    //console.log(n);
    countdown(n - 1);
    console.log(n);
  }
}
countdown(5);

//deep copy using recursion
function deepCopy(obj) {
  if (typeof obj == "object") {
    return Object.keys(obj)
      .map(key => ({ [key]: deepCopy(obj[key]) }))
      .reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (typeof obj == "array") {
    return; //something --- this function needs something else to work with an array of objects
  }
  return obj;
}

const newObj = { 1: "Hi", 2: "How are you", fun: () => console.log("hi") };
const superNewObj = deepCopy(newObj); // ---

console.log(newObj);
console.log(superNewObj);

// console.table()
console.log("THIS IS WHAT HAPPENS WHEN YOU CONSOLE.LOG CONSOLE");
console.log(console);

console.table(newObj);

// Object.getOwnPropertyNames

// //EXERCISES

// objects-ex
// Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties.
// Assume min <= max is always true.
// Examples:
// (4, { min: 0, max: 5 }) ➞ true (4, { min: 4, max: 5 }) ➞ true (4, { min: 6, max: 10 }) ➞ false (5, { min: 5, max: 5 }) ➞ true
console.log("EX: CHECK NUMBER");

const checkNumber = (number, numberRange) => {
  for (let prop in numberRange) {
    if (numberRange.min <= number && numberRange.max >= number) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(checkNumber(5, { min: 0, max: 8 }));
console.log(checkNumber(10, { min: 0, max: 8 }));

console.log("HADI'S SOLUTION");

function fun(num, obj) {
  return num >= obj.min && num <= obj.max;
}
console.log(fun(4, { min: 0, max: 5 }));
console.log(checkNumber(10, { min: 0, max: 8 }));

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
//Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },
//{ tile: "A", score: 1 }, { tile: "E", score: 1 } ]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
console.log("EX: SCRABBLE");

const tiles = [
  { tile: "N", points: 1 },
  { tile: "K", points: 5 },
  { tile: "Z", points: 10 },
  { tile: "X", points: 8 },
  { tile: "D", points: 2 },
  { tile: "A", points: 1 },
  { tile: "E", points: 1 }
];

const maxScore = userTiles => {
  let counter = 0;
  for (let i = 0; i < userTiles.length; i++) {
    counter += userTiles[i].points;
  }
  return counter;
};
console.log(maxScore(tiles));

console.log("HADI'S SOLUTION");

let arrayScore = [
  { tile: "N", points: 1 },
  { tile: "K", points: 5 },
  { tile: "Z", points: 10 },
  { tile: "X", points: 8 },
  { tile: "D", points: 2 },
  { tile: "A", points: 1 },
  { tile: "E", points: 1 }
];
function score(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arrayScore[i].points;
  }
  return result;
}
console.log(score(arrayScore));

// Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// {} ➞ true {a: 1} ➞ false
console.log("EX: EMPTY OBJECT");

const emptyObj = obj => {
  if (Object.entries(obj).length == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(emptyObj({}));
console.log(emptyObj({ 1: 1, 2: 2, 3: 3 }));

console.log("HADI'S SOLUTION");

function isEmpty(obj) {
  return Object.keys(obj).length == 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ 1: 222 }));
// Free Shipping. Create a function that determines whether an online order should get free shipping.
//An order gets free shipping if the total cost of items exceeds €50.
// Examples:
// freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
// freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
//freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false
console.log("EX: FREE SHIPPING --- HADI'S SOLUTION");

function freeShipping(obj) {
  let values = Object.values(obj);
  let result = 0;
  for (let i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result > 50;
  //console.log (values)
}
console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ Sponge: 40, Soap: 12 }));

//5. Programming Object.

// const programming = { languages: ["JavaScript", "Python", "Ruby"], isChallenging: true, isRewarding: true, difficulty: 8,
//jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke" };
console.log("EX: PROGRAMMING --- HADI'S SOLUTION");

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");

// Change the difficulty to the value of 7.
programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)
delete programming.jokes;

// Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
programming["isFun"] = true; // alternative way that Hadi prefers when adding a new key

// Using a loop, iterate through the languages array and console.log all of the languages.
let array = programming.languages; // I am creating a reference here
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Using a loop, console.log all of the keys in the programming object.
let programmingKeys = Object.keys(programming);
for (let i = 0; i < programmingKeys.length; i++) {
  console.log(programmingKeys[i]);
}
for (let key in programming) {
  console.log(key);
}
// Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
  console.log(programming[key]);
}
// Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages:
//"JavaScript, Python, Ruby, Go" is rewarding and challenging.
programming.isTrue = function() {
  if (this.isChallenging && this.isRewarding) {
    return `Learning the programming languages: ${this.languages} is rewarding and challenging.`;
  } else {
    return `Sorry, something went wrong.`;
  }
};
console.log(programming.isTrue());
//Bonus:
//In a comment, explain what is printed if we console.log an object method without calling it and why.
//every method is a function, so it will just say it is a function

// Bonus:
// Make sure that any other code cannot delete or change properties of the object.(need Google)
Object.freeze(programming);
