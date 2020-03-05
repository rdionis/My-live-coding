/*Addition.

Write a program to add up the numbers 1 to 20.*/

// Hadis Answer
let counterSum = 0;
for (let i = 1; i <= 20; i++) {
  counterSum += i; // will add the previous numbers to the current number
}
console.log(counterSum);

/*There are i bottles of beer on the wall. Write a program that will output,
“There is one bottle of beer on the wall.” “There are two bottles of beer on the wall”
up until there are five bottles.*/

// Hadis Answer
let text = "of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    // you can also write i > 1 instead of ==
    console.log(`There is ${i} bottle ${text}`);
  } else {
    console.log(`There is ${i} bottles ${text}`);
  }
}

/*The odd/even reporter. Write a program that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd, and report that to the screen
(e.g. “2 is even”).*/

for (let a = 0; a <= 20; a++) {
  if (a % 2 == 0) {
    console.log(`${a} is even`);
  } else {
    //you can also write (i % 2 == 1)...in this case you have to use "else if",
    //cause there are two conditionings, not just "else"
    console.log(`${a} is odd`);
  }
}
