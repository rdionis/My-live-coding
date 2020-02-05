// object literal context
const o = {
  name: "Ali",
  age: 20,
  add: "strasse"
};
//Property accessors
// Dot notation object.property
o.name;
o.age;
// Bracket notation object[`property`]
o["add"] = "see str";
// Object.keys - i call the object and then add the method KEYS
console.log(Object.keys(o));
// Object.values
console.log(Object.values(o));
// Methods
o.print = function() {
  console.log(
    `hi ${this.name} you are very old ${this.age}` // when you use the "this" keyword, you can't use arrow notation to create a function
  ); /*JS can change the object name for THIS, so knows
    it is working with an object inside. REPLACE OBJECT NAME */
};
o.print();

function userData(name, address, age) {
  const obj = {
    name: userName,
    age: userAge,
    address: userAddress,
    outPut: function() {
      console.log("holaaaaaaa");
    }
  };
  return obj;
}
//this
// Object.prototype.hasOwnProperty()
const dress = {
  color: 343,
  size: "M",
  city: "Madrid"
};
console.log(dress.hasOwnProperty("sss"));
console.log(dress.hasOwnProperty("size"));

// Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
// Example
// let first = {firstName: "John"}
// let last = {lastName: "Smith"}
// Expected output:
// {firstName: "John", lastName: "Smith"}
const first = {
  firstName: "Raquel"
};
const last = {
  lastName: "Dionísio"
};

function exercise(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
console.log(exercise(first, last));

//Hadi's Solution

const fun = (x, o) => {
  return Object.assign(x, o);
};

//another option
const fun2 = (x, o, y) => {
  return { ...x, ...o }; //spread operator - here the use of the spread operator is to copy an object
};

const o1 = { name: "Ali" };
const o2 = { lastName: "Zorro" };
console.log(fun(o1, o2));
console.log(fun(o1, o2));
console.log(fun2({ name: "Ali" }, o2));

// Create an object that will receive: //receive always means function
// userName
// birthDay
// birthMonth
// birthYear
// Now your task is to find out the Zodiac sign of the user

function zodiac(name, day, month, year) {
  const identity = {
    userName: name,
    birthDay: day,
    birthMonth: month,
    birthYear: year,
    zodiacSign: () => {
      let birthDayInt = parseInt(identity.birthDay, 10);
      let birthMonthInt = parseInt(identity.birthMonth, 10);
      let arrZodiac = [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces"
      ];

      let result = "";
      let counter = 0;
    }
  };
}
let outerResult = identity.zodiacSign();
return `Hi, ${name}, you were born on ${day}.${month}.${year} and your Zodiac sign is ${outerResult}.`;
console.log(zodiac("Raquel", "21", "03", "1981"));
console.log(zodiac("Joana", "21", "02", "1981"));

//   if (
//     (birthDayInt <= 20 && birthMonthInt == 03) ||
//     (birthDayInt >= 20 && birthMonthInt == 02)
//   ) {
//     result = "Pisces";
//   }
//   return result;
// }
