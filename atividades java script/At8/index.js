// Solicita ao usuário o valor do produto e a porcentagem de desconto
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));

// Calcula o valor do desconto
let valorDesconto = (valorProduto * porcentagemDesconto) / 100;

// Calcula o valor final do produto com o desconto aplicado
let valorFinal = valorProduto - valorDesconto;

// Exibe o valor final do produto com o desconto
alert("Valor final do produto com desconto: R$" + valorFinal.toFixed(2));
