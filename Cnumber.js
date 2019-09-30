class Cnumber {
    // a is the real numbers, b is the imaginary numbers?
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add(num){
        let newA = this.a + num.a;
        let newB = this.b + num.b;

        return new Cnumber(newA, newB);
    }
    subtract(num) {
        let newA = this.a - num.a;
        let newB = this.b - num.b;

        return new Cnumber(newA, newB);
    }
    // (a + bi) * (c + di)
    multiply(num) {
        var ac = this.a * num.a;
        var ad = this.a * num.b;
        var bc = this.b * num.a;
        var bd = this.b * num.b;

        let real = ac - bd;
        let imag = ad + bc;
        
        return new Cnumber(real, imag);
    }
    divide(num) {

    }
    power(num) {

    }
    // distance between 2 complex numbers. 
    dist(num) {

    }
    
};


// addition test
const cnum1 = new Cnumber(2, 3);
const cnum2 = new Cnumber(5, -6);

const addition = cnum1.add(cnum2);
console.log(addition.a + " + " + addition.b + "i" );

// multiplication test
const cnum3 = new Cnumber(3, 2);
const cnum4 = new Cnumber(1, 7);

const multi = cnum3.multiply(cnum4);
console.log(multi.a + " + " + multi.b + "i" );

// division test
