'use strict';  

function imprimeArray(array){
    for (const iterator of array) {
        console.log(iterator);
    }
}

let original=['angular','bootstrap','javascript','vue','svelte','react'];

let arr_final = original.filter(function(val){
    return val.length < 7;
});

arr_final = arr_final.map(function(val){
    return "[" + val + "]";
});

imprimeArray(arr_final);