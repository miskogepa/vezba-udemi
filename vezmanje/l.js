/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`;
// }
// let teaOrder = makeTea("mica")
// console.log(teaOrder);


/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/


// function orderTea(teaType) {
//     function confirmOrder() {
//         return `Order confirmed for chai`
//     }
//     return confirmOrder()
// }

// let caj = orderTea("mica");
// console.log(caj);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

// const calculateTotal = (price, quantity) => {
//     return price * quantity
// }

// let totalCost = calculateTotal(2,6)

// console.log(totalCost);




/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

// function makeTea(typeOfTea) {}

// function processTeaOrder(teaFun) {

// }



/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/


function createTeaMaker() {
    return function (teaType) {
        return `making ${teaType} `
    }
}

let teaMaker = createTeaMaker()
console.log(teaMaker);