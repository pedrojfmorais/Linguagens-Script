'use strict';  

function mensagem(nome='!') { 
    console.log(`Olá ${nome}`); 
} 
mensagem();  
mensagem('Maria');  
mensagem('Jose');  
mensagem('Cristiana','Areias');

//Olá !
//Olá Maria
//Olá Jose
//Olá Cristiana

// não aparece Areias, pois a função só recebe um parâmetro