'use strict'; 

let str = 'Linguagens'; 
function fazQualquerCoisa() { 
    str = 'Script'; 
} 
console.log(str); //Linguagens
fazQualquerCoisa(); 
console.log(str); //Script