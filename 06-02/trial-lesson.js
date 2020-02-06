console.log([3, 4, 5][1]);
console.log([3, 4, 5][0]);
console.log([3, 4, 5].indexOf(4));
console.log([3, 4, 5].indexOf("i do not exist")); // -1, falls in the category of falthy
console.log(-1 === undefined); // false

console.log([3, 4, 5].find(num => num === 4)); //4
console.log([3, 4, 5].findIndex(num => num === 4));
console.log([3, 4, 5].findIndex(num => num > 3));
console.log([3, 4, 5].find(num => num > 3));

let arr = [3, 4, 5];
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift(1, 2, 3)); // returns the number of items in the array
console.log(arr);

console.log(arr.pop()); //returns the element that was removed from the end of the array
console.log(arr);

console.log(arr.push(5, 6, 7));
console.log(arr);

console.log(arr.reverse());
console.log(arr);

arr.forEach(num => console.log(num)); // you're using the forEach method and passing a function to it
//it's doing something to do each element of the array, but doesn't actually change the array - it's looping through it

["Bird", "Dog", "Cat"].forEach(animal => console.log("My pet is:" + animal));

console.log(arr.map(num => num + 1)); // I get a new array as the return value --- I'm creating a new array but I am not changing the original array
console.log(arr);
const increasedArr = arr.map(num => num + 1);
console.log(increasedArr); // now I assigned it to a new variable and it is saved

console.log(arr.filter(num => num < 4)); //returns a new array, which is the filtered result of calling this function to the array --- leaving the original intact
console.log(arr.filter(num => num < 0)); //if my condition is not happening, it returns a empty array

arr.filter((value, index) => {
  console.log(value, "is at index", index);
});

console.log(arr.reduce((result, current) => result + current, 0)); // reduces the array to one single element - it loops over the array
//the 0 is the initial value for the accumulator
console.log(arr.reduce((result, current) => result + current, 2));
console.log(arr.reduce((result, current) => result.concat([current]), [])); // it took an empty array and added to it every element of the original array
// here the [] is the initial value of the acc, it's what you add stuff to

console.log(
  // you usually don't need index and arrray --- the result(accumulator) and currrent are usually
  arr.reduce((result, current, index, array) => {
    console.log(
      "sum so far:",
      result,
      "current value",
      current,
      result,
      "index",
      index,
      "entire array length",
      array.length
    );
    return result + current;
  }, 0)
);

/*Exercise: .find() and .filter()


1. Which is the first animal with more than three letters?
2. Find all animals with more than three letters.*/

const animals = ["cat", "bird", "dog", "worm"];

console.log(animals.find(animal => animal.length > 3));
console.log(animals.filter(animal => animal.length > 3));
