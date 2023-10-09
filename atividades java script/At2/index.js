// Solicita o peso e a altura ao usuário
var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));

// Calcula o IMC
var imc = peso / (altura * altura);

// Exibe o resultado com base no IMC calculado
if (imc < 18.5) {
    alert("Você está abaixo do peso.");
} else if (imc >= 18.5 && imc < 24.9) {
    alert("Você está no peso ideal.");
} else {
    alert("Você está acima do peso.");
}
