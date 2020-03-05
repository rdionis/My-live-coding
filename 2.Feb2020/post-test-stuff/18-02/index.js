console.log("PIG LATIN TRANSLATION");
// Create a function that takes a string of words and moves the first letter of each word to the end of it,
// then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// a) Move the first letter of each word to the end of the word.
// b) Add “ay” to the end of the word.
// c) Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// 1:19
// Extra Practice
// Preserve proper capitalization as in the examples below.
// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

function pigLatin(userStr) {
  const userStrToArr = userStr.split(" "); // turns the string into an array
  const vowels = ["a", "e", "i", "o", "u"];
  const newArr = []; // creates an empty array
  userStrToArr.some(word =>
    vowels.some(vowel => {
      if (vowel === word[0]) {
        newArr.push(word + "ay");
      }
    })
  );
  return newArr;
}

console.log(pigLatin("I love eating"));
console.log(pigLatin("I love eating and arriving early to places."));

console.log("PIG LATIN 1");

function pigLatin1(userStr1) {
  const userStrToArr1 = userStr1.toLowerCase().split(" "); // turns the string into an array
  //   console.log(userStrToArr1);
  const vowels1 = ["a", "e", "i", "o", "u"];
  const newArr1 = []; // creates an empty array
  userStrToArr1.some(word =>
    vowels1.some(vowel => {
      if (word[0] === vowel) {
        newArr1.push(word + "ay");
      } else if (word[0] !== vowel) {
        newArr1.push(word);
      }
    })
  );
  return newArr1;
}
console.log(pigLatin1("i do an eager mood And I am"));

let arr1 = [1, 5, 6, 7, 5, 6, 5, 56, 11, 78, 9789, 8679, 7, 10];
let arr2 = [1, 5, 6, 7, 8, 5, 6, 7, 8, 10, 11, 78];
function compare() {
  const finalArray = [];

  arr1.forEach(e1 =>
    arr2.forEach(e2 => {
      if (e1 === e2) {
        finalArray.push(e1);
      }
    })
  );
  return finalArray;
}
console.log(compare());

function nestedLoop() {
  let arr = ["Aquel", "Marques", "Ionísio", "ghjklkjhhgg"];
  let vowels = ["a", "e", "i", "o", "u"];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i][0].toLowerCase())) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(nestedLoop());

//Conditional assignment with the ternary operator
// let kid = 2;
// console.log(kid > 16 ? "Party" : "Home");
// console.log(true ? "Hey, that's nice" : "Oh, nooooooooooo");
// console.log(false ? "Hey, that's nice" : "Oh, nooooooooooo");
// console.log(str[2].includes("a"));

console.log("PRINT EXPONENTIAL VALUES");
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
// For example if we have function(3, 5) The function should print 3 9 27 81 243.
//Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

console.log("GERMAN PHONE NUMBER");

// Create a function that receive a text from user
//and check if the user has entered a phone number, and print that out
// Note: phone number should be within the German network starts with (030,017)
//and has 7 digits after the prefix number
