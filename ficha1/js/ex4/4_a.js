'use strict';  

function compara(a, b){
    if(a === b){
        return true;
    }
    return false;
}

function compara_tern(a, b){
    return (a === b) ? true : false;
}

console.log(compara(1,4));
console.log(compara(1,1));
console.log(compara_tern(1,1));
console.log(compara_tern(2,1));