class Polynomial {
    constructor(arr) {
        this.arr = arr;
    }
    derivative(){
        var derive = [];
        var expon = this.arr.length - 1;
        // loop through the and check if expon === 0

    }
    evaluate() {

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

var coef = [3, 0, 0, 4, 0, 10];
const test1 = new Polynomial(coef);
test1.printPoly();
