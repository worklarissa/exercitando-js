//exercicio um
/*const mostrarTabuada = (numero) => {
    for (let i = 1 ; i <= 10; i++)  {
        console.log(numero * i);
    }
}

mostrarTabuada(9);
*/

//exemplo- forEach
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

numeros.forEach((numero) => {
    console.log(numero + 1);
})
*/
//exercicio um- forEach
/*const positivoNegativo = [10, -2, 5, -8, 15];

positivoNegativo.forEach((numero) => {
    if  (numero < 0){
       console.log(`${numero} é negativo`);
   } else{
      console.log(`${numero} é positivo`)
   }
});
*/

//Exercício dois
const valor = [10, 20, 30, 40, 50];

function dobrarNumero(valor) {
    valor.forEach((i) => {
        resultado = i * 2;
        console.log(`O ${i}, dobrado é: ${resultado}`);
    })
}

dobrarNumero(valor)
