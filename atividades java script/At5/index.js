// Solicita as notas e os pesos ao usuário
let nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
let peso1 = parseFloat(prompt("Digite o peso da primeira prova:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));
let peso2 = parseFloat(prompt("Digite o peso da segunda prova:"));
let nota3 = parseFloat(prompt("Digite a nota da terceira prova:"));
let peso3 = parseFloat(prompt("Digite o peso da terceira prova:"));

// Calcula a média ponderada
let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

// Exibe o resultado da média ponderada
alert("A média ponderada é: " + mediaPonderada.toFixed(2));
