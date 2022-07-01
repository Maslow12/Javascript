const PI = 3.14;

const radianes = grados => grados*PI/180;
const centesimales = rad => rad*200/PI;
const sexagesimales = cent => cent*180/200;

let grad = 90 /*Grados*/

let resRad = radianes(grad),
    resCent = centesimales(resRad),
    resSexa = sexagesimales(resCent);

console.log("Radianes:" + " " + String(resRad) + " " + " Centesimales:" + " " + String(resCent) + " Sexagensimales:" + " " + String(resSexa))