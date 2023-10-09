// Solicita o valor em reais ao usuário
let valorEmReais = parseFloat(prompt("Digite o valor em reais:"));

// Define a taxa de câmbio fixa
let taxaDeCambio = 5.50; // Exemplo: 1 real = 5.50 dólares

// Calcula o valor em dólares
let valorEmDolares = valorEmReais / taxaDeCambio;

// Exibe o valor convertido em dólares
alert("O valor em dólares é: $" + valorEmDolares.toFixed(2));
