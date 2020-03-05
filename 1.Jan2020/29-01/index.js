// DONE
// Create a function that will calculate how many times empty space occurred in a given string
//by the user and print out only the characters number
console.log("EXERCISE HOW MANY TIMES EMPTY SPACE");

const emptySpaces = userString => {
  let counter = 0;
  for (let i = 0; i < userString.length; i++) {
    // i mustn't be equal to zero
    if (userString[i] == " ") {
      counter++;
    }
  }
  return counter;
};

console.log(emptySpaces("Hello, I am Raquel."));
console.log(emptySpaces("           "));

//DONE
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

//DO IT AGAIN
//Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx
console.log("EXERCISE BANK ACCOUNT - still not working");

const validGermanAccount = userInput => {
  let result = "";
  let counter = 0;
  let arrInput = userInput.toLowerCase().split(" ");
  //console.log(arrInput);
  for (let i = 0; i < arrInput.length; i++) {
    let twoFirstChr = arrInput[i].slice(0, 2);
    //console.log(twoFirstChr);
    let lastChr = arrInput[i].slice(2, arrInput[i].length);
    //console.log(lastChr);
    if (twoFirstChr == "de" && arrInput[i][2] >= 0 && arrInput[i][2] <= 9) {
      if (lastChr.length !== 20 || isNaN(lastChr)) {
        result = `This is NOT a valid bank account: ${arrInput}.`;
        counter++;
      } else if (lastChr.length == 20) {
        result = `This is a valid German Bank Account.
      The bank account is DE${lastChr}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    result = "There is no bank account in this text.";
  }
  return result;
};
console.log(
  validGermanAccount("DE12345678987456321478 is the number of my account")
);
console.log(validGermanAccount("DE12345678987456321478"));
console.log(validGermanAccount("asf"));
console.log(
  validGermanAccount(
    "Hi, my bank account number is DE12345678987456321478 ooo."
  )
);
console.log(validGermanAccount("DE123456"));
console.log(validGermanAccount("de lete"));

//Hadi's solution
console.log(" ");
console.log("BANK ACCOUNT - HADI SOLUTION");
const bankChecker = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    let firstTwoChr = strToArr[i].slice(0, 2);
    let remainderStr = strToArr[i].slice(2, strToArr[i].length);
    //console.log(remainderStr);
    if (firstTwoChr == "de" && strToArr[i][2] >= 0 && strToArr[i][2] <= 9) {
      if (remainderStr.length != 20 || isNaN(remainderStr)) {
        result = `This is not a valid bank account: ${strToArr[i]}`;
        counter++;
      } else if (remainderStr.length == 20) {
        result = `The bank account is DE${remainderStr}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `There was no bank account in the text`;
  }
  return result;
};
console.log(bankChecker("DE12345678987456321478 is the number of my account"));
console.log(bankChecker("DE12345655555556321478"));
console.log(bankChecker("asf"));
console.log(
  bankChecker("Hi, my bank account number is DE12345678987456321478 ooo.")
);
console.log(bankChecker("DE123456"));
console.log(bankChecker("delete")); //THIS ONE DOESN'T WORK

//NEVER DO THIS
// function display (str){
// str = 0; // we are emptying the user input

// function display(...kids) {
//   let newArr = kids.toLowerCase().split(" ");
//   return newArr;
// }

// console.log(display("Hadi")); //this is my return
// console.log(newArr); // this won'T work --- newArr is a local variable, so it can't be accessed outside of the function

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number
console.log(" ");
console.log("EXERCISE PHONE NUMBER");

const germanNum = userText => {
  let result = "";
  let counter = 0;
  let userTextArr = userText.toLowerCase().split(" ");

  for (let i = 0; i < userTextArr.length; i++) {
    let firstThreeDigits = userText[i].slice(0, 3);
    if (firstThreeDigits == "030" || firstThreeDigits == "017") {
      if (isNaN(userTextArr[i]) || userTextArr[i].length !== 10) {
        result = `This is not a valid German phone number: ${userTextArr}`;
        counter++;
      } else if (userTextArr[i].length == 10) {
        result = `The phone number is ${userTextArr[i]}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `You did not enter a phone number.`;
  }
  return result;
};

console.log(germanNum("0172231048"));
console.log(germanNum("0172231048"));
console.log(germanNum("Hi, my number is 0172231048"));
console.log(germanNum("0172231048 is my number"));
console.log(germanNum("I love you"));
console.log(germanNum("My number is 4567891366"));
console.log(germanNum("My number is 4567891366888877"));
console.log(" ");
console.log("PHONE NUMBER - HADI SOLUTION");

const phone = str => {
  let result = "";
  let counter = 0;
  let strToArr = str.toLowerCase().split(" ");

  for (let i = 0; i < strToArr.length; i++) {
    let firstThreeDigits = strToArr[i].slice(0, 3);
    if (firstThreeDigits == "030" || firstThreeDigits == "017") {
      if (isNaN(strToArr[i]) || strToArr[i].length !== 10) {
        result = `This is not a valid phone number ${strToArr[i]}`;
        counter++;
      } else if (strToArr[i].length == 10) {
        result = `The phone number is ${strToArr[i]}`;
        counter++;
      }
    }
  }
  if (counter == 0) {
    return `This is no phone number`;
  }
  return result;
};
console.log(phone("Phone"));
console.log(phone("Hi my 030221A398 number is "));
console.log(phone("I have a phone number 0302212219"));
console.log(phone("0302212219"));
