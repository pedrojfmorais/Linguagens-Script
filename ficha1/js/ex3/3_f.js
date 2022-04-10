'use strict';  

let str = 'Linguagens'; 
function fazQualquerCoisa() { 
    let str2 = ' Script'; 
     
    if (str.length > str2.length) { 
        let dim="Primeira é maior!" 
        console.log(dim); 
    } 
    else if (str.length === str2.length) { 
        let dim="São iguais!" 
        console.log(dim); 
    } 
    else { 
        let dim="Segunda é maior!" 
        console.log(dim); 
    } 
 
    console.log(str+str2+"-"+dim); 
} 
fazQualquerCoisa(); 

//Primeira é maior!
//erro dim não existe, só existe dentro do if, devido ao scope