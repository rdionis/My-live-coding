// Module Basics:

//  Using modules in the browser: <script type="module" src="...">

//  Connecting files: The `import` and `export` keywords

//  defer attribute
// tells the browser that it should go on working with the page, and load the script “in background”, then run the script when it loads.
// https://javascript.info/script-async-defer#defer

// https://docs.npmjs.com/creating-a-package-json-file

//JavaScript Object Notation (JSON)
// It's a file format, and data interchange format, that uses human-readable text to store and transmit data objects

import { data } from "./data.js"; //WHAT I WANT TO IMPORT AND FROM WHERE

let parsedData = JSON.parse(data); // I AM CONVERTING JSON INTO AN OBJECT THAT JS WILL UNDERSTAND
const section = document.querySelector("#bread");
console.log(parsedData);

parsedData.forEach((obj) => {
  console.log(obj);
  let { id, title, ingredients, image } = obj; //EXTRACTING KEYS FROM THE OBJECT
  let card = ` <div id=${id}>
  <h2> ${title}</h2>
  <img src=${image} alt=${title}>
  <h6> ${ingredients}</h6>
  </div>
  `;
  section.innerHTML += card;
});
