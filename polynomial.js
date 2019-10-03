class Polynomial {
    constructor(arr) {
        this.arr = arr;
    }
    derivative(){
        var derive = [];
        var expon = this.arr.length - 1;
        // loop through the arr and check if expon === 0
        for (var i = 0; i < this.arr.length; i++) {
            if (expon === 0) {
                continue;
            }
            else {
                derive[i] = expon * this.arr[i];
                expon--;
            }
        }
        return derive;

    }
    // evaluate for complex numbers
    evaluate(cnum) {
        var fx = new Cnumber(0,0);
       // var fx = 0;
        var expon = this.arr.length - 1;
        for (var i = 0; i< this.arr.length; i++) {
            if (this.arr[i] === 0) {
                expon--;
                continue;
            }
            else {
                var expand = cnum.power(expon);
                console.log(" simplified at x^" + expon + ": " + expand.a + " + " + expand.b);
                expand.a = this.arr[i] * expand.a;
                expand.b = this.arr[i] * expand.b;
                fx = fx.add(expand);
                expon--;
            }
        }
        return fx;

    }
    // evaulates for real numbers
    evaluateReal(num) {
        var fx = 0;
        var expon = this.arr.length - 1;
        for (var i = 0; i< this.arr.length; i++) {
            if (this.arr[i] === 0) {
                expon--;
                continue;
            }
            else {
                fx = fx +  this.arr[i] * Math.pow(num, expon);
                expon--;
            }
        }
        return fx;

    }
    // prints out the polynomial or derivative
    printPoly() {
        var format = "";
        var expon = this.arr.length - 1;
        for (var i =0; i< this.arr.length; i++) {
            if( expon === 0) {
                format += this.arr[i];
            }
            else {
                format += this.arr[i] + "x^" + expon + " + "; 
            }
            expon--; 
        }
        console.log(format);
    }
}
// test printPloy
var coef = [3, 0, 0, 4, 0, 10];
const test1 = new Polynomial(coef);
test1.printPoly();

// test derive

console.log("derivative of " + coef);
const derive = test1.derivative();
const test2 = new Polynomial(derive);
test2.printPoly();

// testing real numbers evaulate
console.log("testing real numbers ")
var test3 = new Polynomial([2,-4, 0,  0, 2]);
console.log(test3.evaluateReal(2));

// testing for complex numbers
console.log("testing for complex numbers ")
var complex = new Cnumber(2,-3);
var ploy = new Polynomial([1, 0, 2]);
console.log(ploy.evaluate(complex));


