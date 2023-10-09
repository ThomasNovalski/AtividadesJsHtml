// Solicita ao usuário uma lista de compras
let listaCompras = prompt("Digite a lista de compras (separe os itens por vírgula):");

// Divide a lista em itens usando a vírgula como separador
let itens = listaCompras.split(",");

// Exibe a lista de compras
alert("Lista de compras: " + itens.join(", "));
