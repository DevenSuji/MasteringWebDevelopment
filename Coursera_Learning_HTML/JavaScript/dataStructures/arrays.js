const grades = [75, 98, 65, 96, 80, 87, 42];

let gradesSum = 0;

for (i = 0; i < grades.length; i++) {
  gradesSum += grades[i];
}

console.log(gradesSum / grades.length);
console.log("*********************************************************");
const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
console.log("*********************************************************");
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}. ${veggie}`);
});
console.log("*********************************************************");
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
console.log("*********************************************************");
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log("*********************************************************");

// Convert an object to an array

const result = [];
const drone = {
    speed: 100,
    color: 'Yellow'
}
console.log("*********************************************************");

const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})

console.log(result)
console.log("*********************************************************");

// MAPS

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers)
console.log(bestBoxers.get(1));
console.log("*********************************************************");
// SETS

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple']

const uniqueFruits = new Set(repetitiveFruits)
console.log(uniqueFruits)