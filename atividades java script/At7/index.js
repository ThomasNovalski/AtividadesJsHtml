// Define o login e a senha pré-definidos
let loginCorreto = "usuario";
let senhaCorreta = "senha123";

// Solicita ao usuário o login e a senha
let login = prompt("Digite o login:");
let senha = prompt("Digite a senha:");

// Verifica se o login e a senha correspondem aos valores pré-definidos
if (login === loginCorreto && senha === senhaCorreta) {
    alert("Login bem-sucedido!");
} else {
    alert("Login e/ou senha incorretos. Tente novamente.");
}
