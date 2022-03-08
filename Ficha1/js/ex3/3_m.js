'use strict';  

function mensagem() { 
    let nome='José'; 
    console.log(`Olá ${nome}`); 
} 
mensagem();  
mensagem('Maria');  
mensagem('Maria','Jose','Vieira');

// Aparece 3 vezes "Olá José", pois a função não recebe parâmetros, e o valor de nome não é alterado