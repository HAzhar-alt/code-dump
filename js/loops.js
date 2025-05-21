//for loop
console.log("Countdown using FOR loop:");
for(let i = 10; i > 0; i--)  {
    console.log(i);
}

//while loop
console.log("Countdown using WHILE loop:");
let count = 5;
while(count > 0) {
    console.log(count);
    count--;
}
console.log("Liftoff!");

//do...while loop
console.log("Countdown using DO WHILE loop:");
let num = 5;
do {
    console.log(num);
    num--;
}
while (num > 0);
console.log("Liftoff!");

//factors greater than 1 for a given number
const number = prompt("Enter a number:");
for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}   