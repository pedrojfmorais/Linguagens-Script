'use strict';  

mensagem();  
function mensagem() { 
    let nome='José'; 
    console.log(`Olá ${nome}`); 
}

//aparece "Olá José", pois embora se deva definir primeiro a função, 
// mesmo que seja definida só depois de ser chamada ela vai funcionar