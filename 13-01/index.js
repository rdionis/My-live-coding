let old, nice, crazy;
old = true;
nice = false;
crazy = 3 <= 3;

console.log(1 !== 1);

//=== means the type and the value are equal

//when you declare the variable but don't assign a value, it will read "undefined"

//Boolean inversion with ! - the exclamation mark will give you the opposite result)

console.log(crazy ? "Yeah" : "nope");

//givenName || firstName || "ABC";

console.log("Abc");

let givenName, firstName;
firstName = "Hadi";
console.log(givenName || firstName || "Abc");
console.log(givenName || firstName || 2);
console.log(givenName || givenName || givenName); //all these variables are undeclared
console.log(firstName || firstName || firstName);
console.log("Abc" || firstName || firstName); //JS will focus on the first truthy statement and will ignore the others, even if they are true

//https://en.wikipedia.org/wiki/Algorithm

//let's do some Algorithm

//Nancy's income is 500 Euro per week. How much does Nancy make every year?

const nancySalary = 500 * 52;
console.log(nancySalary);
console.log(`Nancy Salary ${nancySalary} Eur in one year`);

/* The number of hours Nancy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
What's Nancy average hour*/

var nancyAverageHour = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;

console.log(nancyAverageHour);

let nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
console.log(nancyWorkingHours);

let nancyAverage = nancyWorkingHours / 10;
console.log(
  `Nancy worked the last two weeks ${nancyWorkingHours} hours, the Average is ${nancyAverage}`
);

//if (<boolean>){ ... }
console.log(true ? "Yeah, cool" : "Nope, sorry");

// 'if' vs. ternary operator

//if (condition) = "if" will be a preserved word, I can't use it as a variable

if (true) {
  console.log("Yeah, it is true");
}

if (false) {
  let superHero = 44;
  console.log("Yeah, it is true");
} // this will be ignored because it's false,
console.log("Yeah, it is true");
//console.log(superHero); --> will state that superHero is not defined

if (1 < 4) {
  console.log("Yeah, it is true");
}

if (1 < 4 || 1 < 55) {
  // with an 'if' condition, you can add as many statements as you want / with ternary operator, you can only use one statement
  console.log("Yeah, it is true");
}

if (1 < 4 || (1 < 55 && false)) {
  console.log("Yeah, it is very true");
}

if (true || (1 < 55 && false)) {
  console.log("Yeah");
}

if (false || (1 < 55 && false)) {
  console.log("Yeah");
}

let a, b, c;
a = true;
b = false;
c = true;
let counter = 0;
let logIn = false;

if (a == b) {
  //this has no result
  console.log("Nice");
}

if (a !== b) {
  //this is true
  console.log("Nice");
}

if (a == b && c) {
  //this has no result
  console.log("Nice nice");
  counter = 2;
  logIn = true;
}

if (a == b || c) {
  console.log("Nice");
} else {
  console.log("Not cool");
}

if (a == b && c) {
  console.log("Nice");
  counter = 2;
  logIn = true;
} else {
  console.log("Really not cool");
  counter = 3;
  logIn = false;
}
console.log(logIn, counter);

// A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85.
//What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let averageSixTests = 85;
let totalScoreTests = averageSixTests * 6;
let totalFiveTests = 75 + 70 + 85 + 90 + 100;
let scoreSixthTest = totalScoreTests - totalFiveTests;
console.log(`Score in the sixt text: ${scoreSixthTest}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments.
//He has taken 8 assessments and his average is 78%.
//What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.

let score8Assessments = 78 * 8;
let totalScore = 80 * 9;
let minimumScoreLastAssessment = totalScore - score8Assessments;

console.log(
  `James needs a minimum of ${minimumScoreLastAssessment}% to get an 80% average.`
);

//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let int1 = 4;
let int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("True");
  console.log(true);
}

//Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let int3 = 66;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
);
{
  console.log(true);
}

//Declare the variables a, b and c, and give them number values.
//Check which one out of the three variables has the largest value and print it to the console.
//Then change the values of the variables to see if your conditional still works.

let a1, b1, c1;
a1 = 10;
b1 = 59;
c1 = 22;

console.log(Math.max(a1, b1, c1));

//Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.

let str = "Python"; // THIS IS NOT WORKING

if (str.substring(0, 2) === "Py") {
  console.log(str);
}

//Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let sumInt = int1 + int2;
console.log(sumInt);

if (sumInt > 50 && sumInt < 80) {
  console.log(65);
} else {
  console.log(80);
}

//Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let int5 = 3;
let int6 = 5;
let numDiff = Math.abs(int5 - int6);
let numSum = int5 + int6;
console.log(numDiff);
console.log(numSum);

if ((numSum = 8 || numDiff == 8)) {
  console.log(true);
}

//Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let int7 = 5;
let int8 = 10;
let intSum = int7 + int8;

if (int7 == 15 || int8 == 15 || intSum == 15) {
  console.log(true);
}

//Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let int9 = 27;
let int10 = 45;

if (int9 % 7 == 0 || int9 % 11 == 0 || int10 % 7 == 0 || int10 % 11 == 0) {
  console.log(true);
} else {
  console.log(false);
}

let number = 2;
console.log(77 % number == 0 ? "Multiple" : "Not multiple");

//Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let int11 = 5;
let int12 = 5;
let sumInt1 = (int11 + int12) * 3;

if (int11 === int12) {
  console.log(sumInt1);
}

//Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let num1 = 22;
let numDiff1 = Math.abs(num1 - 19);
let numDo = numDiff * 2;

if (num1 > 19) {
  console.log(numDo);
}

//Make a variable for firstName and age and give each variable values.
//Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”.
//If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
//If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
//If none of these conditions apply, print “firstName is a adult”.

let myFirstName = "Raquel";
let age = "k";

if (age < 13) {
  console.log(`${myFirstName} is a child.`);
} else if (age >= 13 && age < 20) {
  console.log(`${myFirstName} is a teenager.`);
} else if (age >= 20 && age < 30) {
  console.log(`${myFirstName} is a young adult.`);
} else if (age > 30) {
  console.log(`${myFirstName} is an adult.`);
} else {
  console.log(`This is not a valid number.`); //we have to take in consideration the input of the user
}

//if (age < 13) && (age >= 13 && age < 20) && (age >= 20 && age < 30);

/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65). 
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John. // NAO PERCEBO ISTO
Print a string to the console containing the variable from step 3 using string interpolation.
Create an if statement which prints the name and BMI of the person with the highest BMI*/

const massMark = 70;
const heightMark = 1.5;
const massJohn = 97;
const heightJohn = 1.92;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark.toFixed(3));
console.log(bmiJohn.toFixed(3));

const markMoreCookies = bmiMark > bmiJohn;
console.log(markMoreCookies);

if (markMoreCookies) {
  console.log(
    `Is Mark’s BMI higher than John’s? Why yes, it’s ${marksHigherThanJohns}.`
  );
} else {
  console.log(
    `Is Mark’s BMI higher than John’s? Why yes, it’s ${marksHigherThanJohns}.`
  );
}

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI: ${bmiMark}`);
} else {
  console.log(`John's BMI: ${bmiJohn}`);
}
