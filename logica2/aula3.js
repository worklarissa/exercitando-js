/*exercício em aula-Crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
-nome do cliente
-idade do cliente
-produtos consumidos
-cada produto pode ter:
-nome do produto
-quantidade comprada
-valor unitário do produto (em centavos)
coloque pelo menos 3 produtos*/

let cartaoConsumo ={
    nomeCliente:"José da Silva",
    idade:25,
    produtos:[
        { nomeProduto:'Protetor Solar',
          preco:10.00,
          quantidade:2},
        {nomeProduto:"Sabão em Pó",
         preco:8.00,
         quantidade:1},
        {nomeProduto:"Caixa de som",
         preco:199.99,
         quantidade:1}
    ]
}

//Imprima o nome do cliente
    console.log(cartaoConsumo.nomeCliente)
//Imprima a idade do cliente
    console.log(cartaoConsumo.idade)
//Modifique a idade do cliente e Imprima a nova idade do cliente
    cartaoConsumo.idade = 30
    console.log(cartaoConsumo.idade)
//Imprima o nome do primeiro produto consumido
    console.log(cartaoConsumo.produtos[0].nomeProduto)
//Imprima o preço unitário do último produto consumido por ele
    //console.log(cartaoConsumo.produtos[2].preco)
    console.log(cartaoConsumo.produtos[cartaoConsumo.produtos.length -1].preco)
//Imprimir uma mensagem amigavel que inclua chamar o cliente pelo nome e informar o valor que ele deve pagar
    let totalValor = 0
    for (let item of cartaoConsumo.produtos){
        totalValor = totalValor + (item.preco * item.quantidade) 
    }

    console.log( `Oi ${cartaoConsumo.nomeCliente}! Você precisa pagar ${totalValor}`)


//exercício sozinha 
/*let objExemplo = {
    nome: "Mayhhara",
    idade: 23,
    altura: 1.58,
    temCNH: true,
    apelidos: ["May", "Ma",]
}*/

//console.log((objExemplo.nome) tem (objExemplo.idade), (objExemplo.altura)m de altura, )

