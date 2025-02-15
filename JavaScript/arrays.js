// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 'red') {
//             console.log(i*100, "tomato!")
//         } else {
//             console.log(i*100, arr[i])
//         }
//     }
// }

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);

// function letterFinder(word, match) {
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] === match) {
//             console.log('Found the', match, 'at', i)
//         }
//         else {
//             console.log('---No match found at', i)
//         }
        
//     }
// }

// letterFinder('test', 't')

// PUSH ADDS ITEMS TO THE END OF THE ARRAY

var fruits = [];
fruits.push("apple");
fruits.push('pear');

console.log(fruits)

// POP REMOVES ITEMS TO THE END OF THE ARRAY

fruits.pop();
console.log(fruits);


// Array Builder Function

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

let simpleArr = arrayBuilder("Happy", "Birthday", "Pavi");

console.log(simpleArr)