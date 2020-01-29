// DONE
// Create a function that will calculate how many times empty space occurred in a given string
//by the user and print out only the characters number
console.log("EXERCISE HOW MANY TIMES EMPTY SPACE");

const emptySpaces = userString => {
  let counter = 0;
  for (let i = 0; i < userString.length; i++) {
    if (userString[i] == " ") {
      counter++;
    }
  }
  return counter;
};

console.log(emptySpaces("Hello, I am Raquel."));
console.log(emptySpaces("           "));

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.
console.log("EXERCISE TAXES");

const taxes = (username, salary, ...kidsNames) => {
  let finalSalary = 0;
  for (let i = 0; i < kidsNames.length; i++) {
    if (i == 1) {
      finalSalary = salary * 0.7;
    } else if (i == 2) {
      finalSalary = salary * 0.75;
    } else if (i > 2) {
      finalSalary = salary * 0.8;
    } else if (i == 0) {
      finalSalary = salary * 0.45;
    }
  }
  result = `Dear ${username}, after deducting taxes, your salary amounts to a total of ${finalSalary}.`;
  return result;
};
console.log(taxes("Raquel", 50000, "Vera"));
console.log(taxes("Gabriela", 50000, "Luísa", "Tiago"));
console.log(taxes("Zakaria", 50000, "Ivan", "Rita", "Angelika"));

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number
console.log("EXERCISE PHONE NUMBER");

const germanNum = userText => {
  let userTextArr = userText.split(" ");
  let result = 0;
  for (let i = 0; i < userTextArr.length; i++) {
    if (
      (userTextArr[i].substring(0, 3) == "030" ||
        userTextArr[i].substring(0, 3) == "017") &&
      userTextArr[i].length == 10
    ) {
      result = userTextArr[i];
    } else {
      result = "This is not a valid German number.";
    }
  }
  return result;
};
console.log(germanNum("Hi, my number is 0172231048"));
console.log(germanNum("I love you"));
console.log(germanNum("My number is 4567891366"));
console.log(germanNum("My number is 4567891366888877"));

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx
console.log("EXERCISE BANK ACCOUNT - still not working");

const validGermanAccount = userBankAccount => {
  let userArr = userBankAccount.split(" ");
  let result = 0;
  for (let i = 0; i < userArr.length; i++) {
    let twoFirstDigits = userArr[i].substring(0, 2);
    let lastDigits = userArr[i].substring(3, userArr[i].length);
    if (
      twoFirstDigits == "DE" &&
      !isNaN(lastDigits) &&
      userArr[i].length == 22
    ) {
      result = "This is a valid German Bank Account.";
      continue;
    } else {
      result = "This is NOT a valid German Bank Account.";
    }
  }

  return result;
};
console.log(validGermanAccount(" DE12345678987456321478 gg"));
console.log(validGermanAccount("asf"));

//NEVER DO THIS
// function display (str){
// str = 0; // we are emptying the user input

function display(...kids) {
  let newArr = kids.toLowerCase().split(" ");
  return newArr;
}

console.log(display("Hadi")); //this is my return
//console.log(newArr); // this won'T work --- newArr is a local variable, so it can't be accessed outside of the function
