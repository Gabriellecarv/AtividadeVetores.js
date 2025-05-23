let A = [1, 0, 5, -2, -5, 7];
let soma = A[0] + A[1] + A[5];
A[4] = 100;

console.log("A soma dos valores A[0], A[1] e A[5] é: " + soma);
A.forEach(valor => console.log(valor));

let valores = [10, 20, 30, 40, 50, 60];
console.log("valores informados:");
valores.forEach(valor => console.log(valor));

let vetor10 = [1, 2,12,4, 15, 33, 41,29,3,26];
let pares = vetor10.filter(num => num % 2===0);
console.log("Quantidade de números pares: ", pares.length);

let numeros= [1.2, 2.5,3.1, 4.0, 5.6, 6.3,7.7, 8.8, 9.9, 10.1];
let quadrados = numeros.map(n=>n**2);
console.log("Numeros ao quadrado:");
quadrados.forEach(num =>console.log(num));

let vetor8 =[3,9,10,24,31,6,4,1];
let x = 2;
let y = 6;
let somaXY = vetor8[x] + vetor8[y];
console.log("A soma dos valores nas posições ${x} e {y} é: " + somaXY);