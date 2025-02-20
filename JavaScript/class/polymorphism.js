const bicycle = {
    bell: function() {
        return "Tring Tring !!!"
    }
}

const door = {
    bell: function() {
        return "Open the door"
    }
}

// console.log(bicycle.bell());

// console.log(door.bell());

function ringTheBell(thing) {
    console.log(thing.bell())
}

ringTheBell(bicycle);

ringTheBell(door);

// POLYMORPHISH USING CLASSES IN JAVASCRIPT

console.log("POLYMORPHISH USING CLASSES IN JAVASCRIPT")

class Bird {
    useWings() {
        console.log("Flying")
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely Flapping")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving")
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();