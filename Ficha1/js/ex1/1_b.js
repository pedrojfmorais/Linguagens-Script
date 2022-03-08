'use strict'; 

let variavel; 
variavel = '3' + 2; 
console.log(variavel) //32
variavel = '3' + true; 
console.log(variavel); //3true
variavel = '3' + undefined; 
console.log(variavel); //3undefined
variavel = '3' + null; 
console.log(variavel); //3null