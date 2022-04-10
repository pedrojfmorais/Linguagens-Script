'use strict';  
/*
let n = 50;
if (true) { 
    let n = 2;
    console.log(n);
} 
console.log(n); 

// 2
// 50
*/
 
 /*
let n = 50;
if (true) { 
     console.log(n); 
     n = 2; 
     console.log(n); 
} 
console.log(n); 
 
// 50
// 2
// 2
*/
 
let n = 50;
//let n = 50; -> não podemos declarar duas vezes a mesma variavel num scope onde ja exista
if (true) { 
     //console.log(n); -> não tem acesso à variável, pois não está declarada dentro do scope do if
     let n = 2; 
     console.log(n); 
} 
console.log(n);

// 2
// 50