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
  list.forEach(({ style: item }) => {
    item.backgroundColor = colorGen();
  });
  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  let listAll = document.querySelectorAll("li");
  listAll.forEach((item) => {
    item.appendChild(span);
  });
};
