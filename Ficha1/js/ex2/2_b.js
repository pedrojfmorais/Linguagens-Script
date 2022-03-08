'use strict'; 

const num1=1; 
const num2=5;

let menor;
let maior;
let soma = 0;

if(num1 < num2){
    menor = num1;
    maior = num2;
}else{
    menor = num2;
    maior = num1;
}

for (let index = menor+1; index < maior; index++) {
    soma += index;
}

console.log("Soma obtida: " + soma);