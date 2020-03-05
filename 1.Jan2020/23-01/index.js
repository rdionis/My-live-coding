var x = 0; //global variable | I can't declare it again as a local or global
let y = "3";
y = 3; // I can change y because I used let

const q = 12; // I am not able to change this variable after the semicolon

//I can't declare a variable with one of the preserved words from JavaScript
//not allowed to have special characters in my variable name

//increment

let a = 0;
a++;
a++;
a += 1; //this will add one to our variable every timeyou use it
// a = a+1 a+=1 (all do the same) / this increases my variable by one

let str = "Hi";
str += 1; //it will add "1" to "Hi" // result: Hi1
console.log(str);

let str1 = "Hi";
str1;

//decrement
a--; // a= a -1 a -=1 (all the same)

//function <name> (<parameters>) {...}
function sum(x, y) {
  // parameters are variables used only inside of the function - they are optional | it is possible to have a function without parameters
  let z = x + y; // I can declare a variable inside of a function, it will be a local variable
  return z; // return pushes what's inside the function scope to outside the scope | return shows me what's inside the function
} //local scope is everything
//the function is already running, it has already been called with return - we just use console.log to print it now
console.log(sum(2, 3)); //here, we're both printing the result and calling the function // you can't just console.log (z) because it is a local variable, it will not show outside of the function
sum(10, 3); // this is the function call

//variables in function
//local vs global
function fun() {
  const num = 10;
  const num2 = 20;
  return num + num2 + ` Hi, the sum is ${num + num2} \n I\'m \"`;
}
console.log(fun()); //this is the FUNCTION CALL - I can have a function with no parameters and no return, but I always need a function call and it has to be outside the function

//substring, substr, slice, splice, split = they all cut, but in slightly different ways
let string = "this is a long text";
console.log(string[0]);
console.log(string.substring(0, 4));

let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase(); // () will execute
console.log(newStr);
let newStr2 =
  string.substring(0, 2).toUpperCase() + string.substring(2).toLowerCase(); // () will execute
console.log(newStr2);

console.log(typeof newStr);
console.log(typeof newStr2);
console.log(typeof d);
console.log(typeof console);
console.log(typeof console.log); //it's an object - JavaScript is an object-oriented language
console.log(typeof fun);

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // array is an object for JavaScript

let blue = true;
console.log(blue ? "Nice, I like, that" : "No"); //the ? is a ternary operator
console.log(blue ? `Nice, I like ${x} ${arr}` : `Nooooo`);

//if

if (1 < 10) {
  arr.push(1);
} else if ((1 == 20 && 1 == 1) || 3 == 3) {
  // == the same value; === the same TYPE and VALUE | !== this means NOT EQUAL
  arr.unshift(1);
} else {
  arr.push(2);
  a++;
}
console.log(arr);

let color = "Pink";

switch (color) {
  case "Pink":
    arr.push(1);
    break; //this will get out of the switch
  case "Black":
    console.log("Hi");
    break;
  default:
    a++;
    console.log("This is not OK.");
}

//const <function name> =
const div = (x, y) => {
  // div is a global variable, it's in the global scope
  /*const you = num => {
    return num; // return pushes the value outside of the function in case I want to use it
  };
  you(2);*/
  return x / y;
};
div(3, 9);
console.log(div(3, 9));

const names = ["Ali", "Olga", "Nancy"];

//Array.includes() //it will give me either true or false

console.log(names.includes("Ali"));
console.log(names.includes("Raquel"));
console.log(names.indexOf("Ali"));
console.log(names.indexOf("Xe"));

//Removing items:
//Array.pop() // Removing the last item
//Array.shift() // Removing the first item

names.push("Zara"); // with push and unshift I need to mention the value
console.log(names);

names.unshift("XX");
console.log(names);

names.pop(); // with pop and shift, I don't need to mention the value
console.log(names);

names.shift();
console.log(names);

//Array.slice()

//Array.split()
const arr1 = ["Hi,", "this", "is"];
const arr2 = ["me", "writing", "you"];

//Array.concat()
const arrTotal = arr1.concat(arr2);
arrTotal.push("You");
console.log(arrTotal);
console.log(arrTotal.join(" ")); // .join will turn your array into a string

//Array.filter() // creates a new array | filter is a callback function => you pass it to another function
console.log(names.filter(name => name.length == 3 || name.length == 4)); // we use the singular form for each index || this function has NO NAME, it's an ANONYMOUS FUNCTION
let newArray = names.filter(name => name.length == 3); //name is the parameter for my anonymous function
console.log(newArray);

//Array.find() // returns the value of the first element with a truthy situation

const numbers = [1, 12, 4, 55, 67];
let arrCall = numbers.find(num => num == 55);
console.log(arrCall);

//reverse
const str3 = "JavaScript";
let newRevStr = str3 // here I call my variable
  .split("") // every line is applying a different method to that variable - it is more common to see it in one line than in multiple lines
  .reverse()
  .join("");
console.log(newRevStr);

/*c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
NB: for your program to work properly, the function should replace all 
’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5. // HERE LIES THE ANSWER
Examples:
hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”*/

const hacking = str => {
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");

  for (let i = 0; i < letters.length; i++) {
    // it is not recommendable to declare a variable inside of a loop
    // everything inside the {} will loop until the condition evaluates to false
    if (letters[i] == "a") {
      letters[i] = 4;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]); //I'll just push it as is
    }
  }
  let result = hackedArr.join("");
  return result;
};

let codeStr = "Hi, I am a nice girl. aaaa";
console.log(hacking(codeStr));

/*Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
 NB(Nota Bene: used to mark something as particularly important): A number is symmetrical when it is the same as its reverse.
Examples:
isSymmetrical(7227) ➞ true
isSymmetrical(12567) ➞ false
isSymmetrical(44444444) ➞ true
isSymmetrical(9939) ➞ false
isSymmetrical(1112111) ➞ true*/

function isSymmetrical(num) {
  //when there's a suggested function name in the exercise, we should use that name on our solution
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
}
console.log(isSymmetrical(33233));
console.log(isSymmetrical(123456));
console.log(isSymmetrical(1));

/*snake_case ➞ camelCase
Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
Examples:

toCamelCase(“hello_world”) ➞ “helloWorld”
toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”*/

/*function toCamelCase (str4){

    return result
}
console.log(toCamelCase("hello_world"));*/

const toCamelCase = str => {
  let splitStr = str.split("_");
  console.log(splitStr);
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr; // I will put it inside the loop when I need the variable fresh again
    if (splitStr[i] == splitStr[0]) {
      camelArray.push(splitStr[0]);
      continue; // continue will keep me inside the loop and jump one round
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArray.push(newWord);
  }
  let result = camelArray.join("");
  return result;
};
console.log(toCamelCase("snake_log_hi"));
console.log(toCamelCase("lol_loli"));

/*Pig Latin Translation.
Create a function that takes a string of words and moves the first letter of each word to the end of it,
then adds ‘ay’ to the end of the word.
This is a basic form of “Pig Latin”:
- Move the first letter of each word to the end of the word.
- Add “ay” to the end of the word.
- Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
 
Extra Practice
Preserve proper capitalization as in the examples below.
Examples:
pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”
*/

function pigLatin(str) {
  let translation = [];
  let splitStr = str.toLowerCase().split(" ");
  console.log(splitStr + "This is split arr");
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < splitStr.length; i++) {
    //i = 0 ---- splitStr = hi // i = 1 spliStr = that
    // almost every time I have an array, I need a for
    let firstChr = splitStr[i][0]; //h
    let remainder = splitStr[i].slice(1, splitStr[i].length); //igo
    console.log(remainder + "remainder");
    if (vowels.includes(firstChr)) {
      const firstChrVal =
        (i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
      translation.push(firstChrVal);
    } else {
      if (i == 0) {
        let firstChrRan = remainder[0];
        let wordRem = remainder.slice(1, remainder.length);
        remainder = firstChrRan.toUpperCase() + wordRem;
      }
      const newString = remainder + firstChr + "ay";
      //igo + h + ay //hat + z + ay
      translation.push(newString);
      console.log(translation);
    }
    let result = translation.join(" ");
    return result;
  }
}
const strPig = "are are is";
console.log(pigLatin(strPig));

/*const pigLatin = string1 => {
  let splitStr1 = string1.split(" ");
  let pigLatinArray = [];
  for (let i = 0; i < pigLatinArray.length; i++) {
    let firstChr1, restStr;
    if (splitStr1[i] == splitStr1[0]) {
      pigLatinArray.push(splitStr1.substring(1, pig.length));
      return string1;
      /* continue;
       } else {
           first
    }
  }
};
console.log(pigLatin("Cats are great pets."));*/

/*let newString = "hi, this is long text and I do know";
  let firstChr3 = newString[0];
  let lastChr = newString [newString.length-1];
  let shortStr4 = newString.substring(1, newString.length-1);
  console.log(shortStr4);
  console.log(lastChr + shortStr4 +firstChr3);


};*/
