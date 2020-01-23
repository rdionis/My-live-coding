// ES6 system uses => instead of the function word. it is assigning the function result to a variable. var sum = function(z,s){}
const sum = (x, y) => {
  return x + y;
};
sum(5, 4);
// Array.map(value, index =>{} // creates a new array
// its not about naming system but about the order
const names = ["Ali", "Olga", "Nancy", "Hadi"];
const newArr = names.map((name, index) => name[0] == "0");
console.log(newArr);
// below the updated ES6 system:
// its a call back situation
names.forEach((name, index) => console.log(name + " index num = " + index));
//old system below:
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " index num = " + i);
}

//ES 6
//Array.map(value,index=>{}) //creates a new array

names.forEach((name, index) => console.log(name + " index num = " + index));

//Old School
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + " index num = " + 1);
}

const sum1 = function(x, y) {
  // here, I am assigning a function to a variable
  //
  return x + y;
};

//Array.reduce --- this is very advanced JavaScript
//const reducer = (acc, value) => acc + value;

const numArr = [1, 3, 4, 6, 7]; //if I want to create a function, it must be with const
const reducer = (acc, cur) => acc + cur; // accumulator is my box, the current value is the value of every item
//acc = 0 cur = 1
console.log(numArr.reduce(reducer, 100)); //I use a number when I want to start my accumulation with a value different than zero) --- 100 is starting num for acc
//here, 100 will be the starting value for the accumulator, so it will starting adding to this value instead of adding to zero
//the default accumulator is zero

//callback function --- whenever I pass a function in a parameter for another function

//Call Stack --- stacking functions | this is related to callback
//the last to arrive is the first to leave
//max: 6000 functions

/*function one (){    
} - CHECK LIVE CODING*/

function first(callback) {
  return callback;
}
function callback(callTwo) {
  let x = 9;
  return callTwo;
}
function callTwo() {
  return "Hi";
}
console.log(first(callback(callTwo())));

//our BFF
function display(str) {
  console.log(str);
}

//our BFF in ES 6 syntax
const print = str => console.log(str);
print("Hadi");

//Old School
//function
//function <name>(<parameters>){...}
//parameters are variables declared and used inside of the function and the value of it comes when I have my function call

function yellow(val, val2) {
  //the order of the parameters is very important - IT SHOULD BE THE SAME HERE ...

  //this function has no parameter and that's OK
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);
}
yellow(2, 3); // function name calls the function, the () execute the function
//the order of the parameters is very important - ... AND HERE

function pink(name, age) {
  console.log(`Hi ${name}, you are very young: ${age}.`);
}
pink("Ali", 20);

const AliPets = ["Dyson", "Sofi"];
function pink1(name, age, array) {
  console.log(
    `Hi ${name}, you are very young (${age} years old) and you have nice pets ${array}.`
  );
}
pink1("Ali", 20, AliPets);
pink1("Ali", 20, ["Dyson", "Sofi"]);

//and now in ES6
const pink2 = (
  name,
  array,
  age = 10 //I changed the order because the last variable has a default value -10 is the default value for age if the user did not give age
) =>
  console.log(
    `Hi ${name}, you are very young (${age} years old) and you have nice pets ${array}.`
  );

pink2("Ali", AliPets, 20);
pink2("Ali", ["Dyson", "Sofi"], 15); //parameters in the function call section must be in the same order as when they're declared

const greeting = (nam, add, age, pla) => {
  //this function has four parameters - the order here is VERY IMPORTANT - must be the same as when I call the function
  age += 0; //here the order of the parameters DOESN'T MATTER
  nam += ",";
  pla += "";
  add += ","; //age = age + 20
  let result = `Hey, ${nam} it is very nice to in ${add} when you are ${age} years old, in ${pla}.`; //here the order of the parameters DOESN'T MATTER
  return result;
};
console.log(greeting("Raquel", "Kanzowstrasse", 30, "Berlin")); // the order here is VERY IMPORTANT - must be the same as when I declare

//parameters: Naming and order
//Functions as values
//function
//function <name>(<parameters>){ ... }
// parameters: Naming and order
// Functions as values
// 1- const <function name> = function(<parameters>){ ... }
// ES6 functions
// 2- const <function name> = (<parameters>) => { ... }

const add = () => {
  // with functions, arrays and objects, we must use const
  let x = 1120 * 3;
  console.log(x);
};
add(); // function call

//functions can have return and parameters, but not necessarily

/*EXERCISES
Amplify the Multiples of 4. Create a function that takes an integer
and returns an array of integers ascending from 1 to the given number, where:
- For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
- If the number cannot be divided evenly by 4, simply return the number.
- The given integer will always be equal to or greater than 1.
- Include the given number (the number in the parameters).
Examples:
amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]*/

function amp(num) {
  let result = [];
  let ampByTen = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) {
      ampByTen = i * 10;
      result.push(ampByTen);
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(amp(4));

/* MY ATTEMPT

function fourMultiple(int) {
    let result = [];
  for (let i = 1; i % 4 == 0; i * 10) {
    return result;
    {
      if (i % 4 !== 0) {
        return i;
      }
    }
  }
}
console.log(result);*/

/*One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0*/

function unique(arr) {
  //[1, 1, 2, 1, 1, 1, 1]
  let currentValue = 0;
  let current = []; //1, 1, 1
  let remainder = [];
  for (let i = 0; i < arr.length; i++) {
    if (current.length == 0 || current[0] == arr[i]) {
      current.push(arr[i]);
      currentValue++; //currentValue = currentValue +1;
    } else if (current[0] !== arr[i]) {
      remainder.push(arr[i]); // 2
    }
  }
  if (currentValue == 1) {
    return current[0];
  } else {
    return remainder[0];
  }
}

let numArray = [1, 1, 2, 1, 1, 1, 1];
console.log(unique(numArray));

let p = 0;
console.log(++p); // adds 1 to variable p
console.log(p++); // brings up the variable p and adds 1

//variables in function

//local vs global
