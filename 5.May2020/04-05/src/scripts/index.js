// Module Basics:

//  Using modules in the browser: <script type="module" src="...">

//  Connecting files: The `import` and `export` keywords

//  defer attribute
// tells the browser that it should go on working with the page, and load the script “in background”, then run the script when it loads.
// https://javascript.info/script-async-defer#defer

// https://docs.npmjs.com/creating-a-package-json-file

//JavaScript Object Notation (JSON)
// It's a file format, and data interchange format, that uses human-readable text to store and transmit data objects

import { data } from "./data.js";
let parsedData = JSON.parse(data);

const directorHtml = document.getElementById("director"),
  imgHtml = document.querySelector("img"),
  cardBody = document.querySelector(".card__body"),
  toHover = document.querySelector(".toHover"),
  section = document.querySelector(".list");

parsedData.forEach((obj) => {
  let { id, title } = obj;
  let card = `<div id = ${id}>${title}</div>`;
  section.innerHTML += card;
});
let listItems = document.querySelector(".list").querySelectorAll("div");
listItems.forEach((item) => {
  item.addEventListener("click", changes);
});

function changes() {
  listItems.forEach((item) => {
    this.style.backgroundColor = "#082e4d";
    this.style.transform = "translateX(2rem)";
    item.removeAttribute("style");
    toHover.style.opacity = "1";
  });
  let data = parsedData.find((data) => data.id == this.id);
  directorHtml.innerHTML = data.director;
  cardBody.innerHTML = data.description;
  imgHtml.src = data.image;
}
