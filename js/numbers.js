// ================= BASICS OF NUMBERS =================//
const posNumber = 42;
const negConversion = -posNumber;
console.log(negConversion); // -42;

let decimalPoints = 3.14159;
console.log(decimalPoints.toFixed(2)); // "3.14" (string output of number rounded to 2dps)

const remainder = 10 % 3; // output: 1 (10/3 = 3 remainder 1)
const indices = 10 ** 2 // output: 100 (10 to the power of 2 = 10*10 = 100)

const increment = 5;
console.log(++increment); // 6 (does the ++ before returning the value)
console.log(increment++); // 5 (returns the value first then does the ++)

const decrement = 5;
console.log(--decrement); // 4 (does the -- before returning the value)
console.log(decrement--); // 5 (returns the value first then does the --)

// ================= TYPE COERCION =================//

const numFirst = 5 + '10';
console.log(numFirst); // output: 510
console.log(typeof numFirst); // output: string

const strFirst = '10' + 5;
console.log(strFirst); //output: 105
console.log(typeof strFirst); //output: string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

// ================= MATH OBJECT =================//
// an object is a collection of related data and functions (called methods) stored together. The Math object is built-in and gives you access to useful functions
 
const smallest = Math.min(1,5,3,9);
const largest = Math.max(1,5,3,9);
console.log(smallest); // 1
console.log(largest); // 9

console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.3)); // 4
console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9

let randomNum = Math.random(); // any number between 0 and 1, excluding 1.
randomNum = Math.floor(Math.random()*20) + 1;
console.log(randomNum); // random number between 1-20

console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
console.log(Math.abs(-5)); // 5 (turns negatives to positives)
console.log(Math.pow(2,3)); // 8 (2 to the power of 3)

// ================= DATE OBJECT =================//
// The Date object is a built-in object that allows you to work with dates and times. It provides methods for getting and setting date and time values, as well as formatting them for display.

//use new to create a new date object
let d = new Date();
console.log(d);  // current date and time

//create variables to store the day month and year from d
let date = d.getDate();
let month = d.getMonth() + 1; // months are 0-indexed, so add 1 to get the correct month
let year = d.getFullYear();

console.log(`Today is ${date}/${month}/${year}.`);

// EXAMPLE USAGE: FIND AGE OF USER USING DATE OF BIRTH AND DATE OBJECT //
//ask the user to enter their date of birth
let dobFull = prompt("What is your date of birth? Please enter in the format DD/MM/YYYY");
let dobYear = dobFull.slice(6,10);
let dobMonth = dobFull.slice(3,5);
let dobDate = dobFull.slice(0,2);

//convert the input into a date object
let dob = new Date(dobYear, dobMonth - 1, dobDate);
console.log(dob);

//calculate the difference between the current date and date of birth
let ageYears = d.getFullYear() - dob.getFullYear();
console.log(ageYears);

//get current date & month, get dob date and month, compare them, to see if the birthdate has passed yet, if the date hasn't passed, -1 from the result
if (d.getMonth() < dob.getMonth() || (d.getMonth == dob.getMonth && d.getDate() < dob.getDate())) {
    ageYears--;
}
console.log(ageYears);