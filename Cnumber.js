class Cnumber {
    // a is the real numbers, b is the imaginary numbers?
    constructor(a, b) {
        this.a;
        this.b;
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
    multiply(num) {

    }
    divide(num) {

    }
    power(num) {

    }
    // distance between 2 complex numbers. 
    dist(num) {

    }
    
}