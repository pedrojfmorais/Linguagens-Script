'use strict'; 

let n1=3; 
let n2=6; 
let n3; 
console.log(n1+n2);        // 1) 9
console.log(n1+"n3");      // 2) 3n3
console.log(n1+"5");       // 3) 35
console.log(n1+"n2");      // 4) 3n2
console.log(n1+n3);        // 5) NaN
console.log(n3);           // 6) undefined
console.log(`Variavel n1*n2 = ${n1*n2} ( n1=${n1} e n2=${n2})`); //7) Variavel n1*n2 = 18 (n1=3 e n2=6)
n3=n1+n2;                
console.log(n3);        //8) 9
n3=n1+"---"+n2;          
console.log(n3);        //9) 3---6
n3="6";          
console.log(n1+n3);     // 10 36
console.log(n2===n3);   // 11    True ou False ? false 
console.log(n2==n3);    // 12    True ou False ? true
console.log(n2!==n3);   // 13    True ou False ? true
console.log(n2!=n3);    // 14    True ou False ? false
console.log(n1++);      // 15 3
console.log('n1='+n1);  // 16 n1=4
n1=4;    
console.log(++n1);       // 17 5
console.log('n1='+n1);   // 18 n1=5