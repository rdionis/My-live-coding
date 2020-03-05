//comment your code so the people reading your code will get your logic

// Write a function that will give the alphabetical order for a passed character
//  i.e.  A -> 1
// B -> 2

// const sentence = "a";

// const index = 0;

// console.log(
//   "The character code " +
//     sentence.charCodeAt(index) +
//     " is equal to " +
//     sentence.charAt(index)
// );
// expected output: "The character code 113 is equal to q"
console.log("ALPHABETICAL ORDER");
const alphabet = character => {
  let index = 0;
  return character.toLowerCase().charCodeAt(index) - 96;
};
console.log(alphabet("C"));
console.log(alphabet("A"));
console.log(alphabet("b"));
console.log(alphabet("i"));

console.log("GERMAN NUMBER");

const germanNum = userText => {
  let result = "";
  let counter = 0;
  let userTextArr = userText.toLowerCase().split(" ");

  for (let i = 0; i < userTextArr.length; i++) {
    let firstThreeDigits = userTextArr[i].slice(0, 3);
    // console.log(firstThreeDigits);
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
    return `You did not enter a valid phone number.`;
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
