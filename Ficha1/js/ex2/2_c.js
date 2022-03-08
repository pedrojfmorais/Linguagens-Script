'use strict'; 

let num = 1;
let positivos = 0;
let negativos = 0;
let soma = 0;

while(num !== 0){
    
    num=parseInt(prompt("Especifique um numero: ")); 

    if(num > 0){
        ++positivos;
        soma += num;
    } else if(num < 0){
        ++negativos;
    }
}

console.log("Soma total: " + soma);
console.log("Números positivos: " + positivos);
console.log("Números negativos: " + negativos);