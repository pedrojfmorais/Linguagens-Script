'use strict';  

function contaVogais(texto){
    return texto.match(/[aeiou]/gi).length;
}

console.log(contaVogais("Ola"))      //2 
console.log(contaVogais("Linguagens Script")) //5