'use strict';  

function imprimeArray(el, index, arr){ // current value, index position on array, array
    console.log(el);
}

let palavras=['angular','bootstrap','javascript','vue','svelte','react']; 

palavras.sort(); // ordena por ordem alfabetica

palavras.forEach(imprimeArray);