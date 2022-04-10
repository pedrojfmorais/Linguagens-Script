'use strict'; 

let str = 'Linguagens'; 
function fazQualquerCoisa() { 
    let str2 = ' Script'; 
    console.log(str+str2); 
} 
fazQualquerCoisa(); 
console.log(str+str2);

//Linguagens Script
//erro, str2 só existe dentro da função, devido ao scope