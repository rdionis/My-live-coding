function redBg() {
  this.style.backgroundColor = "red";
}
function whiteBg() {
  this.style.backgroundColor = "white";
}
function newUser() {
  result.innerHTML += "Hi this is you <br>";
}

function windowLoad() {
  // setInterval(newUser, 1000);
  // alert("Hi new person");
}

const stop = () => {
  header.removeEventListener("mouseover", redBg);

  header.removeEventListener("mouseleave", whiteBg);
};
function changeColor() {
  event.preventDefault();
  form.style.backgroundColor = "pink";
}

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
  let firstNumber = document.getElementById("firstNumber").value;
  let secondNumber = document.getElementById("secondNumber").value;
  let select = document.getElementById("select");
  console.log(select.value);

  switch (select.value) {
    case "+":
      document.getElementById("sumResult").value =
        parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case "-":
      document.getElementById("sumResult").value =
        parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case "*":
      document.getElementById("sumResult").value =
        parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case "/":
      document.getElementById("sumResult").value =
        parseInt(firstNumber) / parseInt(secondNumber);
      break;
  }
  if (isNaN(firstNumber) || isNan(secondNumber)) {
    alert("These are invalid numbers! What were you thinking?!");
  }
  if (firstNumber.length == 0 || secondNumber.length == 0) {
    alert("You're missing a number!");
  }
  //THESE TWO ARE NOT WORKING VERY WELL TOGETHER
};
