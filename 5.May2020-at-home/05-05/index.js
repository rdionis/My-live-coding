// Blocking vs Non-Blocking code
// Blocking code
window.setTimeout(() => {
  // alert("Hi");
}, 10000);
// Non-blocking code

let checkPromise = new Promise((resolve, reject) => {
  let x = false;
  if (x) {
    resolve("everything is cool");
  } else {
    reject("sorry it's not cool");
  }
});

checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })
  .catch((message) => {
    console.log(`I am catch and ${message}`);
  });
// Promises are very similar to callbacks but they are a little bit clean on writing
// Promises are the best solution if you want to do something will take a long time to be done and you don't want your app  wait for it to be done, so it will work on the background, Like downloading an image or a video from another server

// Promisify setTimeout
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

let ms = 3000;
delay(ms).then(myFunction);

function myFunction() {
  let text = document.querySelector(".text");
  text.innerHTML = `It took me ${ms} ms to be done.`;
}
