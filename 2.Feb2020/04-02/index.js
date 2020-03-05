console.log("ZAKARIA MONTH EXERCISE");
const checkMonths = txt => {
  let result = "";
  let inter = [];
  let seasons = {
    0: "Spring",
    1: "Summer",
    2: "Autumn",
    3: "Winter"
  };
  let months = [
    ["march", "april", "may"],
    ["june", "july", "august"],
    ["september", "october", "november"],
    ["december", "january", "february"]
  ];
  let strToArr = txt.toLowerCase().split(" ");
  for (let i = 0; i < months.length; i++) {
    inter = months[i].filter(val => strToArr.includes(val));
    if (inter.length > 0) {
      result = inter + " is in " + seasons[i];
    }
  }
  return result;
};
console.log(checkMonths("jfhfu november dsvnru"));

//objects
let arr = [2, 3];
console.log(typeof Object);
console.log(typeof arr);
console.log(typeof 2);

//objects
//keys, properties // you separate properties always with a comma

//keys can be properties or methods - keys are stored as individual strings

const o = {
  1: "Hadi", // 1 is the key, here also called property, and "Hadi" is the value
  2: "Ali",
  3: "Olga"
};
console.log(o);
const obj = {
  name: "Nancy",
  lastName: "saaaaa",
  age: 44,
  add: "xxx str"
};
console.log(obj);

//properties allow me to store more info in the same place (like seen above), instead of needing to create multiple variables for each value
let aliName = "Ali";
let aliLast = "something";
let aliAdd = "xxxx str";
let aliAge = 22;

// const <namespace> = {<key1>: <value1>, <key2>: <value2>}

const object = {
  //the keys are defined right away
  color: "Red",
  size: "big",
  year: 1990,
  arr: [1, 3, 5, 6, 5, 4]
};
console.log(object);

//Accessing properties with bracket notation - more common to create new property (but it's not a rule)
const car = {}; //empty object - when you don't know what will come up in your application
console.log(car); // returns empty
car["name"] = "Ford";
console.log(car);
car["year"] = 2020;
console.log(car);

//Accessing properties with dot notation  - more common to modify a property (but it's not a rule)

car.age = 22;
console.log(car);
car.age = 44; // it will rewrite the property key "age"
console.log(car);
console.log(car.name); // it will print the value of that specific property - object name.value
console.log(car["name"]); // same thing

const save = new Object();
const arr1 = new Array();
console.log(save);
console.log(arr1);

console.log(car);

//cool for 😎

for (let prop in car) {
  // go inside the object and go through each value
  console.log(`car.${prop}: ${car[prop]}`);
}

for (let prop in o) {
  console.log(`o.${prop}: ${o[prop]}`);
}

for (let prop in object) {
  console.log(`object.${prop}: ${object[prop]}`);
}

// //Object.entries()
const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  print: function() {
    //this is a method
    console.log("Hi, I am a cool function");
    console.log(`The user ${person.name} was born in ${person.birthYear}`);
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};

//Object.keys
console.log(Object.keys(person));
//Object.values
console.log(Object.values(person));

// //Object.entries() - for of

for (let [key, value] of Object.entries(person)) {
  console.log(`${key}:${value}`);
}

//Methods
//Methods are another type of key
//(there are two types of keys: properties and method)
// a kew whose value is a function is called a method

person.print(); //our very first own method
console.log(person.old());

// Object Person.
// Create an object named person. Loop through the object and print both the property and value of the object.
const person1 = {
  name: " Raquel",
  age: " " + 38,
  nationality: " Portuguese",
  loves: [" dance", " writing"]
};

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(" ");

console.log("for of");
for (let [key, value] of Object.entries(person1)) {
  console.log(`${key}:${value}`);
}
console.log(" ");

console.log("for in");
for (let prop in person1) {
  console.log(`${prop}: ${person1[prop]}`);
}

//Object.assign // you always need a property name/number and a value
const obj1 = { 1: 2, 2: 300 };
const obj2 = { 1: 4, 3: 3224 };
const obj3 = { name: "Raquel" };
const totalObj = Object.assign({ 4: 55 }, obj1, obj2, obj3); //source, target (if it's repeated, the source value will be overwritten by the target value)
console.log(totalObj);

// Get Values. Create a function that returns an array of all values of an object’s properties.
// Expected output:
// ["tea", "coffee", "milk"]
const objectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
};

function getObjectValues() {
  console.log(Object.values(objectValues));
}

getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
});

//Hadi's Solution
const getValues = object => {
  return Object.values(object); //will return an array of every value for my keys
};
console.log(getValues(car));
console.log(getValues(person));

// Add A Method. Create an object and add a method to that object
//which prints the values of the objects in a string.
// Example
// let person = {
//   firstName: "Ali",
//   job: "painter",
//   age: 20,
//   city: Berlin
// }
// Example of Expected Output “Ali is a 20 year old  in Berlin”.

let person2 = {
  firstName: "Ali",
  job: "painter",
  age: 20,
  city: "Berlin",
  print: function() {
    return `${person2.firstName} is a ${person2.age} year old in ${person2.city}.`;
  }
};
console.log(person2.print());

//Hadi's Solution
person.printOut = () => {
  return `Hi, ${person.name}, you are very young ${person.birthYear}`;
}; // this is the function I am assigning to my key, so my key is a method
console.log(person.printOut());

//Object.defineProperty() - it's a method - we use it to protect the property from being overwritten
Object.defineProperty(person, "birthDay", {
  // I am applying the method defineProperty to Object
  //first parameter: object, 2nd parameter: property name
  value: 20, // third parameter: value
  writable: false
});
console.log(person.birthDay);

//Object.defineProperties()

Object.defineProperties(person, {
  p1: {
    value: [], //the value has two parts: the value itself and the possibility of it being overwritten
    writable: true // you can skip this step if it's true - IT CAN BE OVERWRITTEN
  },
  p2: {
    value: {}, // I am passing an empty object
    writable: false // you should keep this step if it's false - IT CANNOT BE OVERWRITTEN
  },
  p3: {} // I am passing an empty value //  will return undefined
});

console.log(person.p1);
console.log(person.p2);
console.log(person.p3);

console.log(Object.keys(person));

// List Properties. Create a function that returns an array of properties of a javascript object.
// Example
let student = {
  name: "Mike",
  class: "4A",
  course: "English"
};

console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));

// }
// Expected output:
// ["name", "class", "course"]

const getProperties = obj => {
  return Object.getOwnPropertyNames(obj); // this will return ALL the properties even the ones you declare with defineProperties
};
console.log(getProperties(person));
console.log(Object.keys(person));

//EXERCISE
// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

function countLetters(str) {
  let arr = str.split("");
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChr = arr[i];
    result[currentChr] = countOccurrences(str, currentChr); //this is a inner function - here is the function call
  }
  return result;
}
console.log(countLetters("teste teste teste"));

// countLetters["name"] = "Ford";
// console.log(countLetters);
// countLetters["year"] = 2020;
// console.log(countLetters);

// function countOccurrences(string, letter) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == letter) {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(countOccurrences("yyyyyy", "y"));
// console.log(countOccurrences("Hi, I am Raquel", "p"));

function test() {
  for (var i = 0; i < 5; i++) {
    console.log("Loop: " + i);
  }
}
test();
console.log("After: " + i);
