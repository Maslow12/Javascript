/*Programa de numeros pares imprimir*/
let no_primos = 0;
let primos = 0;

for (let i = 1; i < 1000; i++) {
    let nro = i
    for( let j = 1; j < nro; j++){
        if (nro % j+1 == 0){
            no_primos++;
        }
        else if( j == nro-1 ){
            break;
            primos++
        }
    }
}

console.log(primos)
console.log(no_primos)
