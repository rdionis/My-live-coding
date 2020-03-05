function pigLatin(str) {
  let translation = [];
  const vowels = ["a", "e", "o", "i", "u"];
  //let lowerCase = str.toLowerCase();
  let splitStr = str.toLowerCase().split(" ");
  console.log(splitStr + "  THis is split arr");
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr = splitStr[i][0]; //b anana
    console.log(firstChr + " first chr"); //anana
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    console.log(remainder + " remainder");
    if (vowels.includes(firstChr)) {
      const firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
      translation.push(firstChrVal);
    } else {
      if (i == 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      const newString = remainder + firstChr + "ay";
      translation.push(newString);
      console.log(translation);
    }
  }
  let result = translation.join(" ");
  return result;
}
const strPig = "are are is";
console.log(pigLatin(strPig));

//EXERCISES
// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.

function multiply(x, y) {
  //old school
  console.log(x * y);
}
multiply(3, 4);

// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

const multiply2 = function(x, y) {
  console.log(x * y);
};
multiply2(4, 7);
// 3. Multiply - Arrow Function // ES6
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

/*const multiply3 = (x, y) => {
  // ES6
  // I replaced the function keyword with the arrow function after the parameter
  return x * y;
};
console.log(multiply3(4, 7));*/
const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 7));

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.

function rem(a, b) {
  // 1st way - old schcool
  console.log(a % b);
}
rem(4, 2);
rem(3, 5);

const rem1 = function(a, b) {
  console.log(a % b);
};
rem1(3, 5);

const rem2 = (a, b) => a % b;
rem2(7, 4);

// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

function printValue(d, e) {
  console.log(
    !isNaN(d, e) ? "This is a valid number." : "This is not a valid number."
  );
  if (typeof d == "number" && typeof e == "number") {
    console.log(true);
    let result = 1;
    let values = ""; // to put it in a string
    for (let i = 0; i < e; i++) {
      result *= d;
      values += `${result} `;
    }
    return values;
  } else {
    console.log(false);
  }
}

console.log(printValue(2, 10));

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value.
//Reassign the variable within the function and print “My favorite fruit is: x”.

let favoriteFruit = "banana";
function printFavoriteFruit() {
  favoriteFruit = "strawberry";
}
printFavoriteFruit();
console.log(`My favorite fruit is: ${favoriteFruit}.`);

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(starterNum, exponent) {
  let result = 0;
  let multi = starterNum * starterNum; //4
  for (let i = 0; i < exponent; i++) {
    result += multi; // 4 + 4 + 4 + 4
  }
  return result;
}
console.log(exponent(2, 4));

// Spread syntax ... => the three dots make a copy of the original variable

let array = [1, 3, 87, 6]; // 1st use of the Spread operator
let copyArray = [...array]; // will always be a copy of the original array
console.log(copyArray);

// 2nd use of the Spread operator
function sum(...args) {
  //spread operator, represented by ...
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return `The sum is ${result}.`;
}
console.log(sum(3, 4, 4, 4, 5, 6, 7, 7, 88, 98, 9));
console.log(sum(7, 88, 98, 9));
console.log(sum(2, 4));

//Create a function in howManyArgs return the total amount or arguments passed to it

const howManyArgs = (...args) => console.log(args.length);
howManyArgs(3, 4, 4, 4, 5, 7, 8, 6, "e");

//cool functions
// function add() {
//   console.log("Hi");
// }
// add();

(function add() {
  //self-invoking functions
  console.log("Hi");
})();
