// NESTED ARRAYS
// NESTING AND ACCESSING ARRAYS WITHIN EACH OTHER
const arr = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10]
];
console.log(arr[1][1]); // first group, and then element inside the group starting from 0
console.log(arr[2][1]);
console.log(" ");
// two loops connected :
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // when we do have one i, the second letter is j.
    console.log(arr[i][j]); // this is the second counter and will bring indv index
  }
}

let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([i, j, i, 44]); // you can push any numbers
  }
}

// forEach --- it is a callback function // this means I have to pass a function in the parameter
arr.forEach(index => console.log(index));
arr.forEach(index => index.forEach(element => console.log(element))); // forEach will go inside every index and do sth to it

console.log("MAP");
arr.map(array => array.map(element => console.log(element))); // map will create another array
console.log(arrayNew);

let names = ["Ali", "Olga", "Nancy"];
names.forEach(name => console.log(name));
names.map(name => console.log(name));

let family = [
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
];

// our beloved traditional for
for (let i = 0; i < family.length; i++) {
  // this is a nested for
  // this is the old school method
  console.log(family[i]); // this returns the whole array
  for (let j = 0; j < family[i].length; j++) {
    // I want the length of each individual array inside the main array
    // I can't use i anymore
    console.log(family[i][j]);
  }
}
//forEach  // this works like a nested "for" in ES6 Syntax
family.forEach(eachRelative => console.log(eachRelative));
family.forEach(eachRelative =>
  eachRelative.forEach(element => console.log(element))
);

// for of
console.log(" ");
for (let innerArray of family) {
  for (let element of innerArray) {
    console.log(element);
  }
}
//read about why for in is not working

// Nesting objects
// Nesting and accessing objects in objects

const tShirt = {
  //this is the main object
  color: "red",
  size: ["XS", "S", "M", "L", "XL"],
  // this is a nested object
  countries: {
    name: ["China", "Germany"],
    capital: ["Beijing", "Berlin"],
    // this is a nested object inside the nested object
    obj: {
      one: 3344,
      two: 5654,
      3: 5487,
      printOut: function() {
        //this is a method inside the second nested object
        console.log(this.one); // here, "this" refers to "obj"
      }
    },
    display: function() {
      //this is a method inside the first nested object
      console.log(this.name); // here, "this" refers to "countries"
    }
  },
  fabric: "cotton",
  method: function() {
    console.log("color", this.color); // here, "this" refers to the main object "tShirt"
  }
};

console.log(tShirt.size[2]); // returns M
console.log(tShirt.countries.capital[1]); // returns Berlin
console.log(tShirt.countries.name[0]); // returns China
console.log(tShirt.countries.obj.one); // returns 3344
console.log(tShirt.countries.obj["3"]); // returns 5487 //we use the bracket notation here because it's a number and using the dot notation wd confuse JS

console.log("CALLING EACH INDIVIDUAL FUNCTION");
tShirt.method(); // inside tShirt
tShirt.countries.display(); // inside obj
tShirt.countries.obj.printOut(); // inside countries

console.log(" ");
let newShortWay = tShirt.countries;
newShortWay.display();

// Nesting and accessing arrays in objects

let car = ["Ford", "pink", 2020, "enj", "xs"];
// let carName = car[0];
// let carColor = car[1];

let [carName, carColor, carYear, ...rest] = car; // I am creating three individual variables and assigning them to the original array --- this is a reference
console.log(" ");
console.log(carName);
console.log(rest);
console.log(car);
console.log(" ");

// Nesting and iterating over objects in arrays
const object = {
  firstName: "Ali",
  old: 22,
  country: "Germany"
};
console.log(object.firstName);
console.log(" ");
//{firstName, old, country} = object; // this is how NOT to do it
({ firstName, old, country } = object); // we use this to avoid overusing the dot notation
console.log(firstName);

// Destructuring assignment
// Extracting values from arrays: Array destructuring assignment

// Extracting values from objects: Object destructuring assignment

// FAKE TEST
// Return Keys and Values.
//Write a program that takes an object and returns an array which contains two arrays:
//one for the keys of the object and the other for the values of the object.
console.log("RETURN KEYS AND VALUES");

const myObject = {
  name: "Raquel",
  gender: "female",
  age: 24,
  passion: "dancing"
};
// const twoArray = {
//   propArray: function(userInput) {
//     let prop = Object.getOwnPropertyNames(userInput);
//     console.log(prop);
//   },
//   valArray: function(userInput) {
//     let val = Object.values(userInput);
//   }
//   let final = prop.concat(val);
// };
// console.log("property names ", twoArray.propArray(myObject));
// console.log("values ", twoArray.valArray(myObject));
// console.log(final);

let myArray = [];
function twoArray(userInput) {
  let prop = Object.getOwnPropertyNames(userInput);
  let val = Object.values(userInput);
  console.log(prop);
  console.log(val);
  return;
}
console.log(twoArray(myObject));
console.log(myArray);

// Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.
// Examples:
// isWaldoHere("is there wal here ?") ➞ false isWaldoHere("I found you Waldo!") ➞ true
//isWaldoHere("is wally here?") ➞ false isWaldoHere("waldo is here") ➞ true

console.log("WALDO");
function waldo(userString) {
  if (userString.includes("Waldo")) {
    return true;
  } else {
    return false;
  }
}
console.log(waldo("Is Waldo here?"));
console.log(waldo("Is Raul here?"));

// isPrime? Create a function that returns true if a number is prime and false if it's not.
//NB: a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
//The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
// Examples:
// isPrime(7) ➞ true isPrime(9) ➞ false isPrime(10) ➞ false
console.log("PRIME NUMBERS");
function isPrime(userNum) {
  if (userNum == 2) {
    return true;
  } else if (userNum % 2 !== 0 && userNum % 3 !== 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPrime(17));
console.log(isPrime(22));
console.log(isPrime(2));

// For the longest word. Create a function to find the longest word in a given string.
// i.e. longestWord("this is a web development course") ➞ "development"
console.log("LONGEST WORD");

// function longestWord(userString) {
//   let userArray = userString.split(" ");
//   //   console.log(userArray);
//   for (let i = 0; i < userArray.length; i++) {
//       userArray.length;

//       console.log(userArray[i]);
//     }
//   }
// }
// longestWord("Where is the longest word");
