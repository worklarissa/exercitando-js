//exercício junto com a professora
/*Faça um programa que recebe um código de status de pedido(ex:"PENDENTE", "EM_ANDAAMENTO", "ENTREGUE") como entrada.
Utilize switch case para verificar o código de status e imprimir a mensagem correspondente (ex: "Seu pedido está pendente de pagamento")
Caso o pedido não esteja em nenhum dos status acima, imprima a mensagem "status invélido ou pedido não computado".*/
let statusDePedido = "PENDENTE";

switch(statusDePedido) {
    case "PENDENTE":
        console.log(`Seu pedido está pendente de pagamento`)
        break;
    case "EM_ANDAMENTO":
        console.log(`Seu peedido está em andamento`)
        break;
    case "ENTREGUE":
        console.log(`Seu pedido foi entregue`)
        break;
    default:
        console.log(`Status inválido ou pedido não computado`)
    
}
//exerc