'use strict';  

function imprimeArray(el, index, arr){ // current value, index position on array, array
    console.log(el);
}

let palavras=['angular','bootstrap','javascript','vue','svelte','react']; 

palavras.push("ember"); // adiciona ao fim do array
palavras.unshift("css"); // adiciona ao inicio do array

palavras.forEach(imprimeArray);