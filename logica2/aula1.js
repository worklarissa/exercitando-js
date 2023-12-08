/*let validaNum = 50

if (validaNum > 20 ) {
    console.log (`O número ${validaNum} é maior que 20`)
} else if (validaNum < 20) {
    console.log (`O número ${validaNum} é menor que 20`)
} else{
    console.log(`O número ${validaNum} é igual a 20`)
}*/

//exercício média
let notaUm = 5
let notaDois = 6.75
let notaTres = 8
let notaQuatro = 0

let media = (notaUm + notaDois + notaTres + notaQuatro) / 4

if (media > 7){
    console.log(`Sua média é ${media}.APROVADO`)
}else if (media < 5){
    console.log(`Sua média é ${media}.REPROVADO`)
}else if (media >= 5 && media <=7){
    console.log(`Sua média é ${media}.EM RECUPERAÇÃO`)
}