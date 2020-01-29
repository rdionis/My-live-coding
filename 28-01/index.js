// DONE
//Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
console.log("INCLUDES JAVASCRIPT EXERCISE");

function javaScript(string) {
  if (string.includes("JavaScript")) {
    return "I know it's crazy 😉";
  } else {
    return "This is not a valid answer";
  }
}
console.log(javaScript("This is some JavaScript code"));
console.log(javaScript("I don't know what I'm doing"));

// DONE
// Create a function that calculates the user age e.g. 2000 -> 20.
console.log("AGE EXERCISE");
function age(birthYear) {
  let currentYear = new Date().getFullYear();
  let userAge = currentYear - birthYear;
  return birthYear < currentYear && birthYear > 1900;
}

console.log(age(1981));
console.log(age(1911));
console.log(age(1952));
console.log(age(1954));
console.log(age(1926));

//DONE
//Create a function that accepts a text from user and check if the user has entered a month name,
//if so print out that month and in which season it is.
console.log("MONTH NAMES EXERCISE");

const monthName = userMonth => {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "August",
    "september",
    "october",
    "november",
    "december"
  ];
  //let userTextLower = userMonth.toLowerCase();
  let arrUserTextLower = userMonth.toLowerCase().split(" ");
  let result = "";
  let counter = 0;
  let arrWinter = ["december", "january", "february"];
  let arrSpring = ["march", "april", "may"];
  let arrSummer = ["june", "july", "august"];
  let arrAutumm = ["september", "october", "november"];
  for (let i = 0; i < arrUserTextLower.length; i++) {
    if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrAutumm.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower[i] + " Autumm";
    } else if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrWinter.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower[i] + " Winter";
    } else if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrSpring.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower[i] + " Spring";
    } else if (
      monthNames.includes(arrUserTextLower[i]) &&
      arrSummer.includes(arrUserTextLower[i])
    ) {
      result = arrUserTextLower + " Summer";
    } else {
      result = "This is not a valid value";
    }
  }
  return result;
};
console.log(monthName("This is a month name."));
console.log(monthName("January"));
console.log(monthName("January ksdfkah asfjlakhfa"));

//DONE
// Create a function that takes a string and a word, and then returns true or false
//depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true
console.log("DICTIONARY EXERCISE");

const dictionary = (str, word) => {
  let wordFirstChr = word.substring(0, str.length);
  if (wordFirstChr == str) {
    return true;
  } else {
    return false;
  }
};
console.log(dictionary("raqu", "raquel"));
console.log(dictionary("raqu", "gabriela"));

//DONE
// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
console.log("TWO FOR ME EXERCISE");

//Old Syntax
/*function twofer(who = "you") {
  return `Two for me and one for ${who}.`;
}*/

const twofer = (who = "you") => {
  return `Two for me and one for ${who}.`;
};

console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"

//DONE MAS NAO PERCEBI
//Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it.
//The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4).
//If you call it with just 2, it should return 4 (2 to the power of 2).

console.log("POWER EXERCISE");

const exponent = (num, exp = 2) => {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9,
console.log(exponent(8));

// Create a function will calculate a student degrees for 6 subjects,
// if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)
console.log("AVERAGE EXERCISE");

// const averageSixSubjects = (acc, cur) => acc + cur;

// let sum = arrDegrees.reduce(averageSixSubjects, 0);
// let average = sum / arrDegrees.length;
// console.log(averageSixSubjects(15, 80, 90, 56, 25, 35));

// const numArr = [1, 3, 4, 6, 7]; //if I want to create a function, it must be with const
// const reducer = (acc, cur) => acc + cur; // accumulator is my box, the current value is the value of every item
// //acc = 0 cur = 1
// console.log(numArr.reduce(reducer, 100));

// DONE
//Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".
console.log("GREETING EXERCISE");

function greeting(name, age, address, ...activities) {
  result = `Hello, ${name}, ${age} years old, residing in ${address}, I am so glad you enjoy ${activities[0]} and ${activities[1]}. `;
  if (activities.includes("dance") || activities.includes("party")) {
    result += "You are cool."; // keeps the result and adds "You are cool."
  }
  return result;
}

console.log(greeting("Raquel", "19", "Alfragide", "dance", "party"));

// DONE
// Count Occurrences.
//Create a function that accepts two arguments: a string and a letter.
//The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3
console.log("COUNT OCCURRENCES EXERCISE");

function countOccurrences(string, letter) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurrences("yyyyyy", "y"));
console.log(countOccurrences("Hi, I am Raquel", "p"));

//DONE
//Create a function which calculates how old a dog is in doggie years.
//The function should accept one argument that is the puppy’s age in human years.
//Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

console.log("DOG YEARS EXERCISE");

function dogAge(dogHumanYears) {
  let dogYears = dogHumanYears * 7;
  return `Your dog is ${dogYears} years old in dog years!`;
}
console.log(dogAge(5));

// DONE
// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favourite snack.
//The function should accept two arguments: age and amount per day.
//The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
//Bonus Accept floating point values for amount per day and round the result.
// i.e.
// calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”
// (edited)
console.log("LIFETIME SNACK EXERCISE");

function lifetimeSupply(age, snackAmountPerDay) {
  const maxAge = 80;
  let yearsLeft = maxAge - age;
  snackPerYear = snackAmountPerDay * 365;
  snackSupply = snackPerYear * yearsLeft;
  return `You will need ${snackSupply} bars of chocolate (${snackAmountPerDay} a day) to last you til the age of ${maxAge}.`;
}
console.log(lifetimeSupply(25, 5));

// DONE
// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true

console.log("PIE EXERCISE");

function equalSlices(totalSlices, numberRecipients, slicesPerPerson) {
  if (numberRecipients * slicesPerPerson <= totalSlices) {
    return true;
  } else {
    return false;
  }
}

console.log(equalSlices(15, 5, 3));
console.log(equalSlices(14, 8, 2));

//DONE
// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false

console.log("XOXO EXERCISE");

function xo(string) {
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] == "x") {
      counterX++;
    } else if (string[i] == "o") {
      counterO++;
    }
  }
  if (counterX == counterO || counterO == 0 || counterX == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("xo");
console.log(xo("iiiiiiiiiiiiii"));
console.log(xo("oxoxoxox"));
console.log(xo("xxooo"));

//DONE
// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

console.log("VALID EMAIL EXERCISE");

function validEMail(eMail) {
  let lastTwoChr = eMail.substring(eMail.length - 2);
  let lastThreeChr = eMail.substring(eMail.length - 3);
  if (
    eMail.includes("@") &&
    eMail.includes(".") &&
    eMail[0] !== "@" &&
    eMail[0] !== "." &&
    (lastThreeChr[0] !== "." || lastTwoChr[0] !== "@")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log("Valid Email");
console.log(validEMail("dionisio@gmailcom"));
console.log(validEMail("dionisio@gmail.com"));
