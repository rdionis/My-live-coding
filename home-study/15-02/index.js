function logVisibleLightWaves() {
  // function declaration
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}
logVisibleLightWaves();

const logVisibleLightWaves1 = () => {
  // same thing as an arrow function // ES6 Syntax
  const lightWaves = "Moonlight";
  console.log(lightWaves);
};
logVisibleLightWaves1();
// console.log(lightWaves); // returns ReferenceError: lightWaves is not defined because lightWaves is a local variable only accessible inside of the function scope

const logVisibleLightWaves2 = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    // console.log(lightWaves) // will return "Northern Lights"
  }
  console.log(lightWaves); // returns "Moonlight"
};
logVisibleLightWaves2();

const vacationSpots = ["Bali", "Paris", "Tulum"];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

// Write your code below
const bobsFollowers = ["Fred", "Joseph", "John", "Marius"];
const tinasFollowers = ["Joseph", "John", "Phoebe"];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

console.log(mutualFollowers);

for (let i = 0; i < 99; i++) {
  if (i > 2) {
    break;
  }
  console.log("Banana.");
}

console.log("Orange you glad I broke out the loop!");
