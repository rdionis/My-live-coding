let header = document.querySelector("h1");
let result = document.querySelector(".result");
header.addEventListener("mouseover", redBg); //THIS IS THE FUNCTION CALL
// // header.removeEventListener("mouseover", function () {
// //  this.style.backgroundColor = "red";
// // });
//THIS IS NOT THE RIGHT WAY TO REMOVE EVENT - YOU NEED A FUNCTION NAME
header.addEventListener("mouseleave", whiteBg);

window.addEventListener("load", windowLoad);
//browser action

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Thanks for your feedback");
});
form.addEventListener("reset", () => {
  alert("Your Input has been cleared out");
});

// Simple calculator the user will be able to input two numbers for which they would like to do two types of calculations:
// Basic Addition
// Display the result of the calculation to the user immediately.
// Bounce  include other Mathematical  Operations, the user can choose the operation from a select list (+ * - / % )

const calculate = () => {
  let firstNumber = parseInt(document.getElementById("firstNumber").value);
  let secondNumber = parseInt(document.getElementById("secondNumber").value);
  let select = document.getElementById("select");
  if (select.option.value == "+") {
    document.getElementById("sumResult").value = firstNumber + secondNumber;
  }
  if (select.option.value == "-") {
    document.getElementById("sumResult").value = firstNumber - secondNumber;
  }
};
