/*function meuNome() {
    console.log("Larissa");
}

meuNome()*/

//exercício um
/*function nomeIdade(nome, idade) {
    console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`)
}

nomeIdade("Larissa", 19)*/

/*exercício dois
function mediaDeNotas(nota1, nota2, nota3) {
    let soma = nota1 + nota2 + nota3
    let calculo = soma / 3
    console.log(`Sua nota é:  ${calculo}`) 
}

mediaDeNotas(10, 5, 8);
*/

//exercio três
 /*let segundos = 1800000
function tempo (segundos){
    minutos = segundos / 60
    console.log (`Esse tempo em segundos é igual a ${minutos} minutos`)
    horas = segundos / 3600
    console.log (`Esse tempo em segundos é igual a ${horas} horas`)
}

tempo (segundos)*/

const verificaMaiorNumero = (n1, n2, n3) => {
    if (n1 > n2 && n1 > n3) {
        console.log (`O maior número é o ${n1}`);
    } 
    else if (n2 > n1 && n2 > n3) {
        console.log (`O maior número é o ${n2}`);
    } 
    else if (n3 > n1 && n3 > n2) {
        console.log (`O maior número é o ${n3}`);
    }
}

verificaMaiorNumero (4, 21, 12)
