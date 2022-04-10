'use strict';  

let vogais = ['a','e','i','o','u']; 
let letras = vogais; //copia o endereço, devido a ser array
letras.push('X'); 
 
console.log(vogais); // Escreve apenas vogais ou  vogais + X ?  -> vogais + X
console.log(letras); // Escreve apenas vogais ou  vogais + X ?  -> vogais + X
 
let letra ='Z'; 
let letraZ = letra; 
letra='Y'; 
console.log(letra);     // Escreve Z ou Y?  -> Y
console.log(letraZ);    // Escreve Z ou Y?  -> Z