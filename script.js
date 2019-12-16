/*let coef = [1,0,0,-1];
let fx = new Polynomial(coef);
let dx = new Polynomial(fx.derivative());
// array of complex numbers  */

var roots = [new Cnumber(1,0), new Cnumber(-0.5, Math.sqrt((3)/2)), new Cnumber(-0.5, -(Math.sqrt((3)/2))) ];
var roots2 = {
    r: new Cnumber(1,0),
    g: new Cnumber(-0.5, (Math.sqrt(3)/2)),
    b: new Cnumber(-0.5, -(Math.sqrt(3)/2)) 
}
var zoom = 200;
var resolution = 500;


// function to evaluate Newton's method 
// paramters: polynomials fx and dx, cnum is the complex number guessed
// returns the complex number resulted
function evalNewton(fx, dx, cnum){
    var evalFx = fx.evaluate(cnum);
    var evalDx = dx.evaluate(cnum);
    // f(x) / f'(x)
    var fxdx = evalFx.divide(evalDx);
    return cnum.subtract(fxdx); 

}
// newton's method


function fractal() {
    
    for (let i =-250; i< 250; i++){
        for (let j =-250; j< 250; j++){
            let fx = new Polynomial([1,0,0,-1]);
            let dx = new Polynomial(fx.derivative());
            let count = 0;
            let xn = new Cnumber(i/zoom, j/zoom);
            let newN = xn;
            do {
                let evalFx = fx.evaluate(xn);
                let evalDx = dx.evaluate(xn);
    // f(x) / f'(x)
                let fxdx = evalFx.divide(evalDx);
                let temp= xn.subtract(fxdx);
                newN.a = temp.a;
                newN.b = temp.b;
                //newN = evalNewton(fx, dx, xn);
                count++;
            } while (isGreater(newN) == null && count < resolution);
            let color = isGreater(newN) || 0;
            
            fill(color, 100, 100);
            rect((i+250), (j+250), 1, 1);
            
        }
    }
}

var res = 0.5;
function isGreater(cnum) {
    if (cnum.dist(roots[0]) <= res){
        return 0;
    }
    else if(cnum.dist(roots[1]) <= res ){
        return 66; 
    }
    else if (cnum.dist(roots[2]) <= res){
        return 33;
    }
    else {
        return null;
    }
}

function setup(){
    createCanvas(500,500);
    colorMode(HSB, 100);
    noStroke();
    fractal();
}

// intial test of evalNetwon is working
//const firstIteration = evalNewton(fx,dx,roots[0]);
//console.log("Xn+1 = " + firstIteration.a + " + " + firstIteration.b + "i");