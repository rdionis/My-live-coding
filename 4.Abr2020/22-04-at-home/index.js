document.write("Hey, This is me");
document.write("<h3> Hadi </h3>");

const create = () => {
  let newElement = document.createElement("div");
  let newText = document.createTextNode("I am a new element");
  let newElement2 = document.createElement("div");

  let newText2 = document.createTextNode("I love you");
  //console.log(newElement);
  newElement.appendChild(newText);
  newElement2.appendChild(newText2);

  document.body.appendChild(newElement);
  document.body.appendChild(newElement2);
};
const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  // console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);

  //this line will clear the text in the input element
  document.querySelector("#userText").value = "";
};
