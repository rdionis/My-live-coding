function newUser(fName, lName, age, hope) {
  // this is the outer function called userName
  let result = {
    firstName: fName, // each key will receive the value from each parameter
    lastName: lName,
    old: age,
    funThingsToDo: hope,
    printOut: function() {
      // this is an inner function as METHOD (lives inside of the outer function and it's a method - so I need to mention the object name to access it)
      return `Hi, ${this.firstName}, you are very old: ${this.old}.`; // I am using the dot notation to access the value of this property
      //this is the inner return - the inner function must have return
    }
  };
  // this is the outer return - it is the inner function call
  return result; //.printOut(); //because it is a method, you need to mention the object to execute the method from that object // a function inside an object is always a method
  //when using an object, you need a return 99 % of the time
}
//this is the outer function call
// console.log(newUser("Ali", "st", 15, { dance: "two" })); // the arguments must be in the same order as the parameters in the function declaration

let x = newUser("Ali", "st", 15, "dance"); // function call will replace the function with the value of return which here is result, so x is also an object
console.log("this is x", x);
console.log(x.printOut()); //I can pass an object as an argument

//Array
let arr = [2, { name: "ali", age: 22 }, 6];
console.log(arr[1]);
console.log(arr[1].age);

//array of objects
let arr2 = [
  {
    1: "Ali",
    age: 22,
    copy: function() {
      return "first index";
    }
  },
  {
    1: "Hadi",
    add: function() {
      return "second index";
    }
  },
  {
    1: "Olga",
    age: 22,
    sum: function() {
      return "third index";
    }
  }
];

//calling the function
//with dot notation
console.log(arr2[2].sum()); // arr2 is calling the array; [1] is calling the index inside the array; sum is calling the method (function inside the object); and the () is executing sum

// now with bracket notation
console.log(arr2[2]["sum"]());

console.log(arr2[0].copy());
console.log(arr2[1].add());

// console.log(typeof console.log); // console.log --- method is a function inside of an object
// console.log(typeof console); // console is an object
// console.log(typeof []); // array is an object

// Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: "John",
//   job: "teacher"
// }
// Expected Output:
// {"John": name, "teacher": job}

let person = {
  name: "Ali",
  job: "teacher"
};

function keysToValue(obj) {
  const keysValuesPair = Object.entries(obj); // this method will turn an object into an array
  console.log(keysValuesPair);
  let reversArr = [];
  for (let i = 0; i < keysValuesPair.length; i++) {
    reversArr.push(keysValuesPair[i].reverse());
  }
  console.log(reversArr);
  return Object.fromEntries(reversArr); // this method will turn an array into an object
}
console.log(keysToValue(person)); // person is an object
// Object.getOwnPropertyNames

//Clones vs. References

// ... spread operator

function zodiac1(name, day, month, year) {
  const result = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    zodiac: function() {
      let signNames = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn"
      ];

      let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
      // do something 🤓
      let yourZodiac = "";
      let userMonth = parseInt(this.birthMonth, 10);
      console.log(userMonth);
      for (let i = 0; i < endsAt.length; i++) {
        if (this.birthDay <= endsAt[i]) {
          yourZodiac = signNames[userMonth - 1];
        } else {
          yourZodiac = signNames[userMonth];
        }
      }

      return `Hey, ${this.userName}, your zodiac sign is ${yourZodiac}.`;
    }
  };
  return result.zodiac();
}
console.log(zodiac1("Hadi", "01", "09", "1989") + " This is the 2nd way.");
console.log(zodiac1("Raquel", "25", "08", "1981") + " This is the 2nd way.");
console.log(zodiac1("Sam", "07", "07", "1981") + " This is the 2nd way.");
console.log(zodiac1("Joana", "10", "03", "1981") + " This is the 2nd way.");
console.log(zodiac1("Erika", "10", "12", "1981") + " This is the 2nd way.");
console.log(zodiac1("Maria", "15", "05", "2007") + " This is the 2nd way.");
