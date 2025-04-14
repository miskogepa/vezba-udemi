/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
// let cajevi =  ["green tea", "black tea","milovan je programer", "chai", "oolong tea"];

// let selectedTeas =[];

// for (let i = 0; i < cajevi.length; i++) {
//     if (cajevi[i]==="chai") {
//         break
//     }
//     selectedTeas.push(cajevi[i])
// }

// console.log(selectedTeas);



/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

// let gradovi = ["London", "New York", "Paris", "Berlin"];
// let visitedCities=[];
// for (let i = 0; i < gradovi.length; i++) {
//     if (gradovi[i]==="Paris") {
//         continue
//     }
//     visitedCities.push(gradovi[i])
// }
// console.log("gradovi pre if iz niza gradovi");
// console.log(gradovi);
// console.log('fradovi iz niza visitedCities bez Paris ');
// console.log(visitedCities);




/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

// let brojevi = [1, 2, 3, 4, 5];
// let maliBrojevi = [];

// for (const broj of brojevi) {

//     if (broj === 4) {

//         break

//     }

//     maliBrojevi.push(broj)

// }
// console.log(maliBrojevi);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

// let cajevi = ["chai", "green tea", "herbal tea", "black tea"];

// let preferredTeas = [];

// for (const caj of cajevi) {

//     if (caj === "herbal tea") {
//         continue
//     }

//     preferredTeas.push(caj)
// }

// console.log(preferredTeas);


/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

// let numbers = [2, 5, 7, 9];

// let doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] === 7) {

//         continue

//     }

//     doubledNumbers.push(numbers[i] * 2)

// }
// console.log(doubledNumbers);


/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let cajevi = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];

for (const caj of cajevi) {

    if (caj.length > 10) {

        break

    }

    shortTeas.push(caj)

}


console.log(shortTeas);