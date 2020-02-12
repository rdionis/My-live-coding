// Destructuring objects as function parameters
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(22, { name: "Ali" });

// getter and setter --- are very rare to see nowadays, but now we know how they look like
const userData = {
  firsName: "Hadi",
  lastName: "Nsreeny",
  get fullName() {
    // this is the getter method
    console.log(`${this.firsName} ${this.lastName}`);
  },
  //this is the setter method
  set fullName(str) {
    let arr = str.split(" ");
    this.firsName = arr[0];
    this.lastName = arr[1];
  }
};
userData.fullName; // you don't need () to call getter and setter
userData.fullName = "Ali xxxxx";
userData.fullName; // getting new data

// constructor() // data type --- this is a function | the constructor only builds objects --- THIS IS OLD SCHOOL
//I will build a template for my object and every time I send the data, it will come back as an object ready for me
// we use Pascal notation for constructor and class --- so the name will start will a capital letter (we don't use camelCase for this)

// (this) referencing an empty object
// in js objects are dynamic so you can add property or change it
function Person(name, age, activities) {
  // we can't use ES6 syntax for in this case
  //I am using "this" to create a template that I can use every time --- I can't use "Person" here
  this.name = name; // I don't have an object here, so here "this" stands for an empty object that will receive the data when I get my constructor
  this.age = age;
  this.activities = activities;
  this.printOut = function() {
    console.log(`Hey, ${this.name}, you are too old: ${this.age}.`);
  };
}
//"new" is a preserved word from JavaScript
let ali = new Person("Ali", 22, ["party", "dance"]); //I want to tell JavaScript that I want a new version
ali.printOut();
let olga = new Person("Olga", 22, ["sleeping", "dance"]);
console.log(ali); // returns an object --- Person { name: 'Ali', age: 22, activities: [ 'party', 'dance' ] }
console.log(olga);
const ojb = new Date();
console.log(ojb);

function Girl(name, lastName, printGirl) {
  this.name = name;
  this.lastName = lastName;
  this.printGirl = function() {
    console.log(`${this.name} ${this.lastName}`);
  };
}
let raquel = new Girl("Raquel", "Dionísio");
raquel.printGirl();

// class
//instant

class Animals {
  //setting up my constructor
  constructor(_name, _kind, _hometown) {
    // these are parameters for my constructor function
    // the name "constructor" is fixed for this function
    this.name = _name;
    this.kind = _kind;
    this.hometown = _hometown;
  }

  //every method I will build will be inside the class but OUTSIDE the constructor function
  display() {
    console.log(
      `${this.name} is a very cute ${this.kind}, and lives in ${this.hometown}.`
    );
  }
}

let casper = new Animals("Casper", "Dog", "LA");
casper.display();
let sofi = new Animals("Sofi", "Fish", "Berlin");
sofi.kind = "Cat";
const dyson = new Animals("Dyson", "Fish", "Berlin");
console.log(sofi);
console.log(dyson);

class Color {
  constructor() {
    // you can use the constructor function with no parameters and in this case, we don't use the underscore "_"
    this.name = "";
    this.age = 0; // this is like the default value
    this.birthDay = 0;
  }
}
const red = new Color(); // I am executing the new class
console.log(red);
red.name = "Red";
red.age = 123545464;
console.log(red);

const date = new Date();
console.log(date);

//EXERCISES
console.log("EXERCISE PERSON CLASS");
// Person Class
// Create a class called Person which accepts the name of a person as a string,
//and his/her age as a number.
// The Person class should have a method called describe which returns
//a string with the following syntax: “name, age years old”.
// So, for example, if John is 19 years old, then the function describe of his object
//will return “John, 19 years old”.

class Person1 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`${this.name}, ${this.age} years old`);
  }
}
let erika = new Person1("Erika", "34");
erika.describe();
//TV Class
console.log("EXERCISE TV CLASS");
// Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// Add methods to increase and decrease volume. Volume can never be below 0 or above 100.
// Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
// Add a method to reset TV so it goes back to channel 1 and volume 50.
// It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.

class TV {
  constructor(_brand, _channel = 1, _volume = 50) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  increaseVol() {
    if (this.volume < 0) {
      this.volume = 0;
      console.log(
        `inc - Sorry, the volume was too low. It is now reset to ${this.volume}.`
      );
    } else if (this.volume < 100) {
      this.volume++;
      console.log(`inc - You can still increase the volume, if you want.`);
    }
  }
  decreaseVol() {
    if (this.volume > 100) {
      this.volume = 100;
      console.log(
        `dec - Sorry, the volume was too loud. It is now reset to ${this.volume}.`
      );
    } else if (this.volume > 0) {
      this.volume--;
      console.log(`dec - You can still decrease the volume, if you want.`);
    }
  }
  setChan() {
    this.channel = parseInt(Math.random() * 51);
    console.log(`You're now on channel ${this.channel}.`);
  }
  resetTv() {
    this.channel = 1;
    this.volume = 50;
    console.log(
      `You're back on channel ${this.channel} and volume ${this.volume}.`
    );
  }
  status() {
    console.log(
      `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    );
  }
}
let myTv = new TV("Sony", 30, 120);
console.log("myTv");
myTv.increaseVol();
myTv.decreaseVol();
myTv.setChan();
myTv.resetTv();
myTv.status();

let yourTv = new TV("LG", 5, -1);
console.log(" ");
console.log("yourTv");
yourTv.increaseVol();
yourTv.decreaseVol();
yourTv.setChan();
yourTv.resetTv();
yourTv.status();

let herTv = new TV("AEG", 56, 25);
console.log(" ");
console.log("herTv");
herTv.increaseVol();
herTv.decreaseVol();
herTv.setChan();
herTv.resetTv();
herTv.status();

// extends  and super()
// extends ---> inheriting the methods from the original class which is being called
console.log(" ");
class Person2 {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  display() {
    console.log(
      `Hey, ${this.name}, I am main class, I am ${this.age} years old.`
    );
  }
}
class Kid extends Person2 {
  // I am declaring a new class that is taking the features from another class (you can define which features)
  constructor(_name, _age, _height) {
    //super is a preserved keyword from JavaScript
    super(_name, _age); // specifies the property I want to inherit
    //substitutes the
    // this.name = _name;
    // this.age = _age;
    this.height = _height;
  }
  show() {
    return `Hey, I am ${this.name}, I am Child class and I am ${this.age} years old.`;
  }
}
let zain = new Kid("Zain", 10);
zain.display();
console.log(zain.show());
const nancy = new Kid("Nancy", 5);
console.log(typeof zain);
console.log(typeof Kid);

zain.increment = function() {
  console.log("Cool");
};
zain.increment(); // returns Cool

let names = ["Olga", "Ali", "Nancy", "Hadi"];
let result;
// Array.find()
result = names.find(name => name.length == 4); // find will return the first truthy result
console.log(result);
// Array.filter()
//filter will return an array
result = names.filter(name => name.length == 4);
console.log(result); // filter will return an array of all the cases that match the stated condition / array of all the truthy results
//map, reduce and filter work with individual indexes at a time

// Array.map()
names.map(x => console.log(x)); // map returns every individual index

// Array.reduce()
//will return one value
let letters = ["a", "c", "b", "e"];
let numbers = [2, 4, 6, 7, 8, 9];
sum = numbers.reduce((acc, cur) => acc + cur); //the order of the parameters is really important
console.log(sum);
avg = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
console.log(avg);

// Array.sort() // will sort the array upon the UTF-16 code ---> it will organize the letters
letters.sort(); // sort is not callback --- it changes the original array
console.log(letters);
names.sort();
console.log(names);

// new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
