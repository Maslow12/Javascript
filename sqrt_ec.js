const delta = (a,b,c) => Math.sqrt(Math.pow(b,2)-4*a*c)
const x1 = (a,b,delta) => (-b+delta)/(2*a)
const x2 = (a,b,delta) => (-b-delta)/(2*a)

var a1 = 1,
    b1 = -1,
    c1 = 2;

let resdelta = delta(a1,b1,c1),
    resX1 = x1(a1,b1,resdelta),
    resX2 = x2(a1,b1,resdelta);

console.log(resX1)
console.log(resX2)
