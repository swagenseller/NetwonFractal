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
    // (a + bi) / (c + di)
    // ac + bci + adi + bdi 
    // denom = (c^2 + d^2)
    divide(cnum) {
        var conjugate = new Cnumber(cnum.a, (-1* cnum.b));
        let muli = this.multiply(conjugate);
        console.log( "muli = " + muli.a + " + " + muli.b + "i" );
        let denom = (cnum.a * cnum.a) + (cnum.b * cnum.b);  

        let real = muli.a / denom;
        let imag = muli.b / denom;
        
        return new Cnumber(real, imag);

    }
    // (a + bi)^2
    power(x) {
        if (x === 0) {
            return new Cnumber(1,0);
        }
        else {
            x--;
            var temp = new Cnumber(this.a, this.b);
            for (var i = 0; i < x; i++) {
                temp = temp.multiply(this); 
            }
            return temp;
        }
        
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
const cnum5 = new Cnumber(11, 2);
const cnum6 = new Cnumber(4, 3);

const div = cnum5.divide(cnum6);
console.log(div.a + " + " + div.b + "i" );

// power test 

const cnum7 = new Cnumber(4, 3);

const pow = cnum7.power(5);
console.log(pow.a + " + " + pow.b + "i" );