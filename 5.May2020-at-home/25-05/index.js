// what is NodeJs?

// why NodeJs?

// process object
console.log(process);
console.log(process.argv);
console.log(`Hey ${process.argv[2]}`);
console.log("LALALALA");

process.argv.forEach((item, i) => {
  console.log(`${i} : ${item}`);
});
console.log("LALALALA");
const args = process.argv.slice(2);
console.log(args);
console.log(`Hey ${args[2]}`);
// fs (File System) built-in module in NodeJs
const fs = require("fs");
// read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
// write file
fs.writeFile("new.txt", "This is created file in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done 👍🏻");
});
console.log("Hi this is too fun");
