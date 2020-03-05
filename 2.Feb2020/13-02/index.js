// 3 types of errors (compilation, runtime, logic)

// `try { ... } catch (e) { ... }`

// error

//
// Javascript is a scripting language that speaks to the engine that speaks to the hardware ---> it doesn't speak directly to the hardware -
// it is NOT a programming language (so you shouldn't say "I am programming with Javascript" but "I am writing a program using JavaScript")

//typo error

//logical error ---> when you want to print something but print something else

let userAge = 25;
if (userAge == 25) {
  // if the user age is 25, print "Happy Days" and it's actually printing something else
  console.log("something else");
}

//runtime error
// when JavaScript finds an error after running ---- to prevent this, we can use the "try" and "catch" keywords

let userName = "";

// try {
//   // it is a function
//   console.log("Hi, this is trying phase");
//   //   cool();
//   if (userName == "") throw "something went wrong"; // if I comment this out, it will print the next line
//   //if there was an error, this part will never run and it will jump to catch
//   console.log("2nd phase"); // will not read this, because it will find an error in the previous line
// } catch (err) {
//   console.log("This error is " + err);
// } finally {
//   //with finally, it will run anyway
//   console.log("this will always run");
// }
//I don't have this function, so it will return: This error isReferenceError: cool is not defined

// try will check a block of code
// catch will find the code and handel it
// throw will create a customized way of dealing with errors

//try ---> to test a block of code
//catch ---> to handle the error
//throw ---> to create custom errors

//how to call a function multiple times
function display() {
  console.log("Hi, this is a cool function");
}

//put the function inside a loop
console.log(" ");
console.log("PUT THE FUNCTION INSIDE A LOOP");
for (let i = 0; i < 8; i++) {
  //it will call the function 8 times
  display();
}
console.log(" ");
console.log("SELF INVOKED FUNCTION");
(function manyTimeCalledFunction(num) {
  display();
  if (num > 1) manyTimeCalledFunction(num - 1);
})(8);

const timerPrint = setTimeout(
  // setTimeout is a function from JavaScript
  () => console.log("Hi, I am JS after 10 sec"),
  10000
);

function print() {
  console.log("Hi, I am JS after 5 s");
}
const timerPrint1 = setTimeout(print, 5000);

const timerDisplay = setTimeout(
  () => console.log("Cool that you have waited"),
  3000
);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);
var myStr1 = "This is the start. " + "This is the end.";
console.log(myStr1);

var someAdjective = "fun.";
var myStr2 = "Learning to code is ";
myStr2 += someAdjective;
console.log(myStr2);

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 2];
console.log(firstName.length);

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfFirstName);
console.log(lastLetterOfLastName);

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
console.log(testStrict(7));

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(caseInSwitch(3));
console.log(caseInSwitch(2));
console.log(caseInSwitch(1));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun(); // this just prints "Hello" to the console
console.log(myFun()); // this prints "Hello" and "World" to the console

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(2, 2));

console.log(" ");
console.log("BLACKJACK");

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
    // Only change code above this line
  }
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("charlie"));

// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(2548, "artist", ""));

// Setup

var ourArray = [];
var i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray); // [ 0, 1, 2, 3, 4 ]

var myArray = [];

// Only change code below this line.
var i = 5;
while (i > 0) {
  myArray.push(i);
  i--;
}

console.log(myArray); // returns [ 5, 4, 3, 2, 1 ]
