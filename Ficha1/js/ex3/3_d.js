'use strict'; 

function fazQualquerCoisa() { 
    let str = 'Script'; //o str só existe dentro da função, devido ao scope
 } 
 fazQualquerCoisa(); 
 console.log(str);