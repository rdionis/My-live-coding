//   Javascript in the browser
//  XMl, JSON, jQuery, Ajax, API

//  JS Engines:
//   V8 (Chrome, Node, Edge)
//    SpiderMonkey (Firefox)
//    Chakra (Internet Explorer)

//   DOM aka Document Object Module
//   DOM tree.

// Adding javascript to HTML:
// - The `<script>` tag
// - External JS with `<script src="...">`

// The Window object
// (objects functions and variables) are member of window object.
// document object is also member of the window object
// the window object contain many Properties amd methods

// -Host object-
// are objects supplied by a certain environment.
// like in browser environment you will find window
// in node.js environment you will find NodeList

// -Native object-
// re standard built-in objects provided by Javascript.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// window.alert("Hi you are here");
// let y = window.prompt("enter your name", "Ali");
// console.log(x);

function change() {
  window.document.getElementsByTagName("h1")[0].outerHTML =
    "<h6>Hi, this is me</h6>";
  let newBox = document.getElementById("main");
  console.log(newBox);
  newBox.style.backgroundColor = "red";
}
const multiply = () => {
  let userNum = document.querySelector("#num").value;
  //   console.log(userNum);
  let x = "";
  for (let i = 0; i <= 10; i++) {
    x += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  document.querySelector(".result").innerHTML = x;
};

const guessNum = () => {
  let userNum = window.prompt("enter a random number between 1 and 10");
  let rightNum = Math.floor(Math.random() * 10) + 1;
  let z = "";
  let counter = 1;
  for (let i = 0; i <= 3; i++) {
    if (userNum == rightNum) {
      window.alert(`Success, the number was ${rightNum}! Attempts: ${counter}`);
      break;
    } else {
      counter++;
      userNum = window.prompt("Nope, sorry! Try again!");
    }
    if (counter == 3) {
      window.alert(
        `Sorry, you failed to guess in three attempts. The number was ${rightNum}`
      );
      break;
    }
  }
  console.log(rightNum);
};
