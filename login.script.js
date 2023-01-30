function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

//Função para validar os campos e poder clicar no botão entrar.

function validandoCampos() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (validateEmail(email) && senha) {
        document.getElementById("botao-entrar").disabled = false;
    } else {
        document.getElementById("botao-entrar").disabled = true;
    }
}