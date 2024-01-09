//exercício de estruturas condicionais 
/*Crie um programa que recebe um número de 1 a 12 como entrada, representando um mês do ano. Verifique o número
e imprimir o nome do mês correspondente*/

/*let mes = 9

switch(mes){
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Março")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Setembro")
        break;
    case 10:
        console.log("Outubro")
        break;
    case 11:
        console.log("Novembro")
        break;
    case 12:
        console.log("Dezembro")
        break;
    default:
        console.log("Mês Inválido!")
}*/

//exercício de arrays
/*/*Crie um array chamado fila contendo os nomes das pessoas na fila de um estabelecimento. Utilize o método push 
para adicionar mais uma pessoa no final da fila.Utilize o método shift para remover a primeira pessoa da fila.
imprima o array resultante

let fila = ["João", "Pedro", "Luiz", "Gustavo", "Lucas", "Matheus", "Murilo", "Breno", "Jorge", "Paulo"]
console.log(fila)
fila.push("Rafael")
console.log(fila)
fila.shift()
console.log(fila)*/

//exercício de objetos
/*Crie um objeto aluno, com as seguintes propriedades:nome,idade,curso.
Imprima no console objeto aluno completo.
Modifique o valor da propriedade idade para  um novo valor
Adicione uma nova propriedade chamada nota e atribua um valor numérico a ela.
Imprima novamente o objeto aluno no console*/

let objAluno ={
    nome:"Joao",
    idade:"20",
    curso:"Informática"
}

console.log(objAluno)

objAluno.idade="25"
    console.log(objAluno)

objAluno.nota=7
console.log(objAluno)

