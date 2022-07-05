// COMMENTS
//1. Single line comment
// This is a comment

//2. Multi line comment
/*
lkjadfk
askdljfk
skfkajf
jlajkd
alkdkj
*/

// Variables
/*
In javascript, if you want to declare a variable:
*var
let
const

*/
//var name = 'Vhinelle' // Global scoping

// let age = 25;
//  age = 50;
// console.log(age);

//  const firstName = 'Vhinelle';
//  let isFemale = false;
//  const pi = 3.132;

 // Strings
// String Interpolation
// Putting a variable inside a string
//Eg:
// let firstName = 'Vhinelle';
// let lastName = 'Amakye';
// //backtick(``)
// let myFullName = `My full name is ${firstName} ${lastName}`;
// //let myFullName = "My fullname is" + " " + firstName + " " + lastName;
// console.log(myFullName);

// In JavaScript everything is an object

// OPERATORS IN JavaScript
/*
 +, -, *, /, %, >, <, <=, >=, ==, !=, !, &&, ||

 let add = 56 + 4;
 let subtract = 57 - 43;
 let multiply = 58 * 55;
 let divide = 79 / 7;
 let mod = 5 % 2;
 let greater = 56 > 45;
 let less = 45 < 57;
 let lessOrEqual = 60 <= 70;
 let greaterOrEqual = 90 >= 75;
 let same = 34 == 34;
 let notEqual = 45 != '45';
 const male = !female;
 const isEligible = male && !female;
 const isHuman = female || male;
 */
 
 // DECISION STATEMENT(IF STATEMENTS)
 //Simple IF Statement
//  let evenNumber = 20;
//  if (evenNumber == 50) {
//     console.log('The number is even');
//  }
// If Else Statement
// let firstName = 'Esther';
// let age = 22;
// if (firstName != 'Esther' || age == 22) {
//     console.log('The name is not esther');
//  } else {
//     console.log('The name is Esther and she\'s 22 years old');
//  }

// Nested If statement
// let age = 16;
// if (age == 18) {
//     console.log('You are grown enough');
// } else if (age == 21) { 
//     console.log('You are 21 years old');
// } else if (age == 22) { 
//     console.log('You are 22 years old');
// } else {
//    console.log('You are under aged');
// }


// let age = 18;
// switch (age) {
//     case 18:  console.log('You are grown enough');
//     break;
//     case 21:  console.log('You are 21 years old');
//     break;
//     case 22:  console.log('You are 22 years old');
//     break;
//     default: console.log('You are under age');
//     }

//OBJECTS IN JAVASCRIP
// let Person = {
//     firstName: 'Vhinelle',
//     lastName: 'Amakye',
//     gender: 'female',
//     age: 23,
//     dateOfBirth: '23-07-2000'
// };//object literal

// console.log(`${Person['firstName']} ${Person.lastName} `);

// Assigment
/*
1. Create a GitHub account

2. A student from KNUST wants to calculate his GPA. 
With their current grading system,
80 - 100 - A
60 - 79 - B+
50 - 59 - B
40 - 49 - C
Below 40 - Trail

Create a GPA calculator for this student using the following
1. Nested if statements
2. Switch case statement


*/
//Solutions to Assignment
// let mark = 70;
// if(mark >= 80 && mark <= 100) {
//   console.log('A');
// } else if (mark >=60 && mark <= 79) {
// console.log('B+');
// } else if (mark >= 50 && mark <= 59) {
//     console.log('B');
// } else if (mark >= 40 && mark <= 49) {
//     console.log('C');
// } else {
//     console.log('Trail');
// }

//Swith Case

// let mark = 80;
// switch (mark) {
//     case 80:
//         console.log('A');
//         break;
//         case 79:
//             console.log('B+');
//             break;
//         case 59:
//             console.log('B'); 
//             break;
//         case 49: 
//             console.log('C');  
//             break;
//     default: console.log('Trail');
// }
    
// let Car = {
//   carName: 'Toyota',
//   carModel: 'V8',
//   carColor: 'Dark Black',
//   manufacturingDate: '2000'
// };

// console.log(Car['carName']);
// console.log(Car.carModel);
// console.log(Car['carColor']);
// console.log(Car.manufacturingDate);


// Naming convention 
//1. Pascal Naming convention
// Use this naming convention for Classes and Object Names
 //eg:
  
//  class ManAndWoman {

//  };

//  let House = {

//  };

 //2. Camel case naming convention
 //Use this naming convention for variable names and functions
 //eg:
//  let myFullName = 'Asante Usman';

//  let printMyName = function () {
//     console.log(myFullName);
//  }

 