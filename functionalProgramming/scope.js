// Task 1: Build a function-based console log message generator
function consoleStyler(colour, background, fontsize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message);
    console.log(style);
}

// // function getDistance(mph, h) {
// //     return mph * h
// // }
// // var mph = 60;
// // var h = 2;
// // var distance = getDistance(mph, h);
// // console.log(distance)

// //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// //creating an object
// // var virtualPet = {
// //     sleepy: true,
// //     nap: function() {
// //         this.sleepy = false
// //     }
// // }
// // console.log(virtualPet.sleepy) // true
// // virtualPet.nap()
// // console.log(virtualPet.sleepy) // false
// //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// function addTwoNums(a, b) {
//     console.log(a + b)
// }

// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };

// var useRandom = true;

// var getNumber;

// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }

// addTwoNums(getNumber(), getNumber())