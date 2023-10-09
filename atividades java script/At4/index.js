// Define a quantidade em estoque do produto
let quantidadeEmEstoque = 50; // Exemplo: 50 unidades em estoque

// Solicita a quantidade desejada ao usuário
let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada:"));

// Verifica se há quantidade suficiente em estoque
if (quantidadeDesejada <= quantidadeEmEstoque) {
    alert("Produto disponível em estoque.");
} else {
    alert("Produto indisponível em estoque.");
}
