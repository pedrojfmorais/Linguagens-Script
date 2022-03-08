'use strict';  

function fazQualquerCoisa() { 
    console.log(str); 
} 
fazQualquerCoisa(); 
var str = 'Linguagens'; 

//quando é var aparece undefined, pois as variaveis são sempre declaradas em primeiro lugar, 
// mesmo que estejam perdidas no meio do código com a exceção do let, 
// que só é declarada quando lá chegar, percorrendo o código todo até lá

// só é atribuido o valor à variavel quando o código lá chega, por isso aparece undefined