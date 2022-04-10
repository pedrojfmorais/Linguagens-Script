'use strict';  

function imprimeArray(array){
    for (const iterator of array) {
        console.log(iterator);
    }
}

let original=['angular','bootstrap','javascript','vue','svelte','react'];

let arr_final = original.map(function(val, index){
    return "[" + index + "]=" + val;
});

imprimeArray(arr_final);