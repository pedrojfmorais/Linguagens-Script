'use strict'; 

const num1=parseInt(prompt("Especifique o numero 1: ")); 
const num2=parseInt(prompt("Especifique o numero 2: ")); 
const num3=parseInt(prompt("Especifique o numero 3: "));

let maior;

if(num1 >= num2 && num1 >= num3){
    maior = num1;
} else if(num2 >= num1 && num2 >= num3){
    maior = num2;
} else{
    maior = num3;
}

console.log("O maior entre " + num1 + "," + num2 + " e " + num3 + " é " + maior);