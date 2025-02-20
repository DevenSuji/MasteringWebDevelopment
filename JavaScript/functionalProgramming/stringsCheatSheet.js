/*
var greet = "Hello, ";
var place = "World"

// LENGTH
console.log(greet.length);

// To read each individual character at a specific index in a string, starting from zero, I can use the charAt() method:  
console.log(greet.charAt(0));
console.log(greet.charAt(1));
console.log(greet.charAt(2));
console.log(greet.charAt(3));
console.log(greet.charAt(4));

// CONCATENATION
console.log("Wo".concat("rl").concat("d"))

// INDEX OF

console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1
console.log("ho-ho-ho".indexOf('-')); // 2

// UPPER AND LOWER CASE
console.log(greet.toUpperCase()); // "HELLO, "
console.log(greet.toLowerCase()); // "hello, "

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

var clothes = [];

clothes.push("Shirt", "Halfpant", "Tshirt", "Joggers", "Banyans")

console.log(clothes[2])
*/
var favCar = {};

favCar.color = "Pink";
favCar.covertible = true;

console.log(favCar);

favCar.turnkey = function() {
    console.log("Vrooom Vrooom");
    //return "Vroom Vroom!!!"
}

favCar.lightsOn = function() {
    console.log("BLINK BLINK")
    //return "BLINK BLINK"
}

console.log(favCar);
favCar.turnkey();
favCar.lightsOn();