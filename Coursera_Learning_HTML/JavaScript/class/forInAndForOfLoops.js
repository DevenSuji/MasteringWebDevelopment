/*
const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar)

console.log("-----for-in is unreliable ------");

for (prop in sportsCar) {
    console.log(prop);
}

console.log("Iterating over object and its prototype");

console.log('-----for-of is reliable-----');

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop])
}

console.log("Iterating over object's OWN PROPERTIES only!")
*/

const car = {
    engine: true
}

const sportsCar = Object.create(car);
sportsCar.speed = "FAST!!!";
console.log("The sportsCar object: ", sportsCar);

for (prop in sportsCar) {
    console.log(prop);
}

for (prop of Object.keys(sportsCar)) {
    console.log(prop + ":" + sportsCar[prop]);
}