//1. Calculate the perimeter of a square. Assume each side is 4.75cm.

let sqSide = 4.75;
let sqPerimeter = sqSide * 4; //or sqSide + sqSide + sqSide + sqSide

console.log(sqPerimeter);

//2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

let side1 = 5;
let side2 = 6;
let side3 = 7;
let triPerimeter = side1 + side2 + side3;

console.log(triPerimeter);

//3. Calculate the area of a square. Each side is 5cm.

let sqSide2 = 5;
let arSquare = sqSide2 * sqSide2; // or use Math.pow(5, 2, which will give you the result of = 5²

console.log(arSquare);

//4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

/*Heron's Formula
Mathematicians have known how to calculate the area of a triangle with three known sides for millennia.
They use Heron's Formula, named after Hero of Alexandria.
To use this formula, you first have to find the half-perimeter (s) of the triangle, which you do by adding all three sides and dividing the result by two.
For a triangle with sides a, b and c, the half-perimeter s = 1/2(a + b + c). Once you know s, you calculate area using this formula:

Area = square root [s (s - a) (s - b) (s - c)]*/

let halfTriPerimeter = (side1 + side2 + side3) / 2;
let heronsFormula =
  halfTriPerimeter *
  (halfTriPerimeter - side1) *
  (halfTriPerimeter - side2) *
  (halfTriPerimeter - side3);
console.log(Math.sqrt(heronsFormula)); //I used Herons Formula (add the resource as a link)

//5. Calculate the volume of a cube. Length of each side is 9cm.

let cbSide = 9;
let volCube = cbSide * cbSide * cbSide;

console.log(volCube);

//6. Calculate the three bills including tips: €22.35 + 10% tip, €26.67 + 15% tip, €35.92 + 20% tip

let bill1 = 22.35;
let bill2 = 26.67;
let bill3 = 35.95;

let tip1 = (bill1 * 10) / 100; // 10% = 1.1
let tip2 = (bill2 * 15) / 100; // 15% = 1.15
let tip3 = (bill3 * 20) / 100; // 20% = 1.20

console.log(tip1);
console.log(tip2);
console.log(tip3);

let billOneplusTip = bill1 * 1.1; //another way to phrase it
let billTwoplusTip = bill2 + tip2;
let billThreeplusTip = bill3 + (bill3 * 20) / 100; //another way to phrase it

console.log(`Bill nr. 1 totals ${billOneplusTip.toFixed(2)} €.`); // if you're adding something to what the exercise asks for, you have to explain why
console.log(`Bill nr. 2 totals ${billTwoplusTip.toFixed(2)} €.`);
console.log(`Bill nr. 3 totals ${billThreeplusTip.toFixed(2)} €.`);
