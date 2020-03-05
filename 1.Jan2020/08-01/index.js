let str = "this is long text";
console.log(str.substring(2, 4));
console.log(str.slice(3));

let str1 = "Hi";
let str2 = "Hadi";
console.log(str1 + ", " + str2);
console.log(`${str1} ${str2}`);
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str1.toUpperCase() + " " + str2.toLowerCase());
console.log(str.includes("java"));

let x = 0;
x < 10 ? console.log("cool") : console.log("nope");

//let x = true;
false ? console.log("cool") : console.log("nope");
true ? console.log("cool") : console.log("nope");

//const -> is a constant value - it's a definition forever
const dr = 2;
// dr = 3; not possible to reassign a value to const

//local vs. global
var global = "Hi, I'm global"; // the blackslash tells JavaScript to ignore the next character and treat it as text
console.log(global);
function sum() {
  let local = "Hi, I'm local";
  console.log(global);
  console.log(local);
}
sum();
//console.log(local); //not there

//Conditional assignment with the ternary operator
let kid = 2;
console.log(kid > 16 ? "Party" : "Home");
console.log(true ? "Hey, that's nice" : "Oh, nooooooooooo");
console.log(false ? "Hey, that's nice" : "Oh, nooooooooooo");

//bracket notation [0]

// `\'`, `\""`, `\n`
console.log("Hi, I am \n Hadi");

// .trim()
let str4 = " Hadi ";
console.log(str4.trim());

//creating your own function
function print(str) {
  console.log(str);
}
print("Hadi");

//Numbers
let z = 3;
let w = 2;
console.log(z / w);

//isNaN (is Not a Number) add !, which stands for 'not' and it negates what comes after
let int1 = 11;
int2 = 1.5;
console.log(int1 + " " + int2);
console.log(isNaN(int1) ? "Yes, it is." : "Nope, sorry.");
console.log(!isNaN(int1) ? "Yes, it is." : "Nope, sorry.");

//Converting strings into Numbers: 'parseInt()', 'parseFloat()'
let strInt = "1";
let strInt2 = "2";
let result = strInt + strInt2;
console.log(result);

//parseInt - this converts from strings into numbers
let newNum = parseInt(strInt, 10); //10 is the base of the decimal system
console.log(newNum);
console.log(result);

/*Exercise:
1. Create two variables.
One variable should contain a string value and the other should contain a number.
Concatenate the string and the number.*/

//two alternative ways
let a = "Raquel";
let b = "17";
console.log(a + b);

let var1 = "This is a string";
let var2 = 22;
let longStr2 = var1 + var2;
console.log(longStr2);

/*2. Check if the following numbers are even numbers.
Use a ternary and if the number is even print "30 is even", else print that it is odd.

*/
let num101 = 44;
let numX = num101 % 2;
console.log(numX);
console.log(numX == 0 ? `${num101} is even` : `${num101} is odd`);

/* 9. Create a new string from a given string by changing the position of first and last characters.
The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ*/

let str5 = "Today";
let FirstChr = str5[0];
let LastChr = str5[str5.length - 1];
let shortStr5 = str5.substring(1, str5.length - 1);
console.log(str5);
console.log(LastChr + shortStr5 + FirstChr);

let str6 = "Rebecca";
let FirstChr1 = str6[0];
let LastChr1 = str6.length - 1;
let shorStr6 = str6.substring(1, str6.length - 1);
console.log(LastChr1 + shorStr6 + FirstChr1);

//Integer vs. Floats - parseInt converts from string to a number

let integer = "1005";
let realNum = parseInt(integer);
console.log(realNum);

let float = "10.05";
let realFloat = parseInt(float);
console.log(realFloat);

//Modulo '%'
let lastNum = 4 % 2;
console.log(lastNum);

// * + - / ++ --
let q = 3;
let s = 4;
let sum1 = q + s;
let div = q / s;
let sub = q - s;
let mul = q * s;
console.log(sum1, div, mul);

//Exponentiation ** the power of (new added)
let power = 2 ** 2;
console.log(power);

//Math.floor()
let float1 = 1.1;
let realIni = Math.floor(float1);
console.log(realIni);

//Math.ceil()
let realIni2 = Math.ceil(float1);
console.log(realIni2);

//Math.max() - Math with capital M
console.log(Math.max(1, 3, 800, 4, 3569, 66, 700));
console.log(Math.max(x, z, 100, q, s));

//Math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));

//Exercise: Create a variable with the value of “123”. Convert it to a number.

/*//Converting strings into Numbers: 'parseInt()', 'parseFloat()'
let strInt = '1';
let strInt2 = '2';
let result = strInt + strInt2;
console.log(result);

//parseInt - this converts from strings into numbers
let newNum = parseInt(strInt, 10); //10 is the base of the decimal system
console.log(newNum);
console.log(result);*/
let var3 = "123";
let newvar3 = parseInt(var3, 10);
console.log(newvar3);
console.log(parseInt(var3));

//Create a variable with the value of “130.7". Convert it to a number.

let var4 = "130.7";
let newvar4 = parseFloat(var4, 10);
console.log(newvar4);
console.log(parseFloat(var4));

//Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
let isDog = false;
console.log(isDog ? "pat, pat" : "find me a dog to pat");

//Declare a variable named speedCheck.
//If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’.
//If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.

let speedCheck = 50;
console.log(
  speedCheck < 50
    ? "You're going too fast"
    : "You're driving below the speed limit, Oma"
);

let speedLimit = 50;
console.log(
  speedLimit < speedCheck
    ? "You're going too fast"
    : "You're driving below the speed limit, Oma"
);

//Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
let age = 34;
console.log(age < 16 ? "Serve butter bread" : "Serve beer");

//Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
let iStudent = true;
console.log(iStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");

//Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
let okMarie = "cake";
print(okMarie === "cake" ? "Let them eat cake" : "Oh, bother"); //answer 2
print(okMarie.includes("cake") ? "Let them eat cake" : "Oh, bother"); //answer 2
