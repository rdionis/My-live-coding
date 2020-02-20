// Example
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// Change these values to test your function
console.log(randomRange(5, 15));

//ternary operator
// Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.
// The function should return "positive", "negative" or "zero".

function checkSign(num) {
  return num === 0 ? "zero" : num < 0 ? "negative" : "positive";
}

console.log(checkSign(10));

// We have defined a function called countdown with one parameter (n).
// The function should use recursion to return an array containing the integers n through 1 based on the n parameter.
// If the function is called with a number less than 1, the function should return an empty array.
// For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
// Your function must use recursion by calling itself and must not use loops of any kind.
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]

function rangeOfNumbers(startNum, endNum) {
  var arr = [];
  if (startNum < endNum) {
    const range = rangeOfNumbers((startNum += 1));
    arr.push(startNum, range, endNum);
  }
  return arr;
}

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(5, 15));

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var range = rangeOfNumbers(startNum, endNum - 1);
    range.push(endNum);
    return range;
  }
}

console.log(rangeOfNumbers(1, 4));

function rectangleArea(width, height) {
  let area = width * height;
  return area;
}

console.log(rectangleArea(5, 7));

//FUNCTION EXPRESSIONS

const plantNeedsWater = function(day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater("Tuesday"));
console.log(plantNeedsWater("Wednesday"));

//ARROW FUNCTIONS
const rectangleArea1 = (width, height) => {
  let area = width * height;
  return area;
};
console.log(rectangleArea1(8, 15));
