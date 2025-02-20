class Vehicle {
    startEngine() {
        console.log("Engine started!");
    }

    accelerate() {
        console.log("Accelerating...");
    }
}

class Car extends Vehicle {
    accelerate() {
        super.accelerate();
        console.log("Speeding up on wheels!");
    }
}

class Boat extends Vehicle {
    accelerate() {
        super.accelerate();
        console.log("Gaining speed on water!");
    }
}

class Airplane extends Vehicle {
    startEngine() {
        super.startEngine();
        console.log("Propellers spinning!");
    }

    accelerate() {
        super.accelerate();
        console.log("Taking off into the skies!");
    }
}
console.log("====================")
var myCar = new Car();
var myBoat = new Boat();
var myAirplane = new Airplane();

myCar.startEngine();
myCar.accelerate();

myBoat.startEngine();
myBoat.accelerate();

myAirplane.startEngine();
myAirplane.accelerate();