/*let myFirstName = "Raquel";
let age = 17;

//Nested IF
if (age < 13) {
  console.log(`${myFirstName} is a child.`);
} else {
if (age >= 13 && age < 20) {
  console.log(`${myFirstName} is a teenager.`);
}else {
if (age >= 20 && age < 30) {
  console.log(`${myFirstName} is a young adult.`);
}else {
if (age > 30) {
  console.log(`${myFirstName} is an adult.`);
}else {
  console.log(`This is not a valid number.`); //we have to take in consideration the input of the user
}
}
}

// else if
if (age < 13) {
  console.log(`${myFirstName} is a child.`);
} else if (age < 20) {
  console.log(`${myFirstName} is a teenager.`); //because it's nested, you don't really need the (age >= 13 && age < 20) KEEP IT SIMPLE
} else if (age < 30) {
  console.log(`${myFirstName} is a young adult.`); //because it's nested, you don't really need the (age >= 20 && age < 30) KEEP IT SIMPLE
} else if (age > 30) {
  console.log(`${myFirstName} is an adult.`);
} else if{
  console.log(`This is not a valid number.`); //we have to take in consideration the input of the user
}
*/

//switch (<expression>){.....}

const color = "Black"; // you can't change const, like you can do with var
switch (
  color // switch is a preserved word
) {
  case "Pink": // case is a preserved word
    console.log("cool");
    break; // break is a preserved word - we use "break" to separate from what came before
  case "Black":
    console.log("Nice");
    break;
  case "white":
    console.log("soooo nice");
    break;
  default:
    // default is a preserved word - I always need a default input - it's used when the solution you're looking for is not listed
    console.log("Noooo, that is crazy");
}

/*THIS WOULDN'T WORK
let x = 10;
let x = 11;


const name = "Raquel";
let name = "Sara";

const name = "Raquel";
name = "Sara";
*/

//BUT THIS WORKS
let y = 10;
y = 11;

const month = 3; //here we can also use let or var
switch (month) {
  case 1: // I CAN ADD DIFFERENT STEPS TO EVERY CASE
    console.log("Jan");
    break;
  case 2:
    console.log("Fev");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Abr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dez");
    break;
  default:
    console.log("This is not a valid month.");
}

const x = 33; // you can do whatever case you want to
switch (x) {
  case -1999.33:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  case 10000000000001:
    console.log("cool");
    break;
  default:
    console.log("So this is not fun or is it?");
}

//switch vs. else if

const num = "X";
if (num <= 10 && num >= 0) {
  console.log("This number is in the range 0-10");
  if (num == 1) {
    console.log(num);
  }
  if (num == 4) {
    console.log(num);
  }
} else {
  console.log("This number is NOT in the range 0-10");
}

switch (num) {
  case 1:
    console.log(num);
    break;
  case 2:
    console.log(num);
  case 3:
    console.log(num);
  default:
    console.log("This isn't a valid number.");
}

/*Let’s play mini FizzBuzz! For any given number, if the number is:
divisible by 3, print “Fizz”.
divisible by “5", print “Buzz”.
divisible by both 3 and 5, print “FizzBuzz”.
That is, if any of the above conditions apply, print the above words instead of the number.
Otherwise, just print the number.*/

const number = 30;

if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else if (isNaN(number)) {
  console.log("This is not a number.");
} else {
  console.log(number);
}

/*Declare two variables: “a” with the value of true, and “b” with the value of false.
Check the result of:
a) a AND b.
b) a OR b.
c) NOT (a AND b).
Declare three more variables “x”, “y”, “z”. Give these variables number values.
Check the result of whether:
a) x is greater than z AND x is greater than y.
b) x is NOT equal to y.
c) z is less than y OR z is greater than x.
d) x is equal to z OR x is NOT equal to y.
e) x is greater than or equal to 10 AND y is less than or equal to 10.
f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.*/

let a = true;
let b = false;

console.log(a && b); //false
console.log(`Q1.a): ${a && b}`);
console.log(a || b); //true
console.log(`Q1.b): ${a || b}`);
console.log(!(a && b));
console.log(`Q1.c): ${!(a && b)}`);

let xx = 12;
let yy = -5;
let zz = 8.6;

console.log(xx > zz && xx > yy);

console.log(xx !== yy); // NOT EQUAL is most commonly represented by !==

console.log(zz < yy || zz > xx);

console.log(xx == zz || xx !== yy);

console.log(xx >= 10 && xx * yy > 100);

console.log(xx * zz < 100 || xx * yy > 100);
