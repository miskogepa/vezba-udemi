/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/


// let sum = 0;
// let brojac = 0;

// while (brojac <= 5) {
//     sum += brojac
//     brojac++
// }
// console.log(sum);


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

// let countdown = []
// let i = 5

// while (i >= 1) {
//     countdown.push(i);
//     i--;
// }
// console.log(countdown);


/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let teaCollectionc = []
// let tea;

// do {
//     tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

//     if (tea !== "stop") {
//         teaCollection.push(tea);
//     }


// } while (tea !== "stop");

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let niz = [2, 4, 6];

for (let index = 0; index < niz.length; index++) {
    takeNumber = niz[index] * 2;
    multipliedNumbers.push(takeNumber);

}
console.log(multipliedNumbers);



/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/


