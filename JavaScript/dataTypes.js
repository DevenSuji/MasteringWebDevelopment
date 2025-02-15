/* 

DATA TYPES
----------

Javascript has the following data types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol

*/ 

/*
LOGICAL OPERATORS
-----------------

&& => AND Operator Example a > 5 && a < 10

|| => OR Operator Example a > 5 || a < 10

! => NOT Operator Example !(a>5)

ARITHMETIC OPERATORS
--------------------

+ Addition
- Subtraction
* Multiplication
/ Division
** PowerOf
% Modulus

COMPARISON OPERATOR
-------------------

> Greater Than
< Lesser Than
== Equals
=== Strict Equality
!== Strict Non Equality
*/


// console.log(2 + 2);
// console.log(3 - 2);
// console.log(1 + 2 + 3 + 4 + 5 + 6);
// console.log(2 * 3);
// console.log(8 / 2);
// console.log(3 > 2);
// console.log(3 < 2);
// console.log(10 == 10);
// console.log(100 == "100") // This will return true
// console.log(100 === "100") // This will return false


// var currentTime = 10;
// console.log(currentTime > 9 && currentTime < 17)

// var overtime = 1;
// overtime += 2;
// overtime += 1;
// overtime += 2;
// overtime += 3;
// console.log(overtime); // 9


// var longString = "";
// longString += "Once";
// longString += " upon";
// longString += " a";
// longString += " time";
// longString += "...";
// console.log(longString); // "Once upon a time..."


/* 
OPERATOR PRECEDENCE AND ASSOCIATIVITY

*/

// var num1 = 2;
// var num2 = 5;
// var test1 = num1 % 2;
// var test2 = num2 % 2;
// var result1 = (test1 == 0);
// var result2 = (test2 == 0);
// console.log("Is", num1 , "an even number?", result1);
// console.log("Is", num2 , "an even number?", result2); 

// let result = 50;
// if (result > 40) {
//     console.log("Congratulations.... You've Passed")
// }
// else if (result === 50) {
//     console.log("You've just passed")
// }
// else {
//     console.log("Unfortunately you did not pass.")
// }


// SWITCH STATEMENT

// let place = 'Poppy';

// switch (place) {
//     case 'Gangtok':
//         console.log("Sikkim")
//         break;
//     case 'Calcutta':
//         console.log("West Bengal")
//         break;
//     case 'Lucknow':
//         console.log("Uttar Pradesh")
//         break;
//     default:
//         console.log("Switzerland")
//         break;
// }

// var age = 10;

// if (age >= 65){
//     console.log("You get your income from your pension")
// }
// else if (age < 65 && age >= 18) {
//     console.log("Each month you get a salary")
// }
// else if (age < 18) {
//     console.log("You get an allowance")
// }
// else {
//     console.log("The value of the age variable is not numerical")
// }

// var day = "Sunday";

// switch (day) {
//     case "Monday":
//         console.log("Read a book");
//         break;
//     case "Tuesday":
//         console.log("Watch a movie");
//         break;
//     case "Wednesday":
//         console.log("Read a book");
//         break;
//     case "Thursday":
//         console.log("PLay basketball");
//         break;
//     case "Friday":
//         console.log("Socialize");
//         break;
//     case "Saturday":
//         console.log("Chill");
//         break;
//     case "Sunday":
//         console.log("Barbeque???");
//         break;
//     default:
//         console.log("There is no such day")
// }

// FOR LOOP

// for (var i = 1; i <= 5; i++){
//     console.log(i)
// };
// console.log("Out Of The Loop")

// var counter = 10;

// while (counter > 0) {
//     console.log(counter);
//     counter = counter - 1
// };
// console.log("Happy New Year!!!")


// for (let i = 1; i < 6; i++) {
//     console.log(i);
// };
// console.log("Counting Completed")

// for (let i = 5; i > 0; i--){
//     console.log(i);
// };
// console.log("Countdown finished")

// var i = 1;

// while (i < 6) {
//     console.log(i);
//     i++;
// };
// console.log('Counting completed!')

// NESTED LOOPS

// for (let year = 2023; year < 2025; year++){
//     console.log(year);
//     for (let month = 6; month < 9; month++) {
//         console.log("-------------", month)
//     }
// }

// //nested loops - one inside another
// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     for (var secondNum = 0; secondNum < 10; secondNum++) {
//         console.log(firstNum + ", " + secondNum);
//     }
// }

//nested loops - one inside another
// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     for (var secondNum = 0; secondNum < 10; secondNum++) {
//         console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
//     }
// }

// //nested loops - one inside another 
// for (var i = 100; i > 10; i = i - 10) {
//     for (var j = 10; j > 4; j = j - 5) {
//         console.log(i + " divided by " + j + " equals " + i / j);
//     }
// }

// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < 7; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

// for (let i = 1; i <= 10; i++){
//     if (i == 1) {
//         console.log("Gold medal");
//     }
//     else if (i == 2) {
//         console.log("Silver medal");
//     }
//     else if (i == 3) {
//         console.log("Bronze medal");
//     }
//     else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 10; i++){
//     switch (i) {
//         case 1:
//             console.log("Gold medal");
//             break;
//         case 2:
//             console.log("Silver medal");
//             break;     
//         case 3:
//             console.log("Bronze medal");
//             break;          
//         default:
//             console.log(i);
//             break;
//     }
// }

// const medals = {
//     1: "Gold medal",
//     2: "Silver medal",
//     3: "Bronze medal"
// };

// for (let i = 1; i <= 10; i++) {
//     console.log(medals[i] || i);
// }

// var i = 7;
// var j = 2;

// if(i < 7 || j < 5) {
//   console.log("Hello");
// } else {
//   console.log("Goodbye");
// }


//var test = typeof("What is this?");

//var test = typeof(10);

//var test = typeof(3.14);

//var test = typeof(true);

//var test = typeof(1 < 2);

//var test = typeof([1,2,3]);

//var test = typeof({firstProperty: 1});

//var test = typeof(function abc(){ console.log("abc")});

// console.log(test)

var food = [];
food.push('Chocolate');
food.push('Ice cream');
food.push('Donut');

console.log(food[1])