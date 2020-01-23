//Mathematical expressions: +,-,*,/,%
console.log(1*4);

//Boolean expressions: comparison operators (===, !==, >=, <=, <)
console.log(1>=4);
//var
let x = 3;
let y = 3;
let str = "This is text";
let c = false; 
let t = "3";
var newVar = 0;
const z = 15;

//typeof
console.log(c);
let result = 0;
console.log(x);
console.log(y);
//ternary condition ? exprIfTrue : exprIfFalse
let kid = 22;

// Conditional Statements
(kid > 16) ? console.log("Go Party") : console.log("Stay Home");
let drive = 4;
(drive > 18) ? console.log("Baby, you can drive my car") : console.log("Nope, sorry.")

//length

// method
let name= "raquel";
console.log(typeof name);// will print the type of var name

console.log(name.length); // will print how many char in name with spaces (number)
let lastName = "dionísio";
console.log(lastName.length);

//Str[0]
console.log(lastName[2]);
let email = "xxxxxxxxxxx@gmail.com";
console.log(email[11]);
(lastName[0] === "N") ? console.log ("cool"): console.log ("Not cool");

//substring
let rest0fStr = lastName.substring(5);
console.log(rest0fStr);

//.toUpperCase

let str3 = name.toUpperCase();
console.log (str3);
console.log (name);

//.toLowerCase
let smallStr = str3.toLowerCase();
console.log (smallStr);
let userName = "rAQuEl";
let firstChr = userName[0].toUpperCase();
let restOfNameChr = userName.substring(1).toLowerCase();
console.log (firstChr + restOfNameChr);

// comment  

/*
 comment with multiple lines

*/
let var1 = 0;
let var2 = null; //-> null is a var with no value
let var3; // undefined
console.log(var1);
console.log(var2);
//camelCase vs. snake case (snake case is NOT recommended)
let firstName = "raquel";
//.includes - is a method
let text = firstName.includes("h");
let emailCheck = email.includes("@");

console.log(text);
console.log(emailCheck);

let longText = "This is long text";
let subSTr = longText.substring(2, 4);
console.log(subSTr);


//exercise
// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let park = "I can walk in the park all day!";
let subSTr2 = park.substring(18, 22);
console.log (subSTr2);

// 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let world = "Hello World";
let str4 = world.toUpperCase();
console.log (str4);

// 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let earthlings = "Earthlings";
let str5 = earthlings.toLowerCase();
console.log (str5);

// 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let javascript = "JavaScript";
let subSTr3 = javascript.substring(3, 6);
console.log (subSTr3);


// 5. Check if the sentence “nice shoes” contains the letter l.
let shoes = "nice shoes";
let shoescheck = shoes.includes ("l");
console.log (shoescheck);

// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.

//my improvised solution
let a = "n";
let b = "s";
console.log (a+shoes+b);

//the correct solution
let text111 = "Door";
let firstChr1 = text111[0];
console.log(firstChr1+text111+firstChr1);

//more stuff

let str44 = "this is longstr";
let shortStr = (str44.length-3);
console.log (shortStr);

let str45 = "this is longstr";
let shortStr1 = str45.substring(str45.length-3);
console.log (shortStr1);

// .slice
let shortStr2 = str44.slice(5);
console.log(shortStr2);

//`his ${firstName}`

let firstName1 = "Raquel";
let lastName2 = "Dionísio";
let address = "xxxxxx, 12222 Berlin"
let niceText = `Hi ${firstName1} nice that you live in ${address} my door is always open`;
console.log(niceText);

//Global vs Local
console.log(x);

var globalVar = "this is global";

function sum(){
    let localVar = "this is local";
    console.log(globalVar);
    console.log(localVar);
}

function sub(){
    let localVar = "this is local";
    console.log(globalVar);
    console.log(localVar);
}

sum();
sub();
console.log(globalVar);

//Hoisting (var) allows me to use the function even before I declare the variables - Hoisting works only with var

var newHoisted = "text";
console.log

//++ += -- -=

let num1 = 1;
console.log(num1); // 1

num1 = num1 + 1; // 1 + 1 = 2
console.log(num1);// 2

num1 += 4; // 2 + 4 = 6
console.log(num1); // 6

num1 -= 4; // 6 - 4 = 2
console.log(num1); // 2

num1 *= 4; // 2 * 4 = 8
console.log(num1); // 8

let i = 1;
let xx = i++;
// i--;
console.log(xx);


// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
/*
let first3Chr = epy[12, 14];
console.log(first3Chr+epy+first3Chr);*/

let f = "I am so sleepy"
console.log(f);
let shortStr3 = f.slice(f.length-3);
console.log (shortStr3);
let longStr1 = shortStr3 + f + shortStr3;
console.log (longStr1);



//8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.

let r = "I just want to go to bed";
let str300 = r.toUpperCase();
console.log (str300);
let r300 = r.includes("Java");
console.log (r300);



// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ

let newString = "hi, this is long text and I do know";
let firstChr3 = newString[0];
let lastChr = newString [newString.length-1];
let shortStr4 = newString.substring(1, newString.length-1);
console.log(shortStr4);
console.log(lastChr + shortStr4 +firstChr3);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.

let dream = "Dance";
let money = "Web";
let passion = "Writing";
//let mylife = `My dream is ${dream}, the ${money} will give me money and my passion is ${passion}.`;
//console.log(mylife);
console.log(`My dream is ${dream}, the ${money} will give me money and my passion is ${passion}.`);

//11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.

let fox = "the quick brown fox";
let firstChr2 = fox[0].toUpperCase();
let restOfNameChr1 = fox.slice(1);
console.log (firstChr2 + restOfNameChr1);


//Increment - WTF

let q = 1;
q++;
++q;
console.log(q);

//Decrement - WTF
let u = 1;
u--;
console.log(u);
