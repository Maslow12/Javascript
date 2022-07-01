/*Factorial, suma, restas*/
function suma(a,b,...c){
    let resultado = a+b;
    c.forEach(function(n){
        resultado = n + resultado
    })

    return resultado
}
function resta(a,b,...c){
    let resultado = a+b;
    c.forEach(function(n){
        resultado = n - resultado
    })

    return resultado
}
function factorial(a,b,...c){
    let resultado = a*b;
    c.forEach(function(n){
        resultado = n * resultado
    })

    return resultado
}
