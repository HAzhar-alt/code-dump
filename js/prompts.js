// let prompt = prompt("Choose a number"); // ERROR, prompt is a bad variable name https://www.w3schools.com/js/js_reserved.asp
let userPrompt = prompt("Choose a number");

console.log("userPrompt = " + userPrompt);
console.log("userPrompt type = " + typeof userPrompt);

// ================= CONVERTING USER PROMPTS TO NUMBER =================//
console.log(parseFloat(userPrompt));
console.log("parseFloat(userPrompt) type = " + typeof userPrompt); // string
let floatPrompt = parseFloat(userPrompt); // store converted prompt in new variable
console.log("floatPrompt type = " + typeof floatPrompt); // number

let intPrompt = parseInt(userPrompt);

console.log("intPrompt type = " + typeof intPrompt); // number

// optional content: a different way to convert to number
let conversion = +userPrompt;
console.log("userPrompt = " + userPrompt);
console.log("conversion = " + conversion); // NaN if string is inputted
console.log("conversion type = " + typeof conversion); // still outputs number even if string is inputted. Not a good way to do it!

