'use strict';  

var str = 'Linguagens'; 
function fazQualquerCoisa() { 
    var str2 = ' Script'; 
    if (str==='Linguagens') { 
        var dim='ok'; 
        console.log("->"+dim); 
    } 
    console.log(str+str2+"- "+dim); 
} 
fazQualquerCoisa(); 
console.log(str+str2);

//->ok
//Linguagens Script- ok
// do tipo var, mas apenas está definida dentro da função, devido ao scope