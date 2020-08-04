// npm i express
// npm i lowdb

//express
const express = require("express"); // I have this library from express
const app = express(); // starting my express
const port = 3003; //we want to avoid using the same port on more services
//lowdb
const low = require("lowdb"); //local database
const FileSync = require("lowdb/adapters/FileSync"); // this is the library name
//normally, 3000 is for the local host

const jsonFile = new FileSync("db.json"); //starting to read that file
const db = low(jsonFile); //convert that file into the database

//we are handling get requests
app.get("/new", (req, res) => {
  db.defaults({ articles: [], user: {}, num: 1 }).write();
  //we need to tell the database what to do: write, read, delete
  res.send("New db being init");
});

// adding new

app.get("/add", async (req, res) => {
  // URL is /add?id=1&title=I+like+water
  // console.log(req.query.id)
  const id = req.query.id;
  const title = req.query.title;
  await db.get("articles").push({ id: id, title: title }).write();
  res.send(`New db being entered with id=${id} and title = ${title}`);
}); // res.send is the way to send data to the user

//search
app.get("/find", async (req, res) => {
  //url /find?id=1
  const idToFind = req.query.id; //how to grab the URL from get
  res.send(db.get("articles").find({ id: idToFind }).value());
});

// update
app.get("/update", async (req, res) => {
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was increased by one, now num is = ${num}`);
});

//username
// this is the set method
app.get("/user", async (req, res) => {
  // url   /user?name=Hadi
  const name = req.query.name;
  await db.set("user.name", name).write();
  res.send(`Hey, ${name}`);
});

//Post method:
//url https://website.com/login
// {
//    'email': 'my@mail.co',
//     'pass': '000callme000'
//}

//how to handle the data coming out of the post body
app.post("/login", (req, res) => {
  const userName = req.body.email;
  const userPass = req.body.pass;
});

app.listen(port, () => {
  console.log(`server listen on http://localhost:${port}`);
});
