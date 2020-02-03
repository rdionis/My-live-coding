//functions inside functions
function main(num, num2) {
  //outer function
  function second(n) {
    // inner function // 9, 16
    return n * n;
  }
  return second(num) + second(num2); // this is my function call for my inner function,
  //so this function call must live inside the outer function
}
console.log(main(3, 4));

//Nested scopes: accessing outer global variables
var nice = true; //variable declaration outside of the function scope
const outerFunction = (x, y) => {
  let big = true; // big is a global variable inside the outerFunction scope (which is a local scope) but a local variable for the whole scope of the code
  console.log(big + "outerFunction");
  const innerFunction = num => {
    big = false;
    nice = false;
    console.log(big + "innerFunction");
    return num + 10;
  };
  return innerFunction(x) /*3*/ + innerFunction(y); /*4*/
};
console.log(nice); //it's before the function call, so it doesn't recognize the function
console.log(outerFunction(3, 4)); //it's after the function call, so it recognizes the function
console.log(nice);

//Closure -- a way to secure a variable
var number = 10;
function fun() {
  return number + number;
}
console.log(fun());
console.log(number);

//var counter = 0; -- I move it to the inside of the function to secure it

//function call == invoking
const add = (() => {
  //self-invoking function const add = (()=>{})() ---> self-invoked function
  let counter = 0;
  //counter += 1; // you could also use counter++

  //anonymous function

  return function() {
    //return () => {}
    counter++;
    return counter;
  };
})();

add(); // 1
add(); // 2
add(); // 3
//counter = 0; -- you could still alter the variable when it was global
//console.log(counter);
console.log(add());
console.log(add());
console.log(add());
console.log(add());

(function() {
  // SIAF --- self-invoking anonymous function, because you call it right away and it is not available anywhere outside the scope,
  //so you don't need to give it a name, hence the anonymous
  let x = 0;
  console.log("Hi");
  //display();
  return () => {
    // this is a callback, but in this context we call it closure, because of the whole being closed in itself thing
    x++;
    return x;
  };
})(); // I am closing the function to itself, so I need the function call immediately after the function declaration --
//it won't be available on a global scope anymore
//() is the function call

//self-invoking anonymous functions: they are closed in themselves and have the function call right after the function

//IIFE -- Immediately-invoked Function Expression
//two ways + passing parameter
const sum = ((x, y) => {
  return x + y;
})(4, 5); // this is the function call
console.log(sum); //sum is not a function anymore, it's a variable with a value

// ----------

//loops - strings && arrays && repeat something many times && printing many times
for (let i = 0; i <= 10; i++) {
  let result = i * 3;
  console.log(`${i}*3 = ${result}`);
}

//if ... else
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("Nooooo");
}

// array = one variable for multiple values
const arr = [3, 5, 67, 6];
console.log(arr);
console.log(arr[2]);

//EXERCISES
//Write a function add that uses a closure that performs addition on arguments in two separate function calls.
function add2(a) {
  return function(b) {
    // this is an anonymous function
    return a + b;
  };
}
console.log(add2(2)(3)); // these are two functions calls

const add3 = a => {
  //in ES6 now
  return b => {
    // this is an anonymous function
    return a + b;
  };
};
console.log(add3(2)(3)); // these are two functions calls

// Write a function multiplier that uses a closure to perform multiplication.
// However, the outer function should be stored in a variable which is then called.

function multiplier(num1) {
  return function(num2) {
    //inner function
    return num2 * num1; //return num2 => num2 * num1
  };
}
const times = multiplier(2); // or const times = multiplier(2) -- call for the outer function (5) --- call for the inner function; console.log(times);// or
//the outer function should be stored in a variable
console.log(times(5));

var all = 3;

(function() {
  var all = "Hi";
  console.log(all);
})();
console.log(all);

// Write a function that accepts several parameters and calculates the number of money that will
//have been saved as pension until a person retires.
//The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’ should be printed.
// If not, then the program should calculate how many years remain until the person retires,
// the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it.
//How much money will she have saved until she retires?
// Output: $30000

// const pension =
((curAge, retAge, monWage, monSav) => {
  let yearToRet = retAge - curAge;
  monSavEur = (monWage * monSav) / 100;
  let totalSav = monSavEur * 12 * yearToRet;
  if (yearToRet > 0) {
    console.log(
      `Hello, Isabel, you are ${curAge}, you earn ${monWage} €/month, you save ${monSav}% of your income per month (${monSavEur} Euros) and you can retire in ${yearToRet} years, when you are ${retAge}. Your savings upon retirement will amount to ${totalSav}.`
    );
  } else {
    console.log(`Hello, Isabel, you’re already retired!`);
  }
})(60, 65, 5000, 10);
// console.log(pension);

//Hadi's Solution

((currentAge, retirementAge, monthlyWage, per) => {
  //anonymous function
  if (currentAge >= retirementAge) {
    console.log(`You are already retired.`);
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log(`${yearsToSave} years to go`);
    let monthsToSave = yearsToSave * 12;
    console.log(`${monthsToSave} months to go`);
    let amountSavedByMonth = (monthlyWage * per) / 100;
    let totalSaved = amountSavedByMonth * monthsToSave;
    console.log(
      `You will get very old in ${yearsToSave} years, and you will have ${totalSaved} Euros in your bank account.`
    );
  }
})(30, 65, 1000, 5);

//pre-build functions from JavaScript

//trim() --- removes empty spaces in the beginning and end
let str = " Hi ";
console.log(str.trim());
//trimEnd  --- removes empty spaces in the end
console.log(str.trimEnd());
//trimStart  --- removes empty spaces in the beginning
console.log(str.trimStart());

//startsWith ()
let text = "Hi we will have fun now.";

console.log(text.startsWith("Hi"));
console.log(text.startsWith("we"));

//endsWith ()
console.log(text.endsWith("we", 5));
console.log(text.endsWith("we"));

//charCodeAt()
let chr = "A"; // UTF - 16 (older versions UTF-8 and ASCII before that --- now, we are working with UTF-32)
let chr1 = "c";
console.log(chr.charCodeAt(0));
console.log(chr1.charCodeAt(0) - 96);

//codePointAt()
const icons = "☃★♲";

console.log(icons.codePointAt(1));
// expected output: "9733"

console.log("😅");

console.log(String.fromCharCode(189, 43, 190, 61));
console.log(String.fromCharCode(97, 65));
console.log(String.fromCharCode(0xd83c, 0xdf03));
console.log(String.fromCharCode(55356, 57091));

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// expected output: "The word "fox" is in the sentence"

const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(
  'The index of the first "' +
    searchTerm +
    '" from the beginning is ' +
    indexOfFirst
);
// expected output: "The index of the first "dog" from the beginning is 40"
