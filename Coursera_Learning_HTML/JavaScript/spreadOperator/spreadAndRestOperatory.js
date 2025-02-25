/*
In this reading, you'll learn how to join arrays, objects using the rest operator. You will also discover how to use the spread operator to:

Add new members to arrays without using the push() method,
Convert a string to an array and
Copy either an object or an array into a separate object 
*/

// CONCATENATE USING SPREAD OPERATOR

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] //CONCATENATE
console.log(fruitsAndBerries)

// JOIN USING SPREAD OPERATOR

const flying = {wings: 2}
const car = { wheels: 4}
const flyingCar = {...flying, ...car}
console.log(flyingCar)

// USING THE SPREAD OPERATOR TO ADD ONE OR MORE MEMBERS TO AN EXISTING ARRAY

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// CONVERTING A STRING TO AN ARRAY USING THE SPREAD OPERATOR

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// COPY AN OBJECT INTO A SEPARATE ONE

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

// COPY AN ARRAY INTO A SEPARATE ONE

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);