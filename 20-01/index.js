// arrays - for arrays, we use []

let arrStr = ["hi", "text", "text"]; // 1st and most common way
console.log(arrStr);

let arrInt;
arrInt = []; // 2nd way
console.log(arrInt);

arrInt[0] = 22;
arrInt[1] = 22;

console.log(arrInt);

// we use array when we need to store multiple values in one variable
//Array(num) // to create array with num slots

let arrString = new Array(4);
// let arrStr2 = Array(3); -> here, I declare an array with three elements - THIS IS OLD SCHOOL
let arrStr2 = Array("Hadi", "Ali");
console.log(arrStr2);

//Array.of() creating array
let strArr = Array.of(3);
console.log(strArr);

//Accessing using square brackets // not a practical method if you want to keep adding to that array
arrInt[2] = 33;
arrInt[3] = 53;

//Adding items - add to the last item
// push method - will add the new value automatically to the array - it will push it to the very last element
arrInt.push(663);
arrInt.push(555);
console.log(arrInt);

//unshift - it will push it to the first element
arrInt.push(663);
arrInt.unshift(322);
console.log(arrInt);
console.log(typeof arrInt);

//Finding items
//Array.indexOf(<item>) - array starts from zero

var firstNameArr = ["Ali", "Olga", "Hadi"];
console.log(firstNameArr.indexOf("Ali")); // I want to know if there is Ali - it's index 0
console.log(firstNameArr.indexOf("Hadi")); // I want to know if there is Hadi - it's index 2
console.log(firstNameArr.indexOf("Nancy")); // I want to know if there is Nancy - result -1, which means this one is not in my array
console.log(firstNameArr.indexOf("adgsgsherjrerj")); // I want to know if there is this random text - result -1, which means this one is not in my array

let funArr = ["😎", "💪🏻", "😊"];
console.log(funArr);
[];

let arrStringName = ["Ali"]; // let arrStringName = [] -> this declares an empty array
console.log(arrStringName);

// array always likes to work with "for" - they're very best friends
for (let i = 3; i <= 10; i++) {
  //i = 0
  arrStringName[i] = `Hadi${i}`;
}
console.log(arrStringName);

//Removing items:
//array.pop() //Removing the last item
//array.shift() // Removing the first item

let funArr1 = ["😎", "💪🏻", "😊"];
funArr1.pop();
funArr1.pop();
console.log(funArr1);

let funArr2 = ["😎", "💪🏻", "😊"];

funArr2.shift();
funArr2.pop();
console.log(funArr2);

const lastName = ["Ali", "Hadi"];
lastName[0] = "Nsreeny";
lastName[1] = "Danny";
//lastName = 0; //this would not work, because we used const, so we can't change the array into something else - with const, the array is secured
console.log(lastName);

let x = 0; // I'm declaring a variable and assigning a value to it
x = 2 + 2; // I'm assigning a new value to it
console.log(x);

var y = 0; // var used to be the only way to declare a variable in JavaScript, now it has the specificity of hoisting and global variables
console.log(y);

const z = 0; //const also declares a variable, but I can not change its value afterwards -> const is locked
//z = 2 + 2; // this is impossible
console.log(z);

let names = ["Hadi", "Ali", "Nancy", "Danny"]; // this is very common: variable with a plural name for an array
let name = "this is long text"; // variable with a singular name for an individual variable
console.log(names.length); //length will count how many items in my array
console.log(name.length); //length will count how many characters in my singular variable

//Array.slice()
console.log(names.slice(3));
console.log(names.slice(0, 2));
console.log(names.splice(0, 2)); // result of slice and splice is the name (whatever...)

//Array.split()
let stringToArray = name.split(" "); // will make each word (between empty spaces) an index for the new array - most common method to split an array is the empty space
console.log(stringToArray);

let name1 = `This is Long Text
new line
third line`;
let stringToArray1 = name1.split(" "); // will make each line an index for the new array
let stringToArray2 = name1.split("\n"); // will make each line an index for the new array
console.log(stringToArray1);
console.log(stringToArray2);

/*
1.Declare a variable named “euroCities” and assign an array to the variable
e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”]. Declare another variable and assign the second item of the array as a value.*/
const euroCities = ["Lisbon", "Madrid", "Paris", "Bucarest", "Rome"];
let euroCity = euroCities[1];
console.log(euroCities);
console.log(euroCity);

//2. Change the first item in the array to “Berlin”.

euroCities[0] = "Berlin"; // it will overwrite "Paris"
console.log(euroCities);

//3. Print the length of the array “euroCities”.

console.log(euroCities.length);

//4. Remove the last item of the array “euroCities”. // pop will delete the last item

euroCities.pop();
console.log(euroCities);

//5. Use an array method to add “Budapest” to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities);

//6. Create another variable named asianCities and assign an array of at least 5 cities to the variable.*/

const asianCities = [
  "Kuala Lumpur", //0 JS - 1 human
  "Tokyo", //1 JS - 2 human
  "Beijing", //2 - 3 human
  "New Delhi", //3 - 4 human
  "Tehran", //4 - 5 human
  "Manila" //5 - 6 human
];
console.log(asianCities);

//7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let threeAsianCities = asianCities.splice(1, 3); // splice will give you items 1,2 and 3
let threeAsianCities1 = asianCities.slice(1, 4); //slice will give you items 1,2 and 3 and cut from 4 on
console.log(threeAsianCities);
console.log(threeAsianCities1);

//array.join()

const arrayString = ["This", "is", "array", "was", "string"];
let stringToArray3 = arrayString.join(); //inside the parenthesis will be my rule
console.log(stringToArray3);

let stringToArray4 = arrayString.join("");
console.log(stringToArray4);

let stringToArray5 = arrayString.join(" "); //this will be the most common and desirable way, so it is readable
console.log(stringToArray5);

/*sumOfNumbers.
1. Create a program that adds up the numbers in an array (of at least 3 numbers).
Bonus: Print to screen both the sum and the product of these numbers.*/
//SOURCE: https://medium.com/@chrisburgin95/rewriting-javascript-sum-an-array-dbf838996ed0

const numArray = [12, 5, 89.5, 570];
let sumArray = 0;
let productArray = 1;
console.log(numArray);

for (let i = 0; i < numArray.length; i++) {
  sumArray += numArray[i];
  productArray *= numArray[i];
}
console.log(
  `The sum of my array is ${sumArray} and the product of my array is ${productArray}`
);

/*
2. Hello Friend. Create an array filled with your friends' names.
Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc.
Bonus: Print the indexes of each item in the array.
Expected output example: Mike is at index 1 of my friends array.*/

const arrFriendsNames = ["Filipa", "Sara", "Pedro", "Nathalie"];

const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++) {
  console.log(`Hello ${names2[i]}, and he is index ${i} of Names array`);
}

/*
3.City Names. Create an array of city names. Loop through the array and add the city names to a string.
Example of expected output: “Berlin, Paris, Prague, Rome”.*/

const arrCityNames = ["Lisboa", "Paris", "Barcelona", "Firenze"];

const cityNames = ["Berlin", "Paris", "London", "Dubai"];
let cityNamesStr = "";
for (let i = 0; i < cityNames.length; i++) {
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    cityNamesStr += ".";
  } else {
    cityNamesStr += ", ";
  }
}
console.log(cityNamesStr);

/*
Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer.
Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]*/

let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(numArr);

/*Capitalize. Create a program that capitalizes the first letter of each element in an array of names.
Examples:
[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
[“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]*/

const arrNames = ["sara", "ali", "naNCy"];
for (let i = 0; i < arrNames.length; i++) {
  arrNames[i] = // sara
    arrNames[i][0].toUpperCase() + arrNames[i].substr(1).toLowerCase();
}
console.log(arrNames);
