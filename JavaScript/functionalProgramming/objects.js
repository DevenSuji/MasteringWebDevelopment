// Java Objects
//-----------------------------------------------------------------
// let apple = {};

// apple.color = "Red";
// apple.taste = "Sweet";
// apple.cost = "Rs 10";
// apple.weight = "150 Grams";

// console.log(apple.color)
//-----------------------------------------------------------------
// let assistantManager = {
//     name: "Kiran Kumar KM",
//     caste: "Khurba",
//     age: 39,
//     salary: 30000
// }

// console.log(assistantManager.name)

// assistantManager.phoneNumber = 9916253338

// console.log(assistantManager)
//-----------------------------------------------------------------
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}