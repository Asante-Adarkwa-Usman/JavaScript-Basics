//FUNCTION
//Types: Functions that returns a value and a function that does not return a value(void).

// Function definition
//1.
// function yourFunctionName() {
//   return 'myFunction';
// }

// //2.
// let myFunction = function() {
//     return 'A new function';
// }

// //3.Arrow syntax
// const myNewFunction = () => {
//     return 'A new arrow function';
// }

// const addTwoNumbers = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber;
// }

// //Calling the function addTwoNumbers
//  console.log(addTwoNumbers(45, 89));

//  // A function that returns only even numbers from 1 to 100
// const evenNumbers = () => {
   
//         for (let i = 1; i <= 100; i++) {
//             if (i % 2 == 0) {
//                console.log(`${i} is even`);
//             }
//         }
    
// }
// //calling
// evenNumbers();
 
//Print full name
const fullName = (firstName, middleName, lastName) => {
    return `${firstName} ${middleName} ${lastName}`;
   // return firstName + ' ' + middleName + ' ' + lastName;
}
console.log(fullName('Asante','Adarkwa','Usman'));

// Assignment 
//Using this object
let PersonObject = {
    firstName: 'Asante',
    middleName: 'Adarkwa',
    lastName: 'Usman',
    age: 35,

};
// Using this object, write
//1. A function that returns fullName of the person object.
//2. A function that adds properties 'gender' and 'weight' to the person object.
