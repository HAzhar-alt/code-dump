// ========= STRING MANIPULATION BASICS ========== //
const multilineSentence = "this is a \n multiline \n sentence.";

const insertedVariable = "THIS";
const variableSentence = `Use backticks to insert variables like ${insertedVariable}`;
console.log(insertedVariable.length); // get length of string (output: 4)

// HOW TO FIND SUBSTRINGS IN A STRING
console.log(fullSentence.indexOf("This")) // output: 0 (returns index of the first character of the string when it finds it which is 0)
console.log(fullSentence.indexOf("this")) // output: 41 (using indexOf is case sensitive so the first "this" it finds is at index 41 not index 0)

// ========== CHANGING CASE OF STRINGS ========== //

let mixedCaseString = "HeLLo WoRLd!";
let lowerCaseString = mixedCaseString.toLowerCase();
console.log(lowerCaseString); // output: "hello world!"
let upperCaseString = mixedCaseString.toUpperCase();
console.log(upperCaseString); // output: "HELLO WORLD!"

// ========== FINDING CHARACTERS ========== //
let fullSentence = "This is a sentence for doing things like this string manipulation.";
console.log(fullSentence[0]) // output: "T"
console.log(fullSentence[6]) //output: "s"

// GET THE LAST CHARACTER OF A STRING
console.log(fullSentence.length) //output: 66
console.log(fullSentence[fullSentence.length - 1]) // output: "."


// ========== STRING CHECKS ========== //
let phrase = "this is a phrase.";
let includesWord = phrase.includes("phrase");
console.log(includesWord); // output: true
includes = phrase.includes("Phrase");
console.log(includesWord); // output: false 


// ========== EXTRACTING OR CHANGING STRINGS ========== //

fullSentence = "This is a sentence for doing things like this string manipulation."; // this is the same as before, but I've re-declared it so you can quickly refer back to this

fullSentence.slice(0, 4); //output: "This"
fullSentence.slice(41); //output: "this string manipulation." (no end given so it will print till end of string)
fullSentence.slice(-13); //output: manipulation.

fullSentence.replace("sentence", "bottle"); //output changes sentence for bottle in string. This is case sensitive and will only change the first occurrence

let smallSentence = "   hello world!   ";
let trimmedSentence = smallSentence.trim();
console.log(trimmedSentence); //output: "hello world!" (cut out whitespace before + after)

// ========== REPEATING STRINGS ========== //

let word = "hello";
let repeatedWord = word.repeat(3); //number has to be positive and an integer
console.log(repeatedWord); //output: "hellohellohello"


// ========== CONVERT STRINGS TO NUMBERS ========== //
//~~ note: user prompts always come in as strings! ~~//
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("abc 3.14")); // NaN (parseFloat stops at the first non-digit it encounters)
console.log(parseFloat("-3.14.5")); // -3.14

console.log(parseInt("42.3")); // 42
console.log(parseInt("abc123")); // NaN (parseInt stops at the first non-digit it encounters)
console.log(parseInt("-42px")); // -42
