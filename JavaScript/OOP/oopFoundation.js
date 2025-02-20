// FUNCTIONAL PROGRAMMING PARADIGM

console.log("FUNCTIONAL PROGRAMMING PARADIGM")

var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);
console.log("===================================================================================================")
// OOP PROGRAMMING PARADIGM
console.log("OOP PROGRAMMING PARADIGM")
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total Price', calculation);
    }
}

purchase1.totalPrice();
console.log("")
console.log("")
console.log("===================================================================================================")

console.log("OOP PROGRAMMING PARADIGM USING THIS")

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price', calculation);
    }
}

purchase1.totalPrice();
console.log("===================================================================================================")
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price', calculation);
    }
}

purchase2.totalPrice();
