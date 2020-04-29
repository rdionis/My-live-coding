// Traversing
//  Node vs Element Nodes
let ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
// console.log(ele.id);
let ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
let mainText = document.getElementById("text").firstElementChild;
console.log(mainText.textContent);
// nodeName, nodeType, id, innerText

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

// closest
let text = document.querySelector("span");
let closestElement = text.closest(".cool");
console.log(closestElement);

// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  if (name.matches(".teacher")) {
    console.log(`${name.textContent} is the teacher for FBW26`);
  }
});

let allChildren = document.querySelector("body").children;
console.log(allChildren);

// querySelector
let heading = document.querySelector("h1"); //if I have more h1, this will select only the first one
heading.style.backgroundColor = "red";

let menuList = document.getElementById("menu");
console.log(menuList.lastElementChild);

let allComments = (element) => {
  let arr = [];
  for (let i = 0; i < element.childNodes.length; i++) {
    let node = element.childNodes[i];
    if (node.nodeType == 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, allComments(node));
    }
  }
  return arr;
};

console.log(allComments(document));

const colorGen = () => {
  let result = "#",
    HexString = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += HexString[Math.floor(Math.random() * 16)];
  }
  result += "50";
  return result;
};
const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  if (userInput == "") {
    return alert("Write something Please");
  }
  let newLi = document.createElement("li");
  let textNode = document.createTextNode(userInput);
  newLi.appendChild(textNode);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
  let list = document.querySelectorAll("li:nth-child(odd)");
  list.forEach((item) => {
    item.backgroundColor = colorGen();
  });
  let span = document.createElement("span");
  //let text = document.createTextNode("x");
  span.classList.add("far", "fa-window-close", "close");
  //span.className = ;
  console.log(span.classList);
  //span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
  console.log(listAll);

  let close = document.querySelectorAll(".close");

  close.forEach((element) => {
    element.onclick = function () {
      // this.parentElement.style.display = "none";
      this.parentElement.remove();
    };
  });
};
