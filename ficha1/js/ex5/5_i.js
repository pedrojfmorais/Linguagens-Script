'use strict';  

const palavras1=['css','html']; 
const palavras2=['angular','bootstrap','javascript']; 
const palavras3=['vue','svelte','react']; 
function fazQualquerCoisa(...arr) { // não é erro  
    for (let i=0; i <arr.length;i++) { 
        for (let j=0; j<arr[i].length;j++) 
            console.log(arr[i][j]); 
    } 
    console.log('---FIM-----'); 
} 
fazQualquerCoisa(palavras1); 
fazQualquerCoisa(palavras1,palavras2); 
fazQualquerCoisa(palavras1,palavras2, palavras3, palavras1);

// css
// html
// ---FIM-----
// css
// html
// angular
// bootstrap
// javascript
// ---FIM-----
// css
// html
// angular
// bootstrap
// javascript
// vue
// svelte
// react
// css
// html
// ---FIM-----