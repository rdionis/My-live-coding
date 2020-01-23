//our BFF
function display(str) {
  //parameter is a variable used inside of the function and has its value outside of the function (when I have my function call)
  console.log(str);
}
display("Hadi");
//Arrray.isArray(Arr) / to check if it is an array

const names = ["Hadi", "Ali", "Olga", "Nancy", "Ahmad"];
let x = 1;
console.log(Array.isArray(names)); // I'm asking here if this is true or not - if it's an array or not
console.log(typeof names); //typeof is a function | will return object in this case

//Array.includes() // will check if complete parameter is there or not
//Array.indexOf // shows me where this parameter is located

console.log(names.includes("Hadi")); // to show that there is there or not - I am asking "is this parameter in the array or not?"
console.log(names.indexOf("Hadi")); // to show the index num - I am asking where this parameter is located

//Array.reverse() // Reverse | It will flip my array, reversing the index order

let rev = names.reverse();
console.log(rev);

//Array.concat() => it will put two arrays together (two at a time)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);

/*Array.filter() // creates a new array with that result - filter is a function built from JS
that is calling another function that we have to declare => this is called "callback"* | we will use it A LOT */

//this is a callback function

//this is Es6, it won't work with normal functions, I have to declare a new one

let result1 = names.filter(name => name.length == 4 || name.length == 3); // this is how we write functions in Es6 style
//I am telling JavaScript to work with an individual name
//"name" is a new variable being declared as a parameter inside the function
console.log(result1);

/*empty () - just executing the function
() with stuff inside are the parameters for that function*/

//filter will come back with multiple results, find will come back with the first result it finds
//if the parameter doesn't apply, filter will still come back with an array, but an empty one [] | in the same situation, find will return with "undefined"
//filter will create a new array with possible multiple results/answers // find will return only the first result/only one result

// Array.find() // returns the value of the first element => it's also a callback function

let result2 = names.find(name => name[0] == "A"); //(name => name[0] == "A") - this is Es6 syntax
console.log(result2); // returns the first result it finds (in this case, it's the last, because we reversed the array before)

let result3 = names.find(name => name[0] == "A" && name[1] == "A");
console.log(result3);

//Array.map() // creates a new array - sort of replaces "for"
const intArray = [2, 3, 4, 5, 6, 8];
let result4 = intArray.map(x => x + 1); // checks every individual index and adds one
console.log(result4);

//EXERCISES:

//Reverse the string: “JavaScript”. //reverse only works with arrays

const proStr = "JavaScript";
let stringToArray = proStr.split("");
console.log(stringToArray);
stringToArray.reverse(); // here you're just applying a function, you don't need a variable
let newStr = stringToArray.join("");
console.log(newStr);

//1. Make an array of your siblings’ names or your favorite movie characters’ names.

let favMovieNames = [
  "Liesl",
  "Louisa",
  "Friedrich",
  "Briggita",
  "Kurt",
  "Martha",
  "Gretel"
];

//2. Make an array of your parents’ names.

let parentsNames = ["Isabel", "José"];

//3. Combine these two arrays.

let newArray = favMovieNames.concat(parentsNames);
console.log(newArray);

let newArray1 = parentsNames.concat(favMovieNames);
console.log(newArray1);

//4. Add your pets’ names.

let petsNames = ["Julieta", "Catarina", "Toqui", "Teresa Raquel"];
let newArray2 = newArray.concat(petsNames);
console.log(newArray2);

//Hadi's solution
newArray.push = "Julieta";
newArray.push = "Catarina";
console.log(newArray);

//5. Reverse the order of the array.
let rev2 = newArray2.reverse();
console.log(rev2);

//Hadi's solution
newArray2.reverse();

//6. Access one of your parents’ names.

let oneParent3 = newArray[7];
console.log(oneParent3);

let oneParent = newArray2.filter(parent => parent[0] == "I");
console.log(oneParent);

let oneParent1 = newArray2.find(parent => parent[0] == "I");
console.log(oneParent1);

//Hadi's solution
console.log(newArray2.find(value => value == "Isabel"));

//7. Update the name of one of your parents.
oneParent = "Maria";
console.log(oneParent);

//FUNCTIONS: something I execute whenever I call the function
//function declaration - what I declare my function will do
//function call - the way I am able to access the function

function sum(x, y) {
  //my function scope is whatever is between the {} => it is LOCAL: whatever is inside the function, stays inside the function
  let fun = "Local variable inside of the function";
  console.log(fun);
  return x + y;
}
let fun = sum(2, 4); //function call - here, the variable fun is global, because it's outside the function
//in general,DO NOT name local and global variables with the same name.
console.log(fun);

function sum(x, y) {
  return x + y;
}

//let fun = sum(22, 4);
console.log(fun);
function div(x, y) {
  return x / y;
}

function age(x) {
  if (x == 30) {
    return "You are cool";
  } else {
    return "You are nice";
  }
}

console.log(age(20));

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [14, 442, 53, 664, 5, 6, 10, 45, 66];

function arrBig(array) {
  //never add a ; after the parameter
  let result3 = array.filter(num => num >= 5);
  return result3; // return is how you push the function to the outside world
} // even this ; is not necessary

arrBig(numbers); //function call - we always have to call the function to execute it
arrBig(numbers2);

console.log(arrBig(numbers)); // I'm just using console.log to see a result
console.log(arrBig(numbers2));

function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 4) {
      //never use a ; after if
      result.push(array[i]);
    }
  }
  return result;
} //new function

function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    //never use a ; after if
    if (array[i][0] == "O") {
      result.push(array[i]);
    }
  }
  return result;
}

const names2 = ["Hadi", "Ali", "Nancy", "Olga"];
console.log(fourArrChar(names2));
console.log(Ochr(names2));

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function nameOfThatMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthNames[2];
      break;
    case 4:
      result = monthNames[3];
      break;
    case 5:
      result = monthNames[4];
      break;
    case 6:
      result = monthNames[5];
      break;
    case 7:
      result = monthNames[6];
      break;
    case 8:
      result = monthNames[7];
      break;
    case 9:
      result = monthNames[8];
      break;
    case 10:
      result = monthNames[9];
      break;
    case 11:
      result = monthNames[10];
      break;
    case 12:
      result = monthNames[11];
      break;
    default:
      result = "This is not a month.";
  }
  return result;
}
console.log(nameOfThatMonth(2));
console.log(nameOfThatMonth(6));
console.log(nameOfThatMonth(22));
console.log(nameOfThatMonth(100));

function nameOfThatMonthEasyVersion(num) {
  if (num >= 1 && num <= 12) {
    result = monthNames[num - 1];
  } else {
    result = "Sorry, this is not a month.";
  }
  return result;
}
console.log(nameOfThatMonthEasyVersion(12));
console.log(nameOfThatMonthEasyVersion(13));

/*function reverseNames(arr) { //THIS IS THE COMPLICATED WAY

  let newArray = [];
  let strToArr = "";
  let str = "";
  let revStr = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]; // H a d i
    strToArr = str.split("");
    strToArr.reverse(); //i, d, a, H
    revStr = strToArr.join("");
    newArray.push(revStr);
  }
  return newArray;
}

console.log(names);
console.log(reverseNames(names));*/

function reverseNames(arr) {
  // THIS IS THE SIMPLE AWAY
  let newArray = []; // creates a new array
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("")
      .reverse()
      .join("");
    newArray.push(str);
  }
  return newArray;
}

console.log(names);
console.log(reverseNames(names));
