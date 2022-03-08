'use strict';  

function somatorio(...nums){
    let soma = 0;
    for (const iterator of nums) {
        soma += iterator;
    }
    return soma;
}

console.log(somatorio(1,2,3,4,1)); 
console.log(somatorio(1,5,5)); 
console.log(somatorio(11));