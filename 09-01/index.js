//The Math.hypot() function returns the square root of the sum of squares of its arguments, that is:
// --> we will never use this function

console.log(Math.hypot(3, 4));

console.log(Math.hypot(5, 12));

console.log(Math.hypot(3, 4, 5));

console.log(Math.hypot(64, 16));

console.log(Math.hypot(64, 16));

//1.23+5

//we create this short cut to not have to use console.log all the time
function display(str) {
  console.log(str);
}
display("Hi this is a new function");

//x = 3.444;

let intStr = "10 Hi, this is cool"; // only recognises number at the beginning
console.log(parseInt(intStr));

let intStr1 = "Hi, this is cool 10"; //result is NaN because number is at the end
console.log(parseInt(intStr1));

let intStr2 = "2nd"; //result will only be the number
console.log(parseInt(intStr2));

let floatStr = "1033.3 Hi, this is not cool";
console.log(parseFloat(floatStr));

// && || - ternary operator (is a short form for if)

// = Assigning
let var1 = true;
let var2 = true;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "not cool"); //cool

let var4 = 1 > 4;
console.log(var4); //false
let var5 = true;
let var6 = true;
console.log(var4 && var5 && var6 ? "cool" : "not cool"); //not cool
console.log(var4 || var5 || var6 ? "cool" : "not cool"); //cool

// = Assigning --> I DIDN'T UNDERSTAND THE RESULTS OF THIS
console.log(ohNo);
var ohNo;
let x = 1;
ohNo = (3 + 4 * 6) / (2.2 + 211);
console.log(ohNo);

// == vs === ---> == to check
console.log(x == ohNo ? "yeah, it is" : "nope, it is not");
console.log(x === ohNo ? "yeah, it is" : "nope, it is not");

//Truthy and falsy values: false, undefined, null, 0, ''

console.log(true ? "Yes" : "Noooooo");
console.log(1 ? "Yes" : "Noooooo");
console.log(0 ? "Yes" : "Noooooo"); // FALSY
console.log(20 ? "Yes" : "Noooooo");
console.log(-1 ? "Yes" : "Noooooo");
console.log(2.5 ? "Yes" : "Noooooo");
console.log("1" ? "Yes" : "Noooooo");
console.log("A" ? "Yes" : "Noooooo");
console.log("" ? "Yes" : "Noooooo"); // FALSY
console.log(null ? "Yes" : "Noooooo"); // null is different from 0; 0 is a value; null is nothing // FALSY
console.log(console.log ? "Yes" : "Noooooo");
console.log(Math.trunc ? "Yes" : "Noooooo");
console.log(display ? "Yes" : "Noooooo");

//isNan

isNaN(NaN); // true
let v = NaN;
console.log(isNaN(NaN) ? true : false);

isNaN(undefined); // true
console.log(isNaN(undefined) ? true : false);

isNaN({}); // true
console.log(isNaN({}) ? true : false);

isNaN(true); // false
console.log(isNaN(true) ? true : false);

isNaN(null); // false
console.log(isNaN(false) ? true : false);

isNaN(37); // false
console.log(isNaN(37) ? true : false);

// strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
console.log(isNaN("37") ? true : false);

isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(isNaN("37.37") ? true : false);

isNaN("37,5"); // true
console.log(isNaN("37,5") ? true : false);

isNaN("123ABC"); // true:  parseInt("123ABC") is 123 but Number("123ABC") is NaN
console.log(isNaN("123ABC") ? true : false);

isNaN(""); // false: the empty string is converted to 0 which is not NaN
console.log(isNaN("") ? true : false);

isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN
console.log(isNaN(" ") ? true : false);

// dates

isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// This is a false positive and the reason why isNaN is not entirely reliable
isNaN("blabla"); // true: "blabla" is converted to a number.
// Parsing this as a number fails and returns NaN

//Math.random --> number between  and 1 (inclusive of 0, but not 1 -->> you'll never get 0 nor 1 anyway)
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.random() * 100 + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

//Math.round

//1. Minimum and maximum
//a. Lowest Number
//Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));

//b. Highest Number
//Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));

//2. Rounding
//a. Round up
//Round up the following numbers: 3321, 326.76, -9.78, 43.342.
console.log(Math.ceil(3321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

//b. Round down
//Round down the following numbers: 3321, 326.76, 76788.7, -9.78,
console.log(Math.floor(3321));
console.log(Math.floor(1326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));

//3. Dice Roll!
//Create a program that prints a random integer from 1 - 6.
console.log(Math.floor(Math.random() * 6) + 1);

//(0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
let num = 3;
let result = floatNum * floatNum1;

// num.toFixed(num)
let lastResult = result.toFixed(num);
console.log(lastResult);

let s = 33.3333334551;
console.log(s.toFixed(4));
