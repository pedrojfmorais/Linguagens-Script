'use strict';  

function imprimeArray(array){
    for (const iterator of array) {
        console.log(iterator);
    }
}

let original=['angular','bootstrap','javascript','vue','svelte','react'];



let arr_final = original.reduce(function(total, currentValue){
    if(currentValue.length < 7){
        total.push("[" + currentValue + "]");
    }
    return total;
}, []);


imprimeArray(arr_final);