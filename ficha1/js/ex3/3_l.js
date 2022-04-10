'use strict';  

var str="Linguagens" 
function fazQualquerCoisa() { 
    str2="Script" 
    console.log(str2); 
    var str2; 
} 
fazQualquerCoisa(); 
console.log(str2);

// Script
// erro, pois o scope de str2 é dentro da função, str2 não existe fora da função