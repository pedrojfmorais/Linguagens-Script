'use strict';  

function imprimeArray(el, index, arr){ // current value, index position on array, array
    console.log(el);
}

let palavras=['angular','bootstrap','javascript','vue','svelte','react']; 

palavras.pop(); // retira do array o último elemento
palavras.shift(); // retira do array o primeiro elemento

palavras.forEach(imprimeArray);